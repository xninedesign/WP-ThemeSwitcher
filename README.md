# Theme Switcher

WordPress plugin: simple light/dark mode toggle.

## Features
- Gutenberg block + shortcode `[theme_switcher]`
- Toggles `data-theme="bright"` / `data-theme="dark"` on `<body>`
- Saves user preference in cookie (`ts_theme`)
- Stylish SVG toggle (sun/moon icons)
- No theme CSS interference – styling fully up to you

## Installation
1. Upload the `theme-switcher` folder to `/wp-content/plugins/`
2. Activate the plugin
3. Add the block in Gutenberg or use shortcode `[theme_switcher]`

## Usage
Add the switcher anywhere via:
- Gutenberg block: search "Theme Switcher"
- Shortcode: `[theme_switcher]`

Style it with your theme's CSS targeting:
- `.ts-label`
- `.ts-slider`
- `.ts-icon svg`

## Requirements
WordPress 5.8+

## License
MIT
