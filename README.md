# Uncommon Tailwind CSS Bug: Custom Color Issue with `bg` Utility

This repository demonstrates a peculiar bug encountered when using a custom color defined in `theme.extend.colors` within a Tailwind CSS project. The custom color, `theme-color`, is correctly defined, and other Tailwind utilities function as expected. However, applying this color using the `bg-theme-color` utility class does not render the expected color, resulting in a blank or unexpected background.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install Tailwind CSS (if needed).
3. Open `index.html` in a web browser.

Observe that the `div` element does not display the expected `#f56565` background color.

## Solution

The solution is provided in the `bugSolution.js` and the updated `index.html` file, showing how to successfully use the custom `theme-color` variable with the `bg` utility.