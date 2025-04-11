const titleNode = document.querySelector('.js-title');
const subtitleNode = document.querySelector('.js-subtitle');
const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', async () => {
    titleNode.textContent = 'Ура, теперь не скучно 🔥';
    document.body.style.background = 'linear-gradient(to bottom, rgba(0, 176, 28, 1), rgba(255, 255, 255, 0))'
    try{
        const engText = await getBoredText();
        const translated = await getTranslateText(engText);
        if(!engText || !translated){
            subtitleNode.textContent = 'Ошибка получения';
            return;
        }
        subtitleNode.textContent = translated;
    }
    catch(error){
        subtitleNode.textContent = 'Ошибка получения';
    }
    
});

async function getBoredText() {
    try{
        const request = await fetch('https://apis.scrimba.com/bored/api/activity');
        const response = await request.json();
        return response.activity;
    }
    catch(error){
        console.log(error);
    };
}

async function getTranslateText(eng) {
    try{
        const request = await fetch(`https://api.mymemory.translated.net/get?q=${eng}&langpair=en|ru`)
        const response = await request.json();
        return response.responseData.translatedText;
    }
    catch(error){
        console.log(error);
    }
}