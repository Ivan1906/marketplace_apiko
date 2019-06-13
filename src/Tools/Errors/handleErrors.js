function required(value, nameInput) {
  if (value.trim().length === 0) {
    return `Поле ${nameInput} не повино бути пустим.`
  }
  return undefined;
};

function isEmail(value, nameInput) {
  const reger = /\S+@\S+\.\S+/;
  if (!reger.test(String(value).toLowerCase())) {
    return `Поле ${nameInput} не відповідає поштовому адресу.`
  }
  return undefined
};

function confirmPassword() {
  return undefined;
}

export {required, isEmail, confirmPassword};