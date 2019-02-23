console.log('Script starts')

// window.onload = function () {document.getElementById('volumeButton').addEventListener('click', function (){
//     const inputElement = document.getElementById("sideElement").value
//     const result = volumeOfCube(inputElement)
//     document.getElementById('outputElement').innerHTML = result
// })

console.log('Declaring function to calculate volume of a cube')

function volumeOfCube(side){
    // if (typeof side !== 'number'){
	// 	throw Error("Not a Number");
	// }
    if ( side >= 0){
        const number = parseFloat(side)
        const volume = number*number*number
        return volume
    }
    if ( side < 0){
        return 'Please enter a side value that is greater than zero'
    }
}


console.log('Defined volume = ' + volumeOfCube)

console.log('Declaring event listeners')
    window.addEventListener('load', (event) => {
      console.log('  Starting initialization ')
      
      if (localStorage.getItem('sideElement')) {
        document.getElementById('sideElement').value = localStorage.getItem('sideElement')
        console.log(`  Stored sideElement = ${localStorage.sideElement}`)
      }
      
      console.log('  Initialization Finished ')
    })
    const b = document.getElementById('volumeButton')
    if (b){
      b.addEventListener('click', () => {
      console.log('  Starting CalculateVolume button click handler')
      const originalCount = parseInt(localStorage.getItem('countOfClicks')) || 0
      const inputElement = document.getElementById('sideElement').value
      console.log('Side =' + inputElement)
      
      const ct = originalCount + 1
      const result = 'The volume of cube is: ' +volumeOfCube(inputElement)
      document.getElementById('outputElement').innerHTML = result
      localStorage.setItem('countOfClicks', ct) 
      localStorage.setItem('sideElement', inputElement)
      
      console.log(' CalculateVolume button click handler ended ')
    })
}
const r = document.getElementById('resetButton')
if(r){

    r.addEventListener('click', () => {
      console.log('  resetButton click handler started ')
      localStorage.removeItem('countOfClicks')
      localStorage.removeItem('sideElement')
      
      console.log('  resetButton click handler finished - localStorage entries removed')
    })
}

function ajax_example() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajax_demo").innerHTML = this.responseText;
      }
    };
    
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }


    console.log('SCRIPT ENDED')




