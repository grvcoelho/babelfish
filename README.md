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

## Usage

Adding dictionaries:

```javascript
spokesman.addDictionary('fr', {
	'APPLE': 'pomme'
});
```

Using dictionaries and translating:

```javascript
spokesman.useDictionary('pt');
spokesman.translate('APPLE'); // "maçã"
```

You can also use functions as the translations:

```javascript
spokesman.addDictionary('fr', {
	'APPLE': function() {
		return 'pomme' + '!';
	}
});

spokesman.useDictionary('fr');

spokesman.translate('APPLE'); // "pomme!"
```

You can handle pluralisation by passing an array as the translations, and passing a second argument to the `.translate()` method.

```javascript
spokesman.addDictionary('pt', {
	'APPLE': [
		'Sem maçãs',
		'1 maçã',
		'%s maçãs'
	]
});

spokesman.useDictionary('pt');

spokesman.translate('APPLE'); // if no count is passed, 1 is the default. "1 maçã" 
spokesman.translate('APPLE', 0); // "Sem maçãs"
spokesman.translate('APPLE', 1); // "1 maçã"
spokesman.translate('APPLE', 2); // "2 maçãs"
spokesman.translate('APPLE', 17); // "17 maçãs"
```

## License
[MIT](https://github.com/grvcoelho/spokesman/blob/master/LICENSE) &copy; 2016
