import 'babel-register';
import test from 'ava';
import is from 'check-types';

import Spokesman from '../src/spokesman';
import dictionaries from './fixtures/dictionaries';


test('constructor', t => {
	const spokesman = new Spokesman(dictionaries);

	t.ok(is.object(spokesman.dictionaries));
});
