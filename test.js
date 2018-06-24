var binSearch = require('./binSearch');
var expect = require('chai').expect;

describe('binSearch test suite', function() {
    var arr = [1,3,6,8,21,45,76,433];
    it('If not find data in array, return null', function() {
        expect(binSearch(arr, 33)).to.be.equal(null);
    })
    it('If find a data in array, return a array containing the data', function() {
        var data = 21;
        expect(binSearch(arr, data)).to.be.an('array').that.include(data);
    })
})