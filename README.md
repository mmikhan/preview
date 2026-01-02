# Codecanyon Preview Launcher

A simple Next.js app that helps bypass iframe restrictions on Codecanyon live preview links. When Codecanyon displays your app inside an iframe, login gates and certain features may be blocked. This app provides a landing page with a button that opens your actual demo in a new tab, outside the iframe.

## How It Works

1. Deploy this app to your preferred hosting platform
2. Use the deployed URL with a `redirect` query parameter as your Codecanyon Live Preview URL
3. When users click the preview on Codecanyon, they see a button
4. Clicking the button opens your actual demo in a new tab, bypassing the iframe

## Usage

Add the `redirect` parameter to your deployed URL:

```
https://your-preview-app.com/?redirect=https://demo.yourapp.com
```

You can include any query parameters in the redirect URL:

```
https://your-preview-app.com/?redirect=https://demo.yourapp.com?product=pos&demo=true
```

## Getting Started

First, install dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000?redirect=https://example.com](http://localhost:3000?redirect=https://example.com) with your browser to test it.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Deploy

Deploy to Vercel, Netlify, or any platform that supports Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/preview)

## License

MIT
