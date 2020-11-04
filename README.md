# React Create Library Boilerplate

## Setup

To install all dependencies necessaries to run this project you need to run the following command: 

`yarn && cd react && yarn`

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
yarn start # runs TSDX with watch flag
```

The second part will be running the `stories/` of Storybook that's linked to the local version of your module.

```bash
# (in another tab)
yarn storybook # runs Storybook server
```

Now, anytime you make a change to your library in `src/` or to the example storybook documentation `stories/`, `Storybook` will live-reload your local dev server so you can iterate on your component in real-time in an isolated environment.

Link your component to your VTEX IO store using [VTEX Toolbelt](https://github.com/vtex/toolbelt#vtex-toolbelt) `REMEMBER TO INDICATE THE RIGHT VERSION`.

```bash
vtex link # runs VTEX Toolbelt
```

Or publish in NPM and use it anywhere.

```bash
npm publish
```

This builds `commonjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

### Integration with VTEX IO
Inside the project all the IO tools for development are still available. There is a `./react` folder with an `Adapter.tsx` component which connects your `src/index.tsx` to the store. There you can make the changes specific to the [VTEX Pages Admin](https://vtex.io/docs/app/vtex.admin-pages@4.26.0/) schema, for instance, as you would in any VTEX IO app. Similarly, with the `./store/interfaces.json` you can edit the interface of your component to the store.
