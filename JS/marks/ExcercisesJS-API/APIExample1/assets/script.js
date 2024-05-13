const buttonSelector = document.querySelector('#btn');
const inputSelector = document.querySelector('#input');
const answerSelector = document.querySelector('#answer');
const errorSelector = document.querySelector('#error');

let isRequestInProgress = false;

function setIsRequestInProgress(value) {
    isRequestInProgress = value;
}

function setDisableButtonState(isDisabling) {
    if (isDisabling) {
        buttonSelector.setAttribute('disabled', 'disabled');
    } else {
        buttonSelector.removeAttribute('disabled'); //evita el addEventListener
    }
}

function cleanupResponse() {
    setTimeout(() => {
        answerSelector.innerHTML = '';
        inputSelector.value = '';
        setIsRequestInProgress(false);
        setDisableButtonState(false);
    }, 3000);
}

function showAnswer(answer) {
    setTimeout(() => {
        answerSelector.innerHTML = `<img src="${answer}" width="600px" height="400px">`;
        cleanupResponse();
    }, 12);
}

function fetchAnswer() {
    setIsRequestInProgress(true);
    setDisableButtonState(true);

    fetch('https://yesno.wtf/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            showAnswer(data.image);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            showError();
        })
        .finally(() => {
            setIsRequestInProgress(false);
            setDisableButtonState(false);
        });
}

function showError() {
    errorSelector.innerHTML = 'Write Something First...';

    setTimeout(() => {
        errorSelector.innerHTML = '';
    }, 3000);
}

function getAnswer() {
    if (isRequestInProgress) return;
    if (!inputSelector.value) return showError();

    fetchAnswer();
}

function handleKeyEnter(ActionEvent) {
    if (ActionEvent.keyCode === 13) {
        getAnswer();
    }
}

buttonSelector.addEventListener('click', getAnswer);
inputSelector.addEventListener('keydown', handleKeyEnter);