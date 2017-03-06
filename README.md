# smallest-script-loader
Smallest promise-based script loader with cache support

## Installation

Yarn
```
yarn add smallest-script-loader
```

or NPM
```
npm i --save smallest-script-loader
```

## Usage
```javascript
import loadScript from 'smallest-script-loader';

loadScript('//www.somewebsite.com/some-script.js')
  .then(() => {
    // do something after loading the script
  })
  .catch(e => {
    console.error(e);
  });
```

## Browser support
Only modern/evergreen browsers

## License
MIT
