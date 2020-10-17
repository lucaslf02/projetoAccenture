
let btn1;
let btn2;
let btn3;
let btn4;
let btn5;
let btn6;
let btn7;
let btn8;
let btn9;
let btn0;
let btnAsterisco;
let btnEnviar;
let resultado;

window.addEventListener('load',() =>{
    btn1 = document.querySelector("#btn1");
    btn2 = document.querySelector("#btn2");
    btn3 = document.querySelector("#btn3");
    btn4 = document.querySelector("#btn4");
    btn5 = document.querySelector("#btn5");
    btn6 = document.querySelector("#btn6");
    btn7 = document.querySelector("#btn7");
    btn8 = document.querySelector("#btn8");
    btn9 = document.querySelector("#btn9");
    btn0 = document.querySelector("#btn0");
    btnAsterisco = document.querySelector("#btnAsterisco");
    btnEnviar = document.querySelector("#btnEnviar");
    resultado = document.querySelector("#resultado");     
    let text = "";    
    btnAsterisco.addEventListener('click',()=>{
        resultado.textContent = "";
    });
    btn1.addEventListener('click',()=>{
        text = resultado.textContent + "1";
        resultado.textContent = text;
        text="";
    })
    btn2.addEventListener('click',()=>{
        text = resultado.textContent + "2";
        resultado.textContent = text;
        text="";
    })  
    btn3.addEventListener('click',()=>{
        text = resultado.textContent + "3";
        resultado.textContent = text;
        text="";
    });  
    btn4.addEventListener('click',()=>{
        text = resultado.textContent + "4";
        resultado.textContent = text;
        text="";
    });  
    btn5.addEventListener('click',()=>{
        text = resultado.textContent + "5";
        resultado.textContent = text;
        text="";
    });   
    btn6.addEventListener('click',()=>{
        text = resultado.textContent + "6";
        resultado.textContent = text;
        text="";
    }); 
    btn7.addEventListener('click',()=>{
        text = resultado.textContent + "7";
        resultado.textContent = text;
        text = "";
    });
    btn8.addEventListener('click',()=>{
        text = resultado.textContent + "8";
        resultado.textContent = text;
        text = "";
    }); 
    btn9.addEventListener('click',()=>{
        text = resultado.textContent + "9";
        resultado.textContent = text;
        text = "";
    });
    btn0.addEventListener('click',()=>{
        text = resultado.textContent + " ";
        resultado.textContent = text;
        text = "";
    });
    btnEnviar.addEventListener('click',()=>{
        let param = resultado.textContent; 
        const link = 'http://localhost:3001/decode/';
        axios.get(link+param)
                            .then(response => {
                                const {data} = response;
                                resultado.textContent = data;
                                console.log(resultado.textContent)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                        });
    
    });
