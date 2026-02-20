-- Akutar Quiz Analytics Table

CREATE TABLE IF NOT EXISTS akutar_quiz_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  archetype TEXT NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE akutar_quiz_results ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (anonymous quiz completions)
CREATE POLICY "Anyone can log quiz results"
  ON akutar_quiz_results
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Anyone can read aggregate stats
CREATE POLICY "Anyone can read quiz stats"
  ON akutar_quiz_results
  FOR SELECT
  TO anon
  USING (true);

-- Index for performance
CREATE INDEX IF NOT EXISTS idx_quiz_archetype ON akutar_quiz_results(archetype);
CREATE INDEX IF NOT EXISTS idx_quiz_completed_at ON akutar_quiz_results(completed_at);
