function race(numero) {
    var arrayNum = numero.toString()
    if (arrayNum.length < 4) {
        console.log("End");
        return 0
    } else {
        carX1 = parseInt(arrayNum[0])
        carX2 = parseInt(arrayNum[1])
        carY1 = parseInt(arrayNum[2])
        carY2 = parseInt(arrayNum[3])
        carX = carX1 + carX2
        carY = carY1 + carY2
        console.log("CarX :" + carX1 + "+" + carX2 + "=" + carX);
        if (carX > 9) {
            while (carX > 9) {
                carX1 = parseInt(carX.toString()[0])
                carX2 = parseInt(carX.toString()[1])
                carX = carX1 + carX2
                console.log("CarX :" + carX1 + "+" + carX2 + "=" + carX);
            }
        }
        console.log("CarY :" + carY1 + "+" + carY2 + "=" + carY);
        if (carY > 9) {
            while (carY > 9) {
                carY1 = parseInt(carY.toString()[0])
                carY2 = parseInt(carY.toString()[1])
                carY = carY1 + carY2
                console.log("CarY :" + carY1 + "+" + carY2 + "=" + carY);
            }
        }
        if (carX > carY) {
            console.log("Winner: CarX");
        }
        else {
            console.log("Winner: CarY");
        }
        race(arrayNum.slice(4))
    }
}

input = 2342554354

race(input)