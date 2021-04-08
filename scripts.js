/*------ Variable -----*/
let number1 = "", number2 = "", operator = "";

/*----- Selecting Elements -----*/
var arrNumbers = document.querySelectorAll(".number");
// console.log(arrNumbers);
var objPreview = document.querySelector(".preview");
// console.log(objPreview);
var objMaths = document.querySelector(".maths");
// console.log(objMaths);
var objClear = document.querySelector(".clear");
// console.log(objClear);

/*----- Event Listeners -----*/
for(counter = 0; counter < arrNumbers.length; counter++){
    // console.log(arrNumbers[counter]);
    objNumber = arrNumbers[counter];
    objNumber.addEventListener("click", preview);
}

/*----- Functions -----*/
function preview(event){
    // console.log(event.target.innerHTML);
    var currentItem = event.target.innerHTML;
    console.log(currentItem);
    if(number1){
        number1 += currentItem;
    } else {
        number1 = currentItem;
    }
    objPreview.value = number1;
}
function clear(event){
        number1 = "";
        number2 = "";
        operator = "";
        objPreview.value = "";
        objMaths.value = "";
}