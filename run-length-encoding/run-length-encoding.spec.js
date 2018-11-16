// import { encode, decode } from './run-length-encoding';

// describe('run-length encode a string', () => {
//   test('encode empty string', () => {
//     expect(encode('')).toEqual('');
//   });

//   test('single characters only are encoded without count', () => {
//     expect(encode('XYZ')).toEqual('XYZ');
//   });

//   test('encode string with no single characters', () => {
//     expect(encode('AABBBCCCC')).toEqual('2A3B4C');
//   });

//   test('encode string with single characters mixed with repeated characters', () => {
//     expect(encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
//   });

//   test('encode string with multiple whitespaces', () => {
//     expect(encode('  hsqq qww  ')).toEqual('2 hs2q q2w2 ');
//   });

//   test('encode string with lowercase characters', () => {
//     expect(encode('aabbbcccc')).toEqual('2a3b4c');
//   });
// });

// describe('run-length decode a string', () => {
//   test('decode empty string', () => {
//     expect(decode('')).toEqual('');
//   });

//   test('decode string with single characters only', () => {
//     expect(decode('XYZ')).toEqual('XYZ');
//   });

//   test('decode string with no single characters', () => {
//     expect(decode('2A3B4C')).toEqual('AABBBCCCC');
//   });

//   test('decode string with single characters mixed with repeated characters', () => {
//     expect(decode('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
//   });

//   test('decode string with multiple whitespaces', () => {
//     expect(decode('2 hs2q q2w2 ')).toEqual('  hsqq qww  ');
//   });

//   test('decode string with lowercase characters', () => {
//     expect(decode('2a3b4c')).toEqual('aabbbcccc');
//   });
// });

// describe('run-length encode and then decode', () => {
//   test('encode followed by decode gives original string', () => {
//     expect(decode(encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
//   });
// });
var rle = require('./rle.js');

var RLE=new rle;

describe('Run-length encoding', function () {
  it('encode empty string', function () {
    expect(RLE.encode('')).toEqual('');
  });

  it('encode single characters only', function () {
    expect(RLE.encode('XYZ')).toEqual('XYZ');
  });

  it('decode empty string', function () {
    expect(RLE.decode('')).toEqual('');
  });

  it('decode single characters only', function () {
    expect(RLE.decode('XYZ')).toEqual('XYZ');
  });

  it('encode simple', function () {
    expect(RLE.encode('AABBBCCCC')).toEqual('2A3B4C');
  });

  it('decode simple', function () {
    expect(RLE.decode('2A3B4C')).toEqual('AABBBCCCC');
  });

  it('encode with single values', function () {
    expect(RLE.encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
  });

  it('decode with single values', function () {
    expect(RLE.decode('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
  });

  it('decode(encode(...))combination', function () {
    expect(RLE.decode(RLE.encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });
});
