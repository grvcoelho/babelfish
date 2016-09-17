import 'babel-register';
import test from 'ava';
import is from 'check-types';

import Babelfish from '../src/babelfish';
import dictionaries from './fixtures/dictionaries';

let babelfish;

test.beforeEach(() => {
	babelfish = new Babelfish({
		pt: dictionaries.pt,
		en: dictionaries.en
	});
});

test('constructor', t => {
	t.ok(is.object(babelfish.dictionaries));
	t.ok(is.object(babelfish.currentDictionary));
});

test('add a dictionary', t => {
	const fr = dictionaries.fr;

	babelfish.addDictionary('fr', fr);
	t.is(babelfish.dictionaries.fr, fr);
});

test('add a dictionary with an existent name', t => {
	const fr = dictionaries.fr;

	t.throws(() => babelfish.addDictionary('en', fr));
});

test('add a dictionary without a valid name', t => {
	const fr = dictionaries.fr;

	t.throws(() => babelfish.addDictionary('', fr));
});

test('add a dictionary without a valid dictionary', t => {
	t.throws(() => babelfish.addDictionary('fr', [1, 2]));
});

test('use a dictionary', t => {
	babelfish.useDictionary('pt');
	t.is(babelfish.currentDictionary, dictionaries.pt);
});

test('use a dictionary that does not exist', t => {
	t.throws(() => babelfish.useDictionary('es'));
});

test('translate a simple term', t => {
	babelfish.useDictionary('en')

	t.is(babelfish.translate('FRUIT_LIST'), 'List of fruits');
});

test('translate a simple term that does not exist', t => {
	babelfish.useDictionary('en');

	t.is(babelfish.translate('SALAD'), 'SALAD');
});

test('translate a term with pluralisation', t => {
	babelfish.useDictionary('en');

	t.is(babelfish.translate('APPLE'), '1 apple');
	t.is(babelfish.translate('APPLE', 0), 'No apples');
	t.is(babelfish.translate('APPLE', 1), '1 apple');
	t.is(babelfish.translate('APPLE', 2), '2 apples');
	t.is(babelfish.translate('APPLE', 17), '17 apples');
});

test('translate a term with function', t => {
	babelfish.useDictionary('en');

	t.is(babelfish.translate('RANDOM_FRUIT'), 'banana');
});
