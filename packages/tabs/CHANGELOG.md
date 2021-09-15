# @hashicorp/react-tabs

## 7.0.1

### Patch Changes

- [#330](https://github.com/hashicorp/react-components/pull/330) [`44a0e60`](https://github.com/hashicorp/react-components/commit/44a0e60b577a36978275ef1b0efa0e351a9802c6) Thanks [@zchsh](https://github.com/zchsh)! - Removes package-lock.json

## 7.0.0

### Major Changes

- [#296](https://github.com/hashicorp/react-components/pull/296) [`c6b7a4d`](https://github.com/hashicorp/react-components/commit/c6b7a4dc80319d92f694773517d822f0566b229a) Thanks [@zchsh](https://github.com/zchsh)! - Converts Tabs to CSS modules.

  - 💥✨ BREAKING CHANGE: Refactored to CSS modules.
    - Consumers will need to remove any `@hashicorp/react-tabs/style.css` imports.
  - 🔨 Refactors previous class component implementations to functional components with hooks
  - 🔨 Converts to Typescript
  - 🔨 Replaces Tippy with [reach/tooltip](https://reach.tech/tooltip) and [reach/portal](https://reach.tech/portal).
    - This change was necessary to fully transition the component to CSS modules.
    - reach/tooltip is also [smaller](https://bundlephobia.com/package/@reach/tooltip@0.16.0) than [Tippy.js](https://bundlephobia.com/package/@tippyjs/react@4.2.5)
  - 🔧 move icons to SVG files to match other components
  - 🔧 fix casing on some files and folders
  - 🐛 minor fixes for visual bugs, including overflow issues on smaller viewports