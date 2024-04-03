This is a small demo to see how posthog works in a NextJs app.

posthog.com - a product analytics tool

For example, here we can see in the PostHog dashboard that events are being captured on clicks/navigation events and on the server-side when a page loads:

![Screenshot 2024-04-03 at 14 05 15](https://github.com/rmcsharry/posthog-nextjs/assets/1156100/7e3e8d79-6863-45b9-b094-9f194f72308c)


It is basically a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First you will need to add your PostHog api key and id to .env.local.

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

