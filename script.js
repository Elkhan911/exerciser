const password = prompt("Введите пароль:", "");

for (let i = 0; i <= password.length; i = i + 1) {
  if (password[i] === "?") {
    console.log('"?" есть в пароле на позиции ' + (i + 1));
  }
}
