let calculateValue;
let output;
const del = document.querySelector(".del");
const btn = document.querySelectorAll("input[type=button]");

const btnarr = Array.from(btn);
const calculate = document.querySelector("#list");
const result = document.querySelector("#result");
const key2=document.querySelector(".key2");
let calArr = [];
btnarr.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.add("effect");

        setTimeout(() => {
            elem.classList.remove("effect");
        }, 200);

        // Handle square root button separately
        if (elem.value === 'sin' ) {
          calArr.push(`Math.${elem.value}(`); 
             console.log(calArr);
              
        }
        if (elem.value === '√') {
            calArr.push('√(');
            calculateValue = calArr.join('');
            calculate.textContent = calculateValue;
        } else if (elem.value !== '=' && elem.value !== 'DEL' && elem.value !== "c" && elem.value !== "x" &&elem.value!=="Trig" && elem.value!="sin"  ) {
             console.log(elem.value);
            calArr.push(elem.value);
            calculateValue = calArr.join('');
            calculate.textContent = calculateValue;
        }
        if (elem.value == "x") {
            calArr.push("*");
            calculateValue = calArr.join('');
            calculate.textContent = calculateValue;
        }

        if (elem.value == "DEL") {
            calArr.pop();
            calculateValue = calArr.join('');
            calculate.textContent = calculateValue;
        }

        if (elem.value == "=") {
            
output = eval(calculateValue.replace(/√/g, 'Math.sqrt'));
            console.log(output.toFixed(3));
            let outputString=output.toString();
            let outputLength=outputString.length;

            if(outputLength>7){
                let power=outputLength-1;
                let coefficient=output/Math.pow(10,power);
                console.log(`${coefficient} 10^ ${power}`)
            }


            result.textContent = "= " + output.toFixed(3);
            console.log(calArr);
        }

        if (elem.value == "c") {
            calculate.textContent = "";
            result.textContent = '';
            while (calArr.length != 0) {
                calArr.pop();
            }
        }
    });
});


