# Simply Theme

A minimal dark theme for Visual Studio Code. Simply Dark pairs a deep charcoal background with crisp white text, neutral gray controls, and blue accents. React-inspired syntax colors help keep your code easy to scan.

## Features

- `#171717` editor and status bar backgrounds.
- `#F5F5F5` main text for a clear, consistent reading experience.
- `#424242` buttons, activity bar icons, and focus borders.
- Neutral gray selections, menus, and autocomplete suggestions.
- Blue links, verified publisher badges, and progress indicators.
- Cyan tags and types, blue keywords and functions, green strings, and orange numbers.
- Syntax highlighting for HTML, JavaScript, TypeScript, JSX, and TSX, with semantic highlighting support.

## Install

1. Open **Extensions** in VS Code (`Ctrl+Shift+X` on Windows/Linux, `Cmd+Shift+X` on macOS).
2. Search for **Simply Theme** by **kodekz01** and click **Install**.
3. Open the Command Palette and run **Preferences: Color Theme**.
4. Select **Simply Dark**.

You can also install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=kodekz01.simply-theme).

## Make it yours

To adjust individual interface colors, add overrides to your VS Code `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Simply Dark]": {
      "editor.background": "#171717",
      "editor.foreground": "#F5F5F5"
    }
  }
}
```

## Feedback

Found a color that needs attention? [Open an issue](https://github.com/3stannn/Simply-Theme/issues) with the language, a short code sample, and a screenshot so it is easy to reproduce.

## Local development

1. Open this repository in VS Code.
2. Press **F5** to start the Extension Development Host.
3. Select **Simply Dark** in the new window.
4. Open the files in `samples/` to preview TypeScript, HTML, and React syntax.

Edit `themes/simply-dark-color-theme.json` to customize the theme. The `colors` section defines the interface palette, `tokenColors` defines syntax colors, and `semanticTokenColors` defines language-aware colors.
