
window.onload = function () {document.getElementById('volumeButton').addEventListener('click', function (){
    const inputElement = document.getElementById("sideElement").value
    const result = volumeOfCube(inputElement)
    document.getElementById('outputElement').innerHTML = result
})

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
}

