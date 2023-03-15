const Buttons = document.querySelectorAll('button');
const Screen = document.getElementById('screen');
for(let button of Buttons){
    button.addEventListener('click' , (e) => {
        const buttonText = e.target.innerText;
        if(buttonText ==='C'){
            Screen.value = "";
        }
        else if(buttonText === 'x'){
            Screen.value += '*';

        }
        else if(buttonText === '='){

            try{
                Screen.value = eval(Screen.value);
            }
            catch (e){
                Screen.value = 'Invalid Operation';
            }
            
        }
        else{
            Screen.value += buttonText;
        }
        
    });
}