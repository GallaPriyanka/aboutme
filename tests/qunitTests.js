function volumeOfCube(side){
	if (typeof side !== 'number'){
		throw Error("Not a Number");
	}
    if ( side >= 0){
        const number = parseFloat(side)
        const volume = number*number*number
        return 'The volume of cube is: ' +volume
    }
    if ( side < 0){
        return 'Please enter a side value that is greater than zero'
    }

}


 QUnit.test("A test with small positive number", function(assert) {
	assert.equal(volumeOfCube(3), "The volume of cube is: " +27, "Tested with a small positive whole number - 3");
	
 });

 QUnit.test("A test with large positive number", function(assert) {
    assert.equal(volumeOfCube(309098099), "The volume of cube is: " +2.953173769370564e+25, "Tested with a large positive whole number - 309098099");
 });


 QUnit.test("A test with small decimal number", function(assert) {
     assert.equal(volumeOfCube(3.3), "The volume of cube is: " +35.937, "Tested with a small decimal value - 3.3");
});

 QUnit.test("A test with a negative number", function(assert) {
     assert.equal(volumeOfCube(-2), 'Please enter a side value that is greater than zero', "Tested with a negative vallue - (-2)");
});
 QUnit.test("A test with non-numbers", function(assert) {
     assert.throws(function () {volumeOfCube("a") }, /Not a Number/, "Tested an exception");
});