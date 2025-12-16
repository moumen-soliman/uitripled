# uitripled

CLI to add animated UI components from the uitripled registry.

**uitripled** is a command-line tool that allows you to quickly install beautiful, animated UI components built with Framer Motion and React. Browse hundreds of pre-built components at [ui.tripled.work](https://ui.tripled.work) and install them directly into your project with a single command.

## Website

Visit [https://ui.tripled.work](https://ui.tripled.work) to browse all available components, see live previews, and explore the full component library.

## Installation

No installation required! Use via npx:

```bash
npx uitripled add <component-name>
```

## Usage

```bash
# Add a component
npx uitripled add animated-checkbox

# Add a component and overwrite existing files
npx uitripled add animated-button --overwrite
```

## Available Commands

- `add <component>` - Install a component from the registry
  - `--overwrite` - Overwrite existing files if they exist

## Examples

```bash
# Install an animated checkbox component
npx uitripled add animated-checkbox

# Install an animated button and overwrite if exists
npx uitripled add animated-button --overwrite
```

## Registry

Components are fetched from: `https://ui.tripled.work/r/{component}.json`

## Development

To develop locally:

```bash
cd uitripled
npm install
npm link
```

Then test with:

```bash
uitripled add animated-checkbox
```

## Publishing

```bash
npm publish --access public
```

## License

MIT
