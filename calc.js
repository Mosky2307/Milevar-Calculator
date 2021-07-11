let opBox = document.querySelector('#opBox');
let equal = document.createElement('button');
equal.setAttribute('id','equal');
equal.textContent = "="
let plus = document.createElement('button');
let fraction = document.createElement('button');
fraction.setAttribute('id','divide');
fraction.textContent = "/";






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
         if (calcArray.length === 0) {
          plus.setAttribute('id','plus');
plus.textContent = "+";
          opBox.appendChild(plus);}
          else if (calcArray.length === 1) {
            fraction.setAttribute('id','divide');
fraction.textContent = "/";
          opBox.appendChild(fraction);
          } else if (calcArray.length ===2) {
            equal.setAttribute('id','equal');
            equal.textContent = "=";
                      opBox.appendChild(equal);
          }
            inArray += item.textContent;
            if (screenArray[0] === 0) {
                screenArray = []
            };
            if (screenArray.length === undefined) {
              screenArray = [];
              screenArray += item.textContent;
              setscreen();} else {
        screenArray += item.textContent;
          setscreen();}
          if (screenArray.length === undefined) {
            screenArray = [];
            screenArray += item.textContent;
            setscreen();
           
          }
          if (screenContent.textContent.length > 7) {
            let newFont = 80;
           for (let i = 7; i<screenContent.textContent.length; i++) 
           {newFont *= 7/8;};
           screenContent.style.fontSize = `${newFont}px`;
          }
          
      });
calcArray = [];



plus.addEventListener('click', () => { 
       opBox.removeChild(plus)
        calcArray.push(inArray);
        inArray = "";
    screenArray += "+";
    setscreen();}
       )})








      equal.addEventListener('click', () => {
        opBox.removeChild(equal)
              calcArray.push(inArray)
              screenArray = final(calcArray[0], calcArray[1], calcArray[2]);
              setscreen();
              let newFont = 80;
              screenContent.style.fontSize = `${newFont}px`
              if (screenContent.textContent.length > 7) {
                let newFont = 80;
               for (let i = 7; i<screenContent.textContent.length; i++) 
               newFont *= 7/8;
               screenContent.style.fontSize = `${newFont}px`};
               inArray = "";
               calcArray = [];
    })

    
setscreen();
fraction.addEventListener('click', () => {
  opBox.removeChild(fraction)
  calcArray.push(inArray);
        inArray = "";
    screenArray += "/"
    setscreen() })