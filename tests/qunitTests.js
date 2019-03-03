QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test("A test with small positive number", function(assert) {
	assert.equal(volumeOfCube(3), 27, "Tested with a small positive whole number - 3");
	assert.equal(volumeOfCube(5), 125, "Tested with a small positive whole number - 5");	
 });

 QUnit.test("A test with some more positive numbers", function(assert) {
	assert.equal(volumeOfCube(15), 3375, "Tested with a small positive whole number - 3");
	assert.equal(volumeOfCube(56), 175616, "Tested with a small positive whole number - 5");	
 });

 QUnit.test("A test with large positive number", function(assert) {
    assert.equal(volumeOfCube(309098099), 2.953173769370564e+25, "Tested with a large positive whole number - 309098099");
 });


 QUnit.test("A test with small decimal number", function(assert) {
     assert.equal(volumeOfCube(3.3), 35.937, "Tested with a small decimal value - 3.3");
});

 QUnit.test("A test with a negative number", function(assert) {
     assert.equal(volumeOfCube(-2), 'Please enter a side value that is greater than zero', "Tested with a negative value - (-2)");
});

 QUnit.test("A test with non-numbers", function(assert) {
     assert.throws(function () {volumeOfCube(null); }, /Not a Number/, "Tested an exception");
});