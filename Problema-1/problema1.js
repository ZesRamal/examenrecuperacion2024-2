function race(numero) {
    var arrayNum = numero.toString()
    carroX = parseInt(arrayNum[0]) + parseInt(arrayNum[1])
    carroY = parseInt(arrayNum[2]) + parseInt(arrayNum[3])
    console.log(carroX);
    console.log(carroY); 
}

var input = 2342554354

race(input)