document.getElementById("add").disabled = true;
document.getElementById("subtract").disabled = true;
document.getElementById("multiply").disabled = true;
document.getElementById('equal').disabled = true;
document.getElementById('divide').disabled = true;

let inArray = "";



function multiply(num1, num2) {
    return num1 * num2
};
function add(num1, num2) {
    return num1 + num2
};
function divide(num1, num2) {
    if (num2 === 0) {
        return 'und'
    } else {
    let answer = (num1) / (num2 - num1);
    return answer }
};


           
    

function final(num1, num2, num3) {
    let c =parseFloat(num1);
    let d =parseFloat(num2);
    let e =parseFloat(num3);

    let a = divide(d, e);
    let b = multiply(c, a)
     return add(b, c);
};
   const screenContent = document.querySelector('#screenContent')
   screenArray = [0];
   function setscreen() {
       screenContent.textContent = screenArray;};
       
       document.querySelectorAll('.num').forEach(item => {
        item.addEventListener('click', () => {
            inArray += item.textContent;
            if (screenArray[0] === 0) {
                screenArray = []
            };
            if (screenArray.length < 7) {
          screenArray += item.textContent;
          setscreen();} else if 
          (screenArray.length === undefined) {
            screenArray = []
            screenArray += item.textContent;
            setscreen();
           
          }
          if (calcArray.length === 1) {
            document.getElementById('divide').disabled = false;
            document.getElementById("add").disabled = true;
          } else if (calcArray.length === 2) {
            document.getElementById('equal').disabled = false;
          }
          else
          
          {
          document.getElementById("add").disabled = false;}
        })
      });
calcArray = [];


let plus = document.querySelector("#add");

plus.addEventListener('click', () => { 
        
        calcArray.push(inArray);
        inArray = "";
    screenArray += "+";
    setscreen();
    document.getElementById("add").disabled = true;
 
 if (screenContent.textContent.length > 7) {
    let newFont = 80;
   for (let i = 7; i<screenContent.textContent.length; i++) 
   newFont *= 7/8;
   screenContent.style.fontSize = `${newFont}px`}
    })








      let equal = document.querySelector('#equal');
      equal.addEventListener('click', () => {
          
              calcArray.push(inArray)
              screenArray = final(calcArray[0], calcArray[1], calcArray[2]);
              setscreen();
              if (screenContent.textContent.length > 7) {
                let newFont = 80;
               for (let i = 7; i<screenContent.textContent.length; i++) 
               newFont *= 7/8;
               screenContent.style.fontSize = `${newFont}px`};
               document.getElementById('equal').disabled = "true";
               inArray = "";
               calcArray = [];
    })

    let clear = document.querySelector('#clear');
clear.addEventListener('click', () => 
    {screenArray = [0];
    calcArray = [];
    setscreen();
    });
setscreen();
let fraction = document.querySelector('#divide');
fraction.addEventListener('click', () => {
    calcArray.push(inArray);
        inArray = "";
    screenArray += "/"
    setscreen()
    document.getElementById('divide').disabled = true;
});

console.log(calcArray)