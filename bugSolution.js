```javascript
//tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#f56565',
      }
    }
  },
  plugins: [],
}
```
```html
<!--index.html-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Tailwind CSS Template</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-theme-color">
    <div>This is my div</div>
  </body>
</html>
```