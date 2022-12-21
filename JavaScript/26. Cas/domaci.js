////// 1. /////
// 1 Write a JavaScript program to find a value which is nearest do 100 from two different given integer values.

function blizi(prvi, drugi) {

    if(prvi != drugi) {
        prviBroj = Math.abs(prvi, 100);
        drugiBroj = Math.abs(drugi, 100);
    if(prviBroj < drugiBroj) {
        return `Prvi broj je blizi broju 100.`
    }
    if(drugiBroj < prviBroj) {
        return `Drugi broj je blizi broju 100.`
    }
}
    else {
        return `Brojevi moraju biti razliciti.`
    }
}

// console.log(blizi(-10, 40))
// console.log(blizi(10, -40))
// console.log(blizi(140, 700))
///// 2. ////
// 2 Write a javaScript to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function uOpsegu(prvi, drugi) {
    if(isNaN(prvi) || isNaN(drugi)) {
        return `Unete vrednosti moraju biti iskljucivo brojevi.`
    } else if(prvi >= 40 && prvi <= 60 && drugi >= 40 && drugi <= 60) {
        return `Oba broja se nalaze u opsegu od 40 do 60.`
    } else if(prvi >= 70 && prvi <= 100 && drugi >= 70 && drugi <= 100) {
        return `Oba broja se nalaze u opsegu od 70 do 100.`
    } else if(prvi >= 40 && prvi <= 60 && drugi >= 70 && drugi <= 100) {
        return `Prvi broj se nalazi u opsegu od 40 do 60, a drugi u opsegu od 70 do 100`
    } else if(prvi >= 70 && prvi <= 100 && drugi >= 40 && drugi <= 60) {
        return `Prvi broj se nalazi u opsegu od 70 do 100, a drugi u opsegu od 40 do 60`
    } else if(prvi >= 40 && prvi <= 60 && drugi < 40 || drugi > 100) {
        return `Prvi broj se nalazi u opsegu od 40 do 60, a drugi se ne nalazi ni u jednom opsegu.`
    } else if(prvi >= 70 && prvi <= 100 && drugi < 40 || drugi > 100) {
        return `Prvi broj se nalazi u opsegu od 70 do 100, a drugi se ne nalazi ni u jednom opsegu.`
    } else if(prvi < 40 || prvi > 100 && drugi >= 70 && drugi <= 100) {
        return `Prvi broj se ne nalazi u ni jednom opsegu, a drugi broj se nalazi u opsegu od 70 do 100.`
    } else if(prvi < 40 || prvi > 100 && drugi >= 40 && drugi <= 60) {
        return `Prvi broj se ne nalazi ni u jednom opsegu, a drugi se nalazi u opsegu od 40 do 60.`
    }
    else {
        return `Brojevi se ne nalaze ni u jednom od dva data opsega.`
    }
}
console.log(uOpsegu("asd"))
console.log(uOpsegu(50, 55))
console.log(uOpsegu(80, 85))
console.log(uOpsegu(50, 80))
console.log(uOpsegu(80, 50))
console.log(uOpsegu(50, 20))
console.log(uOpsegu(80, 20))
console.log(uOpsegu(20, 80))
console.log(uOpsegu(20, 55))
//////// 3. /////////
// 3 Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
function veciBroj(prvi, drugi) {
    if(isNaN(prvi) || isNaN(drugi)) {
        return `Niste uneli korektan broj.`
    }
    else if(prvi < 0 || drugi < 0) {
        return `Brojevi moraju biti pozitivni.`
    }
    else if(prvi >= 40 && prvi <= 60 && drugi >= 40 && drugi <= 60) {
        if(prvi > drugi) {
            return `Prvi broj je veci od drugog.`
        } else if (prvi < drugi) {
            return `Drugi broj je veci od prvog.`
        }
    } else if(prvi < 40 && prvi > 60 && drugi < 40 && drugi > 60) {
        return `Brojevi nisu u opsegu od 40 do 60.`
    }
}
// console.log(veciBroj(40, 50));
// console.log(veciBroj(2, 10));
