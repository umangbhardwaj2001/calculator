let buttons = document.querySelectorAll('.btn'); 
let problem = document.querySelector('.equation');
let result = document.querySelector('.result');
let exp='';
for(let i=0;i<buttons.length;i++)
{
    let button = buttons[i];
    button.addEventListener('click',function(){
        let op=button.getAttribute('data-value');
        if(op=='='){
            result.innerHTML=eval(exp);
        }
        else if(op=='x'){
            exp=exp.substr(0,exp.length-1);
            problem.innerHTML=exp;
        }
        else if(op=='AC')
        {
            exp=exp.substr(0,0);
            problem.innerHTML=exp;
            result.innerHTML='';
        }
        else{
            exp+=op;
            problem.innerHTML=exp;
        }
    });
}