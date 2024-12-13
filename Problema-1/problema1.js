function race(numero) {
    console.log(numero.type);
    
    var arrayNum = numero.toString()
    if (arrayNum.length < 4) {
        console.log("Fin");
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
            console.log("Ganador: CarX");
        }
        else {
            console.log("Ganador: CarY");
        }
        race(arrayNum.slice(4))
    }
}

race("1111111")