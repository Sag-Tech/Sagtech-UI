# sagtech-ui Design Repository

Welcome to the **sagtech-ui** design repository! Dive into an ocean of meticulously crafted styles and components that power our applications at SagTech. Every component in this library ensures not just functionality but also the aesthetics that resonate with our brand. Best part? We believe in the power of community and sharing. So, these designs and components are open and free for everyone to use and adapt. Let's build beautiful things together!

## Getting Started

### Install

1. Add the `@sagtech/common-components` module:

```bash
yarn add @sagtech/common-components
```

or

```bash
npm install @sagtech/common-components
```

2. Make sure that you add the template path to the `tailwind.config.js` file:

```javascript
module.exports = {
  content: ['./node_modules/@sagtech/common-components/\*_/_.{js,ts,jsx,tsx}']
}
```

3. Add theme to the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {},
    colors: {
      black_1: '#070715',
      black_2: '#20202D',
      black_3: '#393944',
      black_4: '#51515B',
      grey_1: '#6A6A73',
      grey_2: '#83838A',
      grey_3: '#9C9CA1',
      grey_4: '#B5B5B9',
      white_1: '#CDCDD0',
      white_2: '#E6E6E8',
      white_3: '#F3F3F3',
      white_4: '#F8F8F8',
      white: '#FFFFFF',
      pr_purple: '#6D3EF1',
      sec_purple: '#B69FF8',
      pr_blue: '#292A94',
      sec_blue: '#9494C9',
      error: '#992D2D',
      warning: '#C6A328',
      success: '#58A61B',
      shape_stroke_1_part_one: '#0C0C1E',
      shape_stroke_1_part_two: '#221546',
      shape_stroke_2_part_one: '#1F1F38',
      shape_stroke_2_part_two: '#2F1E5E',
      backdrop: 'rgba(0, 0, 0, 0.56)',
      backdrop_2: 'rgba(255, 255, 255, 0.04)'
    },
    fontSize: {
      64: '64px',
      48: '48px',
      40: '40px',
      32: '32px',
      28: '28px',
      18: '18px',
      16: '16px',
      14: '14px',
      12: '12px',
      10: '10px'
    },
    lineHeight: {
      80: '80px',
      64: '64px',
      56: '56px',
      48: '48px',
      40: '40px',
      32: '32px',
      28: '28px',
      24: '24px',
      18: '18px',
      16: '16px'
    },
    spacing: {
      '64px': '64px',
      '48px': '48px',
      '40px': '40px',
      '32px': '32px',
      '20px': '20px',
      '16px': '16px',
      '12px': '12px',
      '4px': '4px',
      '8px': '8px',
      '24px': '24px',
      '23px': '23px'
    },
    dropShadow: {
      '3xl': '0px 0px 4px rgba(255, 255, 255, 0.64)'
    },
    gap: {
      '8px': '8px',
      '10px': '10px',
      '12px': '12px',
      '16px': '16px'
    },
    borderWidth: {
      6: '6px',
      1: '1px',
      5: '5px'
    },
    boxShadow: {
      '2xl': '0px 0px 0px 6px #070715, 0px 0px 16px 0px rgba(109, 62, 241, 0.24)',
      '3xl': '0px 0px 16px 0px rgba(109, 62, 241, 0.24)',
      '4xl': '0px -8px 24px 0px rgba(255, 255, 255, 0.04)',
      '5xl': '0px 0px 4px 0px rgba(109, 62, 241, 0.64)',
      '6xl': '0px 0px 16px rgba(109, 62, 241, 0.56)'
    },
    borderRadius: {
      circle: '50px',
      '40px': '40px',
      '16px': '16px',
      '8px': '8px',
      '24px': '24px',
      '50%': '50%'
    },
    inset: {
      '24px': '24px',
      '43px': '43px',
      '8px': '8px',
      '0px': '0px'
    },
    zIndex: {
      5: '5'
    },
    screens: {
      xs: '500px',
      sm: '768px',
      xl: '1024px',
      '2xl': '1440px',
      '3xl': '1920px'
    }
  }
}
```
4. Import stylesheets into the App.js or App.tsx

```javascript
import '@sagtech/common-components/src/styles/globals.css';
```

### Usage

After installing @sagtech/common-components, you can import it into your React project and start using its components.

Example usage:

```javascript
import React from 'react'
import { Button } from '@sagtech/common-components';

function App() {
  return <Button variant="primary">Click Here</Button>
}

export default App
```

### License

This package is available as open source under the terms of the MIT License.
