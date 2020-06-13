const input = document.querySelector('.inputWord');
const languageBtn = document.querySelector('.languageBtn');
const translateBtn = document.querySelector('.translateBtn');
const translateText = document.querySelector('.translate_text');
let destinationLanguage = 'ru-en';
languageBtn.addEventListener('click', (e)=>{
    if(languageBtn.innerHTML === 'ru-en'){
        languageBtn.innerHTML = 'en-ru';
        destinationLanguage = 'en-ru';
    }
    else{
        languageBtn.innerHTML = 'ru-en';
        destinationLanguage = 'ru-en';
    }
});

translateBtn.addEventListener('click', (e) =>{
    const inputStr = input.value;
    if(inputStr === ""){
        alert("ERROR!");
        return;
    }
    httpGet(inputStr);
});

async function httpGet(requestText)
{
    const APIkey = 'trnsl.1.1.20200423T141610Z.d036e17f2ff9c6d4.fc7c1bffe0cbf855ea0b5b6a81d97398353650cb';
    let requestURL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIkey}&lang=${destinationLanguage}&text=${requestText}`;
    let response = await fetch(requestURL);
    let respJSON = await response.json();
    translateText.innerHTML = respJSON.text[0];
}