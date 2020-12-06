# React Create Library Boilerplate

## Setup

To install all dependencies necessaries to run this project you need to run the following command: 

`yarn && cd react && yarn`

---

## Development

```bash
vtex link # runs VTEX Toolbelt
```

Or publish in NPM and use it anywhere.

```bash
npm publish
```

This builds `commonjs` and `es` versions of your module to `dist/` and then publishes your module to `npm`.

Make sure that any npm modules you want as peer dependencies are properly marked as `peerDependencies` in `package.json`. The rollup config will automatically recognize them as peers and not try to bundle them in your module.

### Typings

When creating a new type inside `src/typings` you need it inside `/react/typings`. Without it `vtex link` command doens't work properly

### Dependencies

When installing new `dependencies` you need to declare it in both `packages`, `./package.json` and `./react/package.json`

---

### Integration with VTEX IO
Inside the project all the IO tools for development are still available. There is a `./react` folder with an `Adapter.tsx` component which connects your `src/index.tsx` to the store. There you can make the changes specific to the [VTEX Pages Admin](https://vtex.io/docs/app/vtex.admin-pages@4.26.0/) schema, for instance, as you would in any VTEX IO app. Similarly, with the `./store/interfaces.json` you can edit the interface of your component to the store.
