import is from 'check-types';

class Babelfish {
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

	translate(term, count = 1) {
		const dictionary = this.currentDictionary;
		const translation = dictionary[term];

		if (is.undefined(translation)) {
			return term;
		}

		if (is.function(translation)) {
			return translation();
		}

		if (is.array(translation)) {
			return this.translateWithPluralisation(term, count);
		}

		return translation;
	}

	translateWithPluralisation(term, count) {
		const dictionary = this.currentDictionary;
		const translations = dictionary[term];

		if (count === 0) {
			return translations[0];
		}

		if (count === 1) {
			return translations[1];
		}

		return translations[2].replace('%s', count);
	}
}

export default Babelfish;
