import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#1E3A8A] to-[#0A1128]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">👨🏾‍🚀</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            WELCOME TO THE AKUVERSE
          </h1>
          <div className="h-1 w-48 mx-auto bg-gradient-to-r from-[#DC2626] via-white to-[#DC2626] mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl text-[#FCD34D] font-semibold mb-6 italic">
            "Can astronauts be Black?"
          </p>
          <p className="text-xl text-gray-200 mb-4">
            A young boy's question.
          </p>
          <p className="text-xl text-gray-200 mb-4">
            An artist's answer.
          </p>
          <p className="text-xl text-white font-semibold">
            A universe born from believing.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <p className="text-lg text-gray-100 leading-relaxed">
            Aku represents every child who's ever wondered if space is for them. 
            Through storytelling, art, and community, we're proving that{' '}
            <span className="text-[#10B981] font-semibold">the stars belong to everyone</span>.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* The Story */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#FCD34D]/50 transition-all hover:scale-105">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-2xl font-bold text-white mb-3">THE STORY</h3>
            <p className="text-gray-300 mb-4">
              Aku: Journey to Ibra—award-winning middle-grade sci-fi adventure
            </p>
            <a 
              href="https://www.penguinrandomhouse.com/books/746514/aku-journey-to-ibra-by-micah-johnson/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#FCD34D] font-semibold transition-colors"
            >
              Pre-Order Now →
            </a>
          </div>

          {/* The Project */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#FCD34D]/50 transition-all hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">THE PROJECT</h3>
            <p className="text-gray-300 mb-4">
              14,833 Akutars—community-owned universe of representation
            </p>
            <a 
              href="https://opensea.io/collection/akutars"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#10B981] hover:text-[#FCD34D] font-semibold transition-colors"
            >
              Explore Collection →
            </a>
          </div>

          {/* The Mission */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#FCD34D]/50 transition-all hover:scale-105">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-white mb-3">THE MISSION</h3>
            <p className="text-gray-300 mb-4">
              Diversity in STEM. Dreaming without limits. Anyone can reach the stars.
            </p>
            <Link 
              href="/mission"
              className="text-[#10B981] hover:text-[#FCD34D] font-semibold transition-colors"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link 
            href="/quiz"
            className="px-12 py-4 bg-gradient-to-r from-[#DC2626] to-[#7C3AED] text-white text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Discover Your Akutar 🌌
          </Link>
          
          <a 
            href="https://www.penguinrandomhouse.com/books/746514/aku-journey-to-ibra-by-micah-johnson/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-white/10 backdrop-blur-sm text-white text-xl font-semibold rounded-full border-2 border-white/30 hover:border-[#FCD34D] hover:bg-white/20 transition-all"
          >
            Pre-Order Book
          </a>
        </div>

        {/* About Micah */}
        <div className="max-w-3xl mx-auto mt-20 p-8 bg-gradient-to-br from-[#7C3AED]/20 to-[#DC2626]/20 backdrop-blur-sm rounded-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">About Micah Johnson</h2>
          <p className="text-gray-200 mb-4">
            Former MLB player turned digital artist and creator of Aku.
          </p>
          <p className="text-gray-300 leading-relaxed">
            After overhearing a young boy ask "Can astronauts be Black?", Micah created Aku—
            a 3D animated boy in an oversized astronaut helmet. That character became a movement, 
            proving that representation changes who gets to dream.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <p className="mb-2">
          Built with ❤️ for the Aku community
        </p>
        <p className="text-sm">
          <a href="https://aku.world" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Aku.world
          </a>
          {' • '}
          <a href="https://twitter.com/AkuDreams" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            @AkuDreams
          </a>
          {' • '}
          <a href="https://opensea.io/collection/akutars" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            OpenSea
          </a>
        </p>
      </footer>
    </main>
  );
}
