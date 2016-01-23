import 'babel-register';
import test from 'ava';
import is from 'check-types';

import Spokesman from '../src/spokesman';
import dictionaries from './fixtures/dictionaries';

test('constructor', t => {
	const spokesman = new Spokesman(dictionaries);

	t.ok(is.object(spokesman.dictionaries));
	t.ok(is.object(spokesman.currentDictionary));
});

test('add a dictionary', t => {
	const spokesman = new Spokesman(dictionaries);
	const fr = { 'SUGAR': 'Sucre' };

	spokesman.addDictionary('fr-CA', fr);
	t.is(spokesman.dictionaries['fr-CA'], fr);
});

test('add a dictionary with an existent name', t => {
	const spokesman = new Spokesman(dictionaries);
	const fr = { 'SUGAR': 'Sucre' };

	t.throws(() => spokesman.addDictionary('en-US', fr));
});

test('add a dictionary without a valid name', t => {
	const spokesman = new Spokesman(dictionaries);
	const fr = { 'SUGAR': 'Sucre' };

	t.throws(() => spokesman.addDictionary('', fr));
});

test('add a dictionary without a valid dictionary', t => {
	const spokesman = new Spokesman(dictionaries);
	const fr = [1, 2];

	t.throws(() => spokesman.addDictionary('fr-CA', fr));
});

test('use a dictionary', t => {
	const spokesman = new Spokesman(dictionaries);

	spokesman.useDictionary('pt-BR');
	t.is(spokesman.currentDictionary, dictionaries['pt-BR']);
});

test('use a dictionary that does not exist', t => {
	const spokesman = new Spokesman(dictionaries);

	t.throws(() => spokesman.useDictionary('en-UK'));
});
