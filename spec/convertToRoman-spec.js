import {convertToRoman} from './../src/convertToRoman.js';
describe('convertToRoman', function() {

  it('should test whether convertToRoman returns single character values', function() {
    var test1 = convertToRoman(1);
    var test2 = convertToRoman(5);
    var test3 = convertToRoman(10);
    expect(test1).toEqual("I");
    expect(test2).toEqual("V");
    expect(test3).toEqual("X");
  });

  it('should test whether convertToRoman returns multi-character values', function() {
    var test1 = convertToRoman(11);
    var test2 = convertToRoman(15);
    var test3 = convertToRoman(20);
    expect(test1).toEqual("XI");
    expect(test2).toEqual("XV");
    expect(test3).toEqual("XX");
  });

  it('should test whether convertToRoman returns special case values', function() {
    var test = convertToRoman(949);
    expect(test).toEqual("CMXLIX");
  });

});
