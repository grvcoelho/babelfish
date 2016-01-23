import 'babel-register';
import test from 'ava';
import is from 'check-types';

import Spokesman from '../src/spokesman';
import dictionaries from './fixtures/dictionaries';

let spokesman;

test.beforeEach(() => {
	spokesman = new Spokesman({
		'pt': dictionaries.pt,
		'en': dictionaries.en
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
