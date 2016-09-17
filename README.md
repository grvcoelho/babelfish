# babelfish

[![Build Status](https://travis-ci.org/grvcoelho/babelfish.svg?branch=master)](https://travis-ci.org/grvcoelho/babelfish)
[![Coverage Status](https://coveralls.io/repos/grvcoelho/babelfish/badge.svg?branch=master&service=github)](https://coveralls.io/github/grvcoelho/babelfish)

Straightforward library for translations and i18n

## Install

You can get it on npm.

```
npm install @grvcoelho/babelfish --save
```

If you're not into package management, just [download a ZIP](https://github.com/grvcoelho/babelfish/archive/master.zip) file.

## Setup

First, you need to import it or require it:

```javascript
import Babelfish from 'babelfish';
```

Then, you need to instantiate it and passing a dictionary object optionally:

```javascript
let babelfish = new Babelfish({
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
babelfish.addDictionary('fr', {
	'APPLE': 'pomme'
});
```

Using dictionaries and translating:

```javascript
babelfish.useDictionary('pt');
babelfish.translate('APPLE'); // "maçã"
```

You can also use functions as the translations:

```javascript
babelfish.addDictionary('fr', {
	'APPLE': function() {
		return 'pomme' + '!';
	}
});

babelfish.useDictionary('fr');

babelfish.translate('APPLE'); // "pomme!"
```

You can handle pluralisation by passing an array as the translations, and passing a second argument to the `.translate()` method.

```javascript
babelfish.addDictionary('pt', {
	'APPLE': [
		'Sem maçãs',
		'1 maçã',
		'%s maçãs'
	]
});

babelfish.useDictionary('pt');

babelfish.translate('APPLE'); // if no count is passed, 1 is the default. "1 maçã"
babelfish.translate('APPLE', 0); // "Sem maçãs"
babelfish.translate('APPLE', 1); // "1 maçã"
babelfish.translate('APPLE', 2); // "2 maçãs"
babelfish.translate('APPLE', 17); // "17 maçãs"
```

## License
[MIT](https://github.com/grvcoelho/babelfish/blob/master/LICENSE) &copy; 2016
