This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install your dependencies with either:

```bash
npm install
#or
yarn install
```

Then you can run the development server:

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result!

You can start editing the main page by modifying `pages/index.tsx`. The page auto-updates as you edit the file as long as you keep the server running locally.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/counts](http://localhost:3000/api/counts). This endpoint's behavior can be edited in `pages/api/count.ts`. The data itself lives at `pages/api/count.js`.

(Note: The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.)

Once you get the app running locally, you can view the [CanvasJSChart](https://canvasjs.com/react-charts/) by clicking "Fetch Data". The canvas chart shows the data from `api/counts.js` - counts on the line, and annotations as labelled highlights. You can inspect the chart more thoroughly by clicking and dragging on any part of the chart. That's it!

## Linting
Since version 11.0.0, Next.js has provided an integrated ESLint experience out-of-the-box: `npm run lint` will show you warnings and errors.

## `cypress`
Cypress tests are run from `/cypress/integration/app.spec.js`.

From the command line:
- `npm run cy:open-only` will open the cypress GUI
- `npm run cy:run-only` will run cypress tests
- `npm run cy:open` will run dev to run our app locally, and then run `cy:open-only` to open the cypress GUI.
- `npm run cy:run` will run dev to run our app locally, and then run `cy:run-only` to run the cypress tests in the terminal.

When tests run in the terminal you'll see an output of any passing or failing tests. Cypress will upload a screenshot and .mp4 for you to reference! This makes things much easier to start debugging.

We could also test API calls with Cypress, but that was a bit out of scope for this project. [Check out their documentation!(https://www.cypress.io/blog/2019/12/23/asserting-network-calls-from-cypress-tests/))

Normally I'd love to include `react-testing-library`. It provides a really thorough way to get unit tests set up, which is particularly useful for more complicated React rendering issues. `react-testing-library` is pretty lightweight but required more dependencies (like `Jest`) than it was worth for unit testing a single component (`Chart`). [Check out the API](https://testing-library.com/docs/react-testing-library/api) to see more of what it can do.

## `prettier`
You can run `prettier` in your command line via `npx prettier --write .`. Prettier rules are in `.prettierrc.json`.

## Performance
Check out /public/lighthouse-summary! Overall:
- Performance 81/100
- Accessibility 95/100
- Best practices 93/100
- SEO 100/100

Performance could be improved by better handling canvas animations and layout shifts. It would also be useful if we could break up the data to make smaller requests.

Also, it would be great if the CanvasJSChart package had a way to support Next's server side rendering! [Their team suggested using `ssr:false`](https://canvasjs.com/forums/topic/using-with-nextjs/0) and [dynamic imports](https://nextjs.org/docs/advanced-features/dynamic-import) since they can't manipulate a `document` from the server. [Next's server-side rendering support](https://nextjs.org/docs/basic-features/pages#server-side-rendering) is pretty neat though, and would be great at improving performance.

## Next Steps
While the basics are done here, there's still plenty to do! I'd love to update the UI to use a specific design system that standardizes colors, spacing, and font sizes. Talking to shareholders/customers/scientists about what else they'd like to see here would really improve my understanding of what data is most important.

I'd also like to look into more thorough API and performance testing, while Cypress is handy for integration tests, it's a bit clunky when it comes to verifying API calls. This application doesn't have a need for major state management, but I'd love to use Redux or XState to handle that side of things.
