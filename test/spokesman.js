import 'babel-register';
import test from 'ava';
import is from 'check-types';

import Spokesman from '../src/spokesman';
import dictionaries from './fixtures/dictionaries';

let spokesman;

test.beforeEach(() => {
	spokesman = new Spokesman({
		pt: dictionaries.pt,
		en: dictionaries.en
	});
});

test('constructor', t => {
	t.ok(is.object(spokesman.dictionaries));
	t.ok(is.object(spokesman.currentDictionary));
});

test('add a dictionary', t => {
	const fr = dictionaries.fr;

	spokesman.addDictionary('fr', fr);
	t.is(spokesman.dictionaries.fr, fr);
});

test('add a dictionary with an existent name', t => {
	const fr = dictionaries.fr;

	t.throws(() => spokesman.addDictionary('en', fr));
});

test('add a dictionary without a valid name', t => {
	const fr = dictionaries.fr;

	t.throws(() => spokesman.addDictionary('', fr));
});

test('add a dictionary without a valid dictionary', t => {
	t.throws(() => spokesman.addDictionary('fr', [1, 2]));
});

test('use a dictionary', t => {
	spokesman.useDictionary('pt');
	t.is(spokesman.currentDictionary, dictionaries.pt);
});

test('use a dictionary that does not exist', t => {
	t.throws(() => spokesman.useDictionary('es'));
});

test('translate a simple term', t => {
	spokesman.useDictionary('en')

	t.is(spokesman.translate('FRUIT_LIST'), 'List of fruits');
});

test('translate a simple term that does not exist', t => {
	spokesman.useDictionary('en');

	t.is(spokesman.translate('SALAD'), 'SALAD');
});

test('translate a term with pluralisation', t => {
	spokesman.useDictionary('en');

	t.is(spokesman.translate('APPLE'), '1 apple');
	t.is(spokesman.translate('APPLE', 0), 'No apples');
	t.is(spokesman.translate('APPLE', 1), '1 apple');
	t.is(spokesman.translate('APPLE', 2), '2 apples');
	t.is(spokesman.translate('APPLE', 17), '17 apples');
});
test('translate a term with function', t => {
	spokesman.useDictionary('en');

	t.is(spokesman.translate('RANDOM_FRUIT'), 'banana');
});
