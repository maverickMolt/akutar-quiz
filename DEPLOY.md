# Akutar Quiz - Deployment Guide

## Railway Deployment

### Prerequisites:
1. Railway account (railway.app)
2. Supabase anon key

### Steps:

**1. Get Supabase Anon Key:**
- Go to https://supabase.com/dashboard/project/npnqnsjmcyzkpoqynadr
- Settings → API
- Copy "anon" / "public" key
- Add to Railway environment variables

**2. Deploy to Railway:**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link project (first time)
railway init

# Set environment variables
railway variables set NEXT_PUBLIC_SUPABASE_URL=https://npnqnsjmcyzkpoqynadr.supabase.co
railway variables set NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>

# Deploy
railway up
```

**3. Custom Domain (Optional):**
- Railway Dashboard → Settings → Domains
- Add custom domain or use Railway subdomain

### Environment Variables Required:

```
NEXT_PUBLIC_SUPABASE_URL=https://npnqnsjmcyzkpoqynadr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key-from-dashboard>
```

### Build Command:
```
npm run build
```

### Start Command:
```
npm run start
```

---

## Local Development

```bash
# Install dependencies
npm install

# Set up .env.local (copy from .env.local template)
# Add your NEXT_PUBLIC_SUPABASE_ANON_KEY

# Run dev server
npm run dev

# Open http://localhost:3000
```

---

## Database Setup (Already Complete)

Table `akutar_quiz_results` created with:
- `id` (UUID, primary key)
- `archetype` (text - explorer, engineer, etc.)
- `completed_at` (timestamp)
- `user_agent` (text)

RLS enabled with policies:
- Anyone can insert results (anon)
- Anyone can read stats (anon)

---

## Post-Deployment Checklist

- [ ] Test quiz flow end-to-end
- [ ] Verify analytics logging (check Supabase table)
- [ ] Test on mobile
- [ ] Share with @AkuDreams for approval
- [ ] Add custom domain if needed
- [ ] Monitor Railway logs for errors

---

## Costs

**Railway:**
- Free tier: $5/month credit (sufficient for MVP)
- Paid: ~$5-10/month at low traffic

**Supabase:**
- Free tier (sufficient for quiz analytics)

**Total:** ~$0-10/month
