# Solenne & Grant Engagement Party Website

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```

## Firebase setup
1. Go to Firebase Console.
2. Create a project.
3. Add a Web App.
4. Create a Realtime Database.
5. Copy your Firebase config values into `.env` locally and into Vercel/Netlify environment variables.

## Deploy on Vercel
1. Push this folder to GitHub.
2. Import the GitHub repo into Vercel.
3. Add the same environment variables from `.env.example`.
4. Deploy.

## Deploy on Netlify
1. Push this folder to GitHub.
2. Import the repo into Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add the same environment variables from `.env.example`.
6. Deploy.
