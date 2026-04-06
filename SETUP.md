# CautJob MVP — Setup & Next Steps

## Status
✅ **MVP v1 Live** — Local development ready  
✅ Chat AI (mock responses for testing)  
✅ Jobs page + CV Builder  
✅ UI complete (Tailwind + custom components)  
✅ Build successful, zero errors  

## Test Local
```bash
cd C:\Users\catal\Desktop\Proiecte\cautjob
npm run dev
# Open http://localhost:3000
```

## Features Implemented
- **Homepage**: Hero, stats, how-it-works, CTA
- **Chat Widget**: Fixed bottom-right, conversational UI
- **Jobs Page**: Search + filter by sector, mock data
- **CV Builder**: 4-step form (data → experience → skills → export)
- **Responsive**: Mobile-first, Tailwind CSS

## To Add (Phase 2)
1. **Real Groq API** — Update `.env.local` with GROQ_API_KEY
2. **Supabase** — Database for jobs (real data instead of mock)
3. **Auth** — NextAuth.js (Facebook + Gmail login + email signup)
4. **Dual Roles** — Employer account + job posting
5. **PDF Export** — CV to PDF download
6. **Deploy** — Push to GitHub → Vercel auto-deploy

## Env Variables Needed (when ready)
```
GROQ_API_KEY=<your-key>
NEXTAUTH_SECRET=<random-string>
GOOGLE_ID=<from-console>
GOOGLE_SECRET=<from-console>
FACEBOOK_ID=<from-console>
FACEBOOK_SECRET=<from-console>
NEXT_PUBLIC_SUPABASE_URL=<url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<key>
```

## Deploy to Vercel
1. Push to GitHub: `https://github.com/YOUR_USERNAME/cautjob`
2. Import on Vercel (auto-connects)
3. Add env vars on Vercel dashboard
4. Auto-deploy on push

## Colectare Joburi (manual — 3 ore)
- eJobs, BestJobs, OLX → search "Craiova"
- Format: title, company, sector, salary, description, whatsapp contact
- Insert to jobs table (Supabase)

---

**Next session:** Add Groq API key → chat becomes real.
