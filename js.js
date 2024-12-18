const button = document.querySelector('.button');

button.addEventListener('click', () => {
    console.log(button.className);
    if (button.className == 'button'){
        button.classList.toggle('blue');
    }else{
        button.classList.toggle('blue', false);
    }

});

const fonfullnameInput = document.querySelector('.fonfullname');
const fonnumberInput = document.querySelector('.fonnumber');
const fonnameInput = document.querySelector('.fonname');
const fonfromInput = document.querySelector('.fonfrom');
const fonwhereInput = document.querySelector('.fonwhere');
  const fonorderButton = document.querySelector('.fonorder');
    
        fonorderButton.addEventListener('click', () => {
        
        const fonfullname = fonfullnameInput.value;
        
        const fonnumber = fonnumberInput.value;
        
        const fonname = fonnameInput.value;
        
        const fonfrom = fonwhereInput.value;
        
        const fonwhere = fonwhereInput.value;
        console.log(`Введено: ${fonfullname} \n ${fonnumber} \n ${fonname} \n ${fonfrom} \n ${fonwhere}`);
        

        if (fonfullnameInput.value == '' || fonnumberInput.value == '' || fonnameInput.value == '' || fonfromInput.value == '' || fonfromInput.value == ''){
            alert('Вы заполнили не все поля, проверьте еще раз')
        }else if (button.className == 'button'){
            alert('Пожалуйста дайте согласие на обработку персональных данных')
        }else{
            alert(`Ваше имя:${fonfullname}\n Ваш номер:${fonnumber}\n Ваш груз:${fonname}\n Город отправки:${fonfrom}\n Город доставки:${fonwhere}\n`)
            fonfullnameInput.value = '';
            fonnumberInput.value = '';
            fonnameInput.value = '';
            fonfromInput.value = '';
            fonwhereInput.value = ''; 

            button.classList.toggle('blue', false)
        }
});