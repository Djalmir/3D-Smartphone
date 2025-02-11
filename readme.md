# Smartphone 3D Web Component

## Overview

The `<smartphone-3d>` is a custom web component that renders a highly detailed, interactive 3D smartphone visualization. This component allows for various transformations, animations, and interaction modes.

## Installation

To use the Smartphone 3D component, include the `Smartphone.js` script in your HTML:

```html
<script src="path/to/components/Smartphone.js"></script>
```

## Usage

### Basic Usage

```html
<smartphone-3d></smartphone-3d>
```

### Advanced Configuration

You can customize the smartphone's behavior using attributes:

```html
<smartphone-3d 
  transform='{"rotateX": 30, "rotateY": 45, "scale": 1.2}'
  allowRotation
  allowMove
  allowZoom
  autoAnimate
  interactiveScreen>
  <!-- Optional content for the screen -->
</smartphone-3d>
```

## Attributes

| Attribute | Type | Description | Default |
|-----------|------|-------------|---------|
| `transform` | JSON | Defines initial 3D transformation (rotation, scale) | `null` |
| `allowRotation` | Boolean | Enables phone rotation interactions | `false` |
| `allowMove` | Boolean | Enables moving the phone | `false` |
| `allowZoom` | Boolean | Enables zooming interactions | `false` |
| `autoAnimate` | Boolean | Automatically animates the phone | `false` |
| `interactiveScreen` | Boolean | Enables screen interactions | `false` |

## Features

- Highly detailed 3D smartphone rendering
- Realistic design
- Customizable 3D transformations
- Interactive modes
- Responsive design
- Supports screen content via `<slot>`

## Detailed Component Structure

### Front Face
- Speaker
- Camera
- Fully interactive screen

### Back Face
- Camera
- Flashlight
- Fingerprint scanner
- Manufacturer branding

### Sides
- Volume buttons
- Power button
- Detailed edge rendering

## Methods

The component provides several internal methods for transformation and animation:

- `transformPhone()`: Apply 3D transformations
- `autoAnim()`: Trigger automatic animations

## Styling

The component is fully styled using CSS, with detailed 3D transformations and realistic textures. The styling is encapsulated within the shadow DOM.

## Browser Compatibility

Requires modern browsers that support:
- Custom Elements
- Shadow DOM
- CSS 3D Transforms

## Example

```html
<smartphone-3d allowRotation allowZoom>
  <div>Your screen content here</div>
</smartphone-3d>
```

## Performance Considerations

- Uses `transform-style: preserve-3d` for efficient 3D rendering
- Minimal DOM manipulation
- Leverages CSS animations for smooth interactions

## Customization

You can further customize the component by:
- Modifying the CSS in the `style` section
- Extending the `Smartphone` class
- Adding event listeners for interactions

## License

MIT License

Copyright (c) 2025 Razion

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.