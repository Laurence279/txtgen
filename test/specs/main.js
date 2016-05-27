/**
 * Testing
 * @ndaidong
 */

/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/
/* eslint no-console: 0*/

var path = require('path');
var test = require('tape');
var bella = require('bellajs');

var rootDir = '../../src/';
var txtgen = require(path.join(rootDir, 'main'));

var hasMethods = (o) => {
  var structure = [
    'sentence',
    'phrase',
    'article'
  ];

  return structure.every((k) => {
    return bella.hasProperty(o, k) && bella.isFunction(o[k]);
  });
};


test('Testing txtgen object:', (assert) => {
  assert.ok(bella.isObject(txtgen), 'txtgen must be an object.');
  assert.ok(hasMethods(txtgen), 'txtgen must have required methods.');
  assert.end();
});

test('txtgen.sentence():', (assert) => {
  let sentence = txtgen.sentence();
  assert.ok(bella.isString(sentence) && sentence.length > 0, 'A sentence must be created');
  assert.end();
});

test('txtgen.phrase():', (assert) => {
  let phrase = txtgen.phrase();
  assert.ok(bella.isString(phrase) && phrase.length > 0, 'A phrase must be created');
  assert.end();
});

test('txtgen.article():', (assert) => {
  let article = txtgen.article();
  assert.ok(bella.isString(article) && article.length > 0, 'An article must be created');
  assert.end();
});