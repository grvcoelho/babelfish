# spokesman

[![Build Status](https://travis-ci.org/grvcoelho/spokesman.svg?branch=master)](https://travis-ci.org/grvcoelho/spokesman)
[![Coverage Status](https://coveralls.io/repos/grvcoelho/spokesman/badge.svg?branch=master&service=github)](https://coveralls.io/github/grvcoelho/spokesman)

Straightforward library for translations and i18n

## Install

You can get it on npm.

```
npm install spokesman --save
```

If you're not into package management, just [download a ZIP](https://github.com/grvcoelho/spokesman/archive/master.zip) file.

## Setup

First, you need to import it or require it:

```javascript
import Spokesman from 'spokesman';
```

Then, you need to instantiate it and passing a dictionary object optionally:

```javascript
let spokesman = new Spokesman({
	pt: {
		'APPLE': 'maçã'
	},
	en: {
		'APPLE': 'apple'
	}
});
```

## License
[MIT](https://github.com/grvcoelho/spokesman/blob/master/LICENSE) &copy; 2016


