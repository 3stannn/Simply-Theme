# Simply Slate Theme

A minimal dark theme for Visual Studio Code. Simply Slate pairs a deep charcoal background with crisp white text, neutral gray controls, and blue accents. Warm syntax colors help keep your code easy to scan.

## Features

- `#171717` editor, integrated terminal, and status bar backgrounds.
- `#F5F5F5` main text for a clear, consistent reading experience.
- `#424242` buttons, activity bar icons, and focus borders.
- Neutral gray selections, menus, and autocomplete suggestions.
- Blue links, verified publisher badges, and progress indicators.
- Orange keywords, red variables and tags, green strings, blue functions, and purple types.
- Syntax highlighting for HTML, JavaScript, TypeScript, JSX, and TSX, with semantic highlighting support.

- Matching ANSI terminal colors, white cursor, and neutral gray selections across VS Code terminal profiles.

## Install

1. Open **Extensions** in VS Code (`Ctrl+Shift+X` on Windows/Linux, `Cmd+Shift+X` on macOS).
2. Search for **Simply Slate Theme** by **kodekz01** and click **Install**.
3. Open the Command Palette and run **Preferences: Color Theme**.
4. Select **Simply Slate**.

You can also install it from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=kodekz01.simply-slate-theme).

## Make it yours

To adjust individual interface colors, add overrides to your VS Code `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Simply Slate]": {
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
3. Select **Simply Slate** in the new window.
4. Open the files in `samples/` to preview TypeScript, HTML, and React syntax.

Edit `themes/simply-slate-color-theme.json` to customize the theme. The `colors` section defines the interface palette, `tokenColors` defines syntax colors, and `semanticTokenColors` defines language-aware colors.

## License

Licensed under the [MIT License](LICENSE).
