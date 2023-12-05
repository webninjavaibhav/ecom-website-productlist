## Getting Started
First, check that root directry having .env file or not if exist verify below variable. If there is no .env file please make .env file on root directry and add below variables :

```bash
NEXT_PUBLIC_BASE_URL=https://dummyjson.com/
```

Once you verify or add env open terminal and add dependancies with below command (It'll take few minutes):

```bash
npm install
# or
yarn
```

After installed dependancies run below command for start development server :

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build

If you create Production build run below command:

```bash
npm run build
# or
yarn build
```

It'll ganrated Production build for website in static folder.

## Deploy on Vercel

The easiest way to deploy your your app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
