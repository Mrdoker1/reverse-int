module.exports = function reverse(n) {
    //function reverse(n) {

    ((n < 1) ? n = n * -1 : n = n * 1); //if negative
    n = n.toString().split("").reverse().join(""); //reverse string
    return Number(n.replace(/^0*/, "")); // return number without zeros
}

//console.log(reverse(-1230));