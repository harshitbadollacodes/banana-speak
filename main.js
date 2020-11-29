const inputText = document.querySelector('.input-text');
const convertBtn = document.querySelector('.btn');
const outputBox = document.querySelector('.box');

const link = 'https://api.funtranslations.com/translate/minion.json';

function convertToMinion() {
    fetch(`${link}?text=${inputText.value}`)
    .then(response => response.json())
    .then(json => {
        outputBox.innerText = json.contents.translated;
    })
    .catch(() => alert('Some error occured. Please try after sometime'));
};

convertBtn.addEventListener('click', (e) => {
    convertToMinion();
});