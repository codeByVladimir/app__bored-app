const titleNode = document.querySelector('.js-title');
const buttonNode = document.querySelector('.js-button');

buttonNode.addEventListener('click', () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(data => data.json())
        .then(response => {
            console.log(response);
            titleNode.textContent = response.activity;
        });
});