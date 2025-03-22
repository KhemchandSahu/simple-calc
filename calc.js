var display = document.querySelector(".operation");
var equals = document.querySelector(".equals");
var int=-1;
console.log("updated"); 

handleClick=(val)=>{
    display.innerHTML+=val;
    int = val-'0';
    if((0<=int) && (10>int)){
        console.log(int);
        try {
            equals.innerHTML=eval(display.innerHTML);
        } catch (error) {
            equals.innerHTML="...."
        }
    }
    
    
}

handleEqual = () => {
    if((0<=int) && (10>int)){
        try {
            display.innerHTML=eval(display.innerHTML);
        } catch (error) {
            equals.innerHTML="Invalid operation";
        }
        
        equals.innerHTML="invalid operation";
    }
    else{
        equals.innerHTML="invalid";
    }
    
}

handleClear = () => {
    display.innerHTML="";
    equals.innerHTML="..."
}

// try {
//     handleClick();
// } catch (error) {
//     equals.innerHTML="...";
// }
