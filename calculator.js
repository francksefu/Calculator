const button = document.querySelectorAll("button");
const calcul = document.querySelector("#calcul");
const result = document.querySelector("#result");
const del = document.querySelector(".DEL");
const on = document.querySelector(".ON");
const plusmoins = document.querySelector(".plusmoins");
const equal = document.querySelector(".equal");
function buttonnier() {
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener("click", () => {
            calcul.style.direction = "rtl";
            calcul.textContent +=""+ button[i].id;
        });
    }
}
on.addEventListener("click", () => {
    if(calcul.textContent == ""){
        calcul.textContent = "0";
    }else{
        calcul.textContent = "";
        result.textContent = "";
    }
});
// I should write it because when  I want to product the result, I must have just a number
const add = (a, b) => (a*1)+(b*1);
const minus = (a, b) => (a*1)-(b*1);
const multiply = (a, b) => (a*1)*(b*1);
const divid = (a, b) => (a*1)/(b*1);

del.addEventListener("click", () => {
    const tabdel = calcul.textContent.split("");
    let poubelle = tabdel.pop();
    let content="";
    for(let i = 0; i < tabdel.length; i++){
        content += ""+tabdel[i]; 
    }
    calcul.textContent = content;
});
equal.addEventListener("click", () => {
    const tabResult = calcul.textContent.split("");
    for(let j = 0; j < tabResult.length; j++){
        if(tabResult[j] == "."){
            let prev = tabResult[j-1];
            let next = tabResult[j+1];
            let chiffre = ""+tabResult[j-1]+tabResult[j]+tabResult[j+1];
            const removed = tabResult.splice((j-1), 3, chiffre);
        }
    }
    //console.log(tabResult);
    let resultTab = tabResult[0]*1;
    for(let i = 0; i < tabResult.length; i++){
        if((((tabResult[i]) == "+")||((tabResult[i]) == "x")||((tabResult[i]) == "-")||((tabResult[i]) == "/"))&& (i == 1)) {
            if(tabResult[i] == "+") {
                resultTab = add(tabResult[i-1], tabResult[i+1]);
            }
            if(tabResult[i] == "x") {
                resultTab = multiply(tabResult[i-1], tabResult[i+1]);
            }
            if(tabResult[i] == "-") {
                resultTab = minus(tabResult[i-1], tabResult[i+1]);
            }
            if(tabResult[i] == "/") {
                resultTab = divid(tabResult[i-1], tabResult[i+1]);
            }
        }

        if((((tabResult[i]) == "+")||((tabResult[i]) == "x")||((tabResult[i]) == "-")||((tabResult[i]) == "/"))&& (i > 1)) {
            if(tabResult[i] == "+") {
                resultTab = add(resultTab, tabResult[i+1]);
            }
            if(tabResult[i] == "x") {
                resultTab = multiply(resultTab, tabResult[i+1]);
            }
            if(tabResult[i] == "-") {
                resultTab = minus(resultTab, tabResult[i+1]);
            }
            if(tabResult[i] == "/") {
                resultTab = divid(resultTab, tabResult[i+1]);
            }
        }
    }
    result.textContent = resultTab;
    //console.log(resultTab);
});

addEventListener("load", buttonnier);