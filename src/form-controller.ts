import isEmail from 'validator/lib/isEmail';
const SHOW_MESSAGE_ERROR = 'show-error-message';

const form = document.querySelector('form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const passwd = document.querySelector('.password') as HTMLInputElement;
const passwdRepeat = document.querySelector(
  '.passwordRepeat',
) as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  hideErrorMessage(this);
  checkEmptyField(username, email, passwd, passwdRepeat);
  checkEmail(email);
  checkEqualPassword(passwd, passwdRepeat);
  if (sendForm(this)) form.submit();
});

function hideErrorMessage(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_MESSAGE_ERROR).forEach((item) => {
    item.classList.remove(SHOW_MESSAGE_ERROR);
  });
}

function showErrorMessage(input: HTMLInputElement, message: string) {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = message;
  formField.classList.add(SHOW_MESSAGE_ERROR);
}

function checkEmptyField(...inputs: Array<HTMLInputElement>): void {
  inputs.forEach((input: HTMLInputElement) => {
    if (!input.value) {
      showErrorMessage(input, `o campo ${input} deve ser preenchido`);
    }
    return;
  });
}

function checkEmail(inputEmail: HTMLInputElement): void {
  if (!isEmail(inputEmail.value))
    showErrorMessage(inputEmail, 'Email inválido');
}

function checkEqualPassword(
  passwd: HTMLInputElement,
  passwdRepeat: HTMLInputElement,
): void {
  if (passwd.value !== passwdRepeat.value) {
    showErrorMessage(passwd, 'Senhas não batem');
    showErrorMessage(passwdRepeat, 'Senhas não batem');
  }
}

function sendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_MESSAGE_ERROR).forEach(() => (send = false));
  return send;
}
