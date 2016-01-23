import is from 'check-types';

class Spokesman {
	constructor(dictionaries = {}) {
		this.dictionaries = dictionaries;
		this.currentDictionary = {};
	}

	addDictionary(name, dictionary) {
		if (is.undefined(name) || is.not.string(name) || is.emptyString(name)) {
			throw new Error('The dictionary name must exist');
		}

		if (is.undefined(dictionary) || is.not.object(dictionary)) {
			throw new Error('The dictionary must be an object');
		}

		if (is.not.undefined(this.dictionaries[name])) {
			throw new Error('The dictionary already exists');
		}

		this.dictionaries[name] = dictionary;
	}

	useDictionary(name) {
		if (is.undefined(this.dictionaries[name])) {
			throw new Error('The dictionary does not exist');
		}

		this.currentDictionary = this.dictionaries[name];
	}
}

export default Spokesman;
