
# SVG to Icon Font Converter

This project converts SVG files into a custom icon font, generating font files (`woff`, `woff2`, `ttf`) and associated styles in SCSS and CSS.

## Requirements

- Node.js (v16 or later)
- Gulp CLI installed globally (`npm install -g gulp-cli`)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/SCSS77/svg-to-iconfont.git
   cd svg-to-iconfont
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Add your SVG files to the `src/svg` folder.
2. Run the command to generate the font:

   ```bash
   npm run start
   ```

3. Generated files will be located in:

   - Fonts: `dist/fonts`
   - CSS: `assets/css/_icons.css`
   - SCSS: `assets/scss/_icons.scss`

## Example Usage

Include the font in your HTML project:

```html
<link rel="stylesheet" href="dist/fonts/assets/css/_icons.css">
```

Use a class to display an icon:

```html
<i class="icon-home"></i>
```

## Customization

- Modify the `gulpfile.js` to adjust font and style configurations.
- Update class names by editing the `gulp-iconfont-css` options.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).