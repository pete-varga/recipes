var assert = require('assert');

describe('Array test', function () {

    it('should increase the array length', function () {
        var arr = [1, 2]

        assert.equal(2, arr.length);

        arr.push(3);

        assert.equal(3, arr.length);
    });
    it('should do something', function (done) {/* ... */ done(); }); //Aszinkron tesztek

    // Egymásba ágyazhatóak
    describe('Valami2', function () {
        it('should work', function () {/* ... */});
    });

});