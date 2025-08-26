# Link Hub (guns.lol-inspired)

A personal link hub built with Next.js, TailwindCSS, Prisma, NextAuth, and PostgreSQL. Deployable to Vercel.

## Features
- OAuth login (Discord + Google)
- User dashboard to edit profile and links with live preview
- Public profile at /[username] (redirects to /u/[username])
- Themes, fonts, colored buttons
- Analytics: visit counts and per-link clicks
- QR code endpoint for any URL

## Quickstart
1. Copy env:
```
cp .env.example .env.local
```
2. Fill `DATABASE_URL`, OAuth keys, and `NEXTAUTH_SECRET`.
3. Install deps and set up DB:
```
npm i
npx prisma migrate dev --name init
```
4. Run:
```
npm run dev
```
5. Visit http://localhost:3000

## Prisma
- Edit `prisma/schema.prisma` as needed.
- `npm run prisma:studio` to inspect data.

## Deploy
- Push to GitHub and import to Vercel.
- Set env vars in Vercel project settings.
- Add a Postgres add-on (e.g., Neon, Supabase, Railway).

## Notes
- Username is auto-generated on first sign-in and can be changed in the dashboard (unique constraint enforced).
- Short URL: `/ayush` redirects to `/u/ayush`. Also `/api/short?u=ayush`.