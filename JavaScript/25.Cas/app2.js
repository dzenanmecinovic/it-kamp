// 31. Write a Javascript program to find the largest of three given integers.

function najveci(prvi, drugi, treci) {
    let jedan = parseFloat(prvi);
    let dva = parseFloat(drugi);
    let tri = parseFloat(treci);
    if(jedan > dva && jedan > tri) {
        return `Prvi broj je najveci broj.`
    } else if(dva > jedan && dva > tri) {
        return `Drugi broj je najveci broj.`
    } else if(tri > jedan && tri > dva) {
        return `Treci broj je najveci broj.`
    }
}

console.log(najveci("3", 4, "5.25"))
console.log(najveci("3", 4, -22))

// 32. Write a JavaScript program to find a value which is nearest do 100 from two different given integer values.

function bliziSto(prvi, drugi) {
    jedan = 100 - prvi; // 100 - 20 = 80 // manji = blizi
    dva = 100 - drugi; // 100 - 30 = 70 // veci = dalji
    if(jedan < drugi) {
        return `Prvi broj je blizi broju 100.`
    } else {
        return `Drugi broj je blizi broju 100.`
    }
}

console.log(bliziSto(20, 110))
console.log(bliziSto(-5, 30))

function bliziSto2(prvi, drugi) {
    let blizi;
    if (prvi < 100 && drugi < 100) {
        blizi = prvi;
    } else {
        blizi = drugi;
    }
    if(prvi > 100 && drugi > 100) {
        blizi = prvi;
    } else {
        blizi = drugi;
    }

}

console.log(bliziSto2(101, 20))

// Write a javaScript to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.