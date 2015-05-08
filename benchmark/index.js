var assert = require('assert');
var Benchmark = require('benchmark');
var slowEquals = require('..');

var suite = new Benchmark.Suite;

console.log('\nCompare tow equal short strings:');
suite
  .add('slow-equals', function() {
    assert.equal(true, slowEquals('good', 'good'));
  })
  .add('===', function() {
    assert.equal(true, 'good' === 'good');
  })
  .add('==', function() {
    assert.equal(true, 'good' == 'good');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
    // console.log('memoryUsage:', process.memoryUsage());
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  // run async
  .run({
    // async: true
  });

var suite0 = new Benchmark.Suite;

console.log('\nCompare tow equal long strings:');
suite0
  .add('slow-equals', function() {
    assert.equal(true, slowEquals('goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8', 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8'));
  })
  .add('===', function() {
    assert.equal(true, 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8' === 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8');
  })
  .add('==', function() {
    assert.equal(true, 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8' == 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
    // console.log('memoryUsage:', process.memoryUsage());
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  // run async
  .run({
    // async: true
  });

var suite1 = new Benchmark.Suite;

console.log('\nCompare tow not equal short strings:');
suite1
  .add('slow-equals', function() {
    assert.equal(false, slowEquals('good', 'gooD'));
  })
  .add('===', function() {
    assert.equal(false, 'good' === 'gooD');
  })
  .add('==', function() {
    assert.equal(false, 'good' == 'gooD');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
    // console.log('memoryUsage:', process.memoryUsage());
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  // run async
  .run({
    // async: true
  });

var suite2 = new Benchmark.Suite;

console.log('\nCompare tow not equal long strings:');
suite2
  .add('slow-equals', function() {
    assert.equal(false, slowEquals('goo1xohfoopaeshaIjoobaIjaek5yaedeiCh5ao8goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8', 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8'));
  })
  .add('===', function() {
    assert.equal(false, 'goo1xohfoopaeshaijoobaIjaek5yaedeiCh5ao8goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8' === 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8');
  })
  .add('==', function() {
    assert.equal(false, 'goo1xohfoopaeshaijoobaIjaek5yaedeiCh5ao8goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8' == 'goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8goo1xohfoopaeshaijoobaijaek5yaedeiCh5ao8');
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
    // console.log('memoryUsage:', process.memoryUsage());
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').pluck('name'));
  })
  // run async
  .run({
    // async: true
  });
