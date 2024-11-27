const captchaContainer = document.getElementById('captcha');
const captchaInput = document.getElementById('captcha-input');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submit-button');
const captchaContainerElement = document.querySelector('.captcha-container_all'); 

function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateLetterCaptcha() {
  let captcha = '';
  for (let i = 0; i < 5; i++) {
    captcha += generateRandomLetter();
  }
  captchaContainer.textContent = captcha;
  captchaInput.value = '';
  captchaInput.focus();
  submitButton.disabled = true;
  errorMessage.textContent = '';
}

function checkCaptcha() {
  const inputValue = captchaInput.value.trim(); // Убираем пробелы в начале и в конце
  const captchaText = captchaContainer.textContent;

  if (!inputValue) {
    errorMessage.textContent = 'Введите код капчи';
    return;
  }
    if (inputValue.toLowerCase() === captchaText.toLowerCase()) {
      showRegistration();
      errorMessage.textContent = '';
      document.querySelector('.captcha_container_all').style.display = 'none'; 
    } else {
      errorMessage.textContent = 'Неверный код';
    }
 }


captchaInput.addEventListener('input', checkCaptcha);

function showRegistration() {
  document.querySelector('.registration').style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
}