const header = document.createElement('div');
const keyBoardWrapper = document.createElement('div');
const firstRow = document.createElement('div');
const secondRow = document.createElement('div');
const thirdRow = document.createElement('div');
const fourRow = document.createElement('div');
const fiveRow = document.createElement('div');
const textArea = document.createElement('textarea');
const instruction = document.createElement('div');
let currentLaunguage = 0;

if (localStorage.getItem('record')) {
  const launguage = localStorage.getItem('record');
  currentLaunguage = launguage;
}

const keyMap = new Map([
  ['ё', ['ё', '`']],
  ['1', ['1', '1', '!']],
  ['2', ['2', '2', '@']],
  ['3', ['3', '3', '#']],
  ['4', ['4', '4', '$']],
  ['5', ['5', '5', '%']],
  ['6', ['6', '6', '^']],
  ['7', ['7', '7', '&']],
  ['8', ['8', '8', '*']],
  ['9', ['9', '9', '(']],
  ['0', ['0', '0', ')']],
  ['-', ['-', '-', '_']],
  ['=', ['=', '=', '+']],
  ['Backspace', ['Backspace', 'Backspace']],
  ['Tab', ['Tab', 'Tab']],
  ['й', ['й', 'q']],
  ['ц', ['ц', 'w']],
  ['у', ['у', 'e']],
  ['к', ['к', 'r']],
  ['е', ['е', 't']],
  ['н', ['н', 'y']],
  ['г', ['г', 'u']],
  ['ш', ['ш', 'i']],
  ['щ', ['щ', 'o']],
  ['з', ['з', 'p']],
  ['х', ['х', '[']],
  ['ъ', ['ъ', ']']],
  ['\\', ['\\', '\\']],
  ['Del', ['Del', 'Del', 'Delete']],
  ['CapsLock', ['CapsLock', 'CapsLock']],
  ['ф', ['ф', 'a']],
  ['ы', ['ы', 's']],
  ['в', ['в', 'd']],
  ['а', ['а', 'f']],
  ['п', ['п', 'g']],
  ['р', ['р', 'h']],
  ['о', ['о', 'j']],
  ['л', ['л', 'k']],
  ['д', ['д', 'l']],
  ['ж', ['ж', ';']],
  ['э', ['э', "'"]],
  ['Enter', ['Enter', 'Enter']],
  ['Shift', ['▲Shift', '▲Shift', 'ShiftLeft']],
  ['я', ['я', 'z']],
  ['ч', ['ч', 'x']],
  ['с', ['с', 'c']],
  ['м', ['м', 'v']],
  ['и', ['и', 'b']],
  ['т', ['т', 'n']],
  ['ь', ['ь', 'm']],
  ['б', ['б', ',']],
  ['ю', ['ю', '.']],
  ['.', ['.', '/']],
  ['▲', ['▲', '▲', 'ArrowUp']],
  [' Shift', [' Shift', ' Shift', 'ShiftRight']],
  ['я', ['я', 'z']],
  ['Ctrl', ['Ctrl', 'Ctrl', 'ControlLeft']],
  ['Win', ['Win', 'Win', 'Meta']],
  ['Alt', ['▲Alt', '▲Alt', 'AltLeft']],
  [' ', [' ', ' ']],
  [' Alt', [' Alt', ' Alt', 'AltRight']],
  ['◄', ['◄', '◄', 'ArrowLeft']],
  ['▼', ['▼', '▼', 'ArrowDown']],
  ['►', ['►', '►', 'ArrowRight']],
  [' Ctrl', [' Ctrl', ' Ctrl', 'ControlRight']],
]);

const keyMapValues = Array.from(keyMap);

function addBtn() {
  header.className = 'title';

  keyBoardWrapper.className = 'wrapper';
  firstRow.className = 'wrapper-row-1';
  secondRow.className = 'wrapper-row-2';
  thirdRow.className = 'wrapper-row-3';
  fourRow.className = 'wrapper-row-4';
  fiveRow.className = 'wrapper-row-5';
  textArea.className = 'textarea';
  instruction.className = 'instruction';
  header.innerHTML = 'Виртуальная клавиатура';
  instruction.innerHTML = 'Для переключения языка используется комбинация: левый Ctrl + space';

  document.body.append(header);
  document.body.append(textArea);
  document.body.append(keyBoardWrapper);
  document.body.append(instruction);
  document.querySelector('.wrapper').append(firstRow);
  document.querySelector('.wrapper').append(secondRow);
  document.querySelector('.wrapper').append(thirdRow);
  document.querySelector('.wrapper').append(fourRow);
  document.querySelector('.wrapper').append(fiveRow);

  for (let i = 0; i < 14; i += 1) {
    const keyboardBtn = document.createElement('div');
    keyboardBtn.className = 'keyboard-button';
    keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
    document.querySelector('.wrapper-row-1').append(keyboardBtn);
    if (i === 13) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '62px';
    }
    if (i === 0) {
      keyboardBtn.className = 'upperCase keyboard-button';
    }
    if (i > 0 && i < 13) {
      keyboardBtn.className = 'addSymb keyboard-button';
    }
  }

  for (let i = 14; i < 29; i += 1) {
    const keyboardBtn = document.createElement('div');
    keyboardBtn.className = 'keyboard-button';
    keyboardBtn.innerHTML += keyMapValues[i][1][currentLaunguage];
    document.querySelector('.wrapper-row-2').append(keyboardBtn);
    if (i === 28 || i === 14) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '15px';
      keyboardBtn.style.paddingLeft = '8px';
    }
    if (i > 14 && i < 28) {
      keyboardBtn.className = 'keyboard-button upperCase';
    }
  }

  for (let i = 29; i < 42; i += 1) {
    const keyboardBtn = document.createElement('div');
    keyboardBtn.className = 'keyboard-button';
    keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
    document.querySelector('.wrapper-row-3').append(keyboardBtn);
    if (i === 41) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '44px';
    }
    if (i === 29) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '54px';
    }

    if (i > 29 && i < 41) {
      keyboardBtn.className = 'keyboard-button upperCase';
    }
  }

  for (let i = 42; i < 55; i += 1) {
    const keyboardBtn = document.createElement('div');
    keyboardBtn.className = 'keyboard-button';
    keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
    document.querySelector('.wrapper-row-4').append(keyboardBtn);
    if (i === 42) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '42px';
    } else if (i === 54) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '104px';
    }

    if (i > 42 && i < 53) {
      keyboardBtn.className = 'keyboard-button upperCase';
    }
  }

  for (let i = 55; i < 64; i += 1) {
    const keyboardBtn = document.createElement('div');
    keyboardBtn.className = 'keyboard-button';
    keyboardBtn.innerHTML = keyMapValues[i][1][currentLaunguage];
    document.querySelector('.wrapper-row-5').append(keyboardBtn);
    if (i === 58) {
      keyboardBtn.className = 'keyboard-button';
      keyboardBtn.style.width = '192px';
    }
  }
}

addBtn();

// Сохранение состояния клавиш

class Foucs {
  constructor(field) {
    this.field = field;
  }

  textFoucs() {
    this.field.focus();
  }
}

const focus = new Foucs(textArea);
focus.textFoucs();

const keys = document.querySelectorAll('.keyboard-button');
const keysLetter = document.querySelectorAll('.upperCase');

function changeBtn() {
  keys.forEach((currentValue, index) => {
    (currentValue.innerHTML = keyMapValues[index][1][currentLaunguage]);
  });
}

// эффекты при нажатии на физическую клавиатуру

document.addEventListener('keyup', (target) => {
  keys.forEach((currentValue, index) => {
    function AnimationHandler() {
      currentValue.classList.remove('wrapper_animate_2');
    }
    if (target.code === keyMapValues[index][1][2] || target.key === keyMapValues[index][1][2]) {
      currentValue.classList.add('wrapper_animate_2');
      currentValue.addEventListener('animationend', AnimationHandler, false);
    } else if (target.key.toUpperCase() === currentValue.innerHTML.toUpperCase()) {
      currentValue.classList.add('wrapper_animate_2');
      currentValue.addEventListener('animationend', AnimationHandler, false);
    } else if (target.key.toUpperCase() === keyMapValues[index][1][0]) {
      currentValue.classList.add('wrapper_animate_2');
      currentValue.addEventListener('animationend', AnimationHandler, false);
    } else if (target.key.toUpperCase() === keyMapValues[index][1][1].toUpperCase()) {
      currentValue.classList.add('wrapper_animate_2');
      currentValue.addEventListener('animationend', AnimationHandler, false);
    }
  });
});

// эффекты выделения  при нажатии на физическую клавиатуру

document.addEventListener('keydown', (target) => {
  keys.forEach((currentValue, index) => {
    if (target.code === keyMapValues[index][1][2]) {
      currentValue.style.background = 'green';
    } else if (target.key.toUpperCase() === currentValue.innerHTML.toUpperCase()) {
      currentValue.style.background = 'green';
    } else if (target.key.toUpperCase() === keyMapValues[index][1][0]) {
      currentValue.style.background = 'green';
    } else if (target.key.toUpperCase() === keyMapValues[index][1][1].toUpperCase()) {
      currentValue.style.background = 'green';
    }
  });
});

document.addEventListener('keyup', (target) => {
  keys.forEach((currentValue, index) => {
    if (target.code === keyMapValues[index][1][2]) {
      currentValue.style.background = '#444444';
    } else if (target.key.toUpperCase() === currentValue.innerHTML.toUpperCase()) {
      currentValue.style.background = '#444444';
    } else if (target.key.toUpperCase() === keyMapValues[index][1][0]) {
      currentValue.style.background = '#444444';
    } else if (target.key.toUpperCase() === keyMapValues[index][1][1].toUpperCase()) {
      currentValue.style.background = '#444444';
    }
  });
});

//  анимация кнопки при клике
document.addEventListener('click', (el) => {
  function AnimationHandler() {
    el.target.classList.remove('wrapper_animate_2');
  }
  if (el.target.classList.contains('keyboard-button')) {
    el.target.classList.add('wrapper_animate_2');
    el.target.addEventListener('animationend', AnimationHandler, false);
  }
});

//  выделение кнопки при клике

document.addEventListener('mousedown', (el) => {
  if (el.target.classList.contains('keyboard-button')) {
    el.target.style.background = 'green';
  }
});

document.addEventListener('mouseup', (el) => {
  if (el.target.classList.contains('keyboard-button')) {
    el.target.style.background = '#444444';
  }
});

// capsLock

document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    keysLetter.forEach((currentValue) => {
      if (currentValue.innerHTML !== currentValue.innerHTML.toUpperCase()) {
        currentValue.innerHTML = currentValue.innerHTML.toUpperCase();
      } else {
        currentValue.innerHTML = currentValue.innerHTML.toLowerCase();
      }
    });
  }
});

keyBoardWrapper.addEventListener('click', (event) => {
  if (event.target.innerHTML === 'CapsLock') {
    keysLetter.forEach((currentValue) => {
      if (currentValue.innerHTML !== currentValue.innerHTML.toUpperCase()) {
        currentValue.innerHTML = currentValue.innerHTML.toUpperCase();
      } else {
        currentValue.innerHTML = currentValue.innerHTML.toLowerCase();
      }
    });
  }
});

// Переключение языка

document.onkeydown = function swapLang(event) {
  if (event.code === 'Space') {
    document.onkeyup = function Approve(target) {
      if (target.code === 'ControlLeft') {
        if (currentLaunguage === 0 || currentLaunguage === null || currentLaunguage === '0') {
          currentLaunguage = 1;
        } else {
          currentLaunguage = 0;
        }
        localStorage.setItem('record', currentLaunguage);

        changeBtn();
      } else {
        document.onkeyup = null;
      }
    };
  }
};

// печать в textArea

keyBoardWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('keyboard-button')) {
    if (event.target.innerHTML === 'Backspace') {
      textArea.value = textArea.value.slice(0, -1);
    } else if (event.target.innerHTML === 'Del') {
      textArea.value = textArea.value.slice(0, -1);
    } else if (event.target.innerHTML === 'Tab') {
      textArea.value += '    ';
    } else if (event.target.innerHTML === 'Enter') {
      textArea.value += '\n';
    } else if (event.target.innerHTML === '▲Alt' || event.target.innerHTML === ' Alt' || event.target.innerHTML === '▲Shift' || event.target.innerHTML === ' Shift' || event.target.innerHTML === 'CapsLock' || event.target.innerHTML === 'Ctrl' || event.target.innerHTML === ' Ctrl' || event.target.innerHTML === 'Win' || event.target.innerHTML === 'Shift') {
      textArea.value += '';
    } else {
      textArea.value += event.target.innerHTML;
    }
  }
});

// Ввод в инпут

textArea.addEventListener('keydown', (evt) => {
  keys.forEach((currentValue, index) => {
    if (evt.key.toUpperCase() === currentValue.innerHTML.toUpperCase()) {
      if (currentValue.innerHTML === 'Backspace') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Del') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Tab') {
        evt.preventDefault();
        textArea.value += '    ';
      } else if (currentValue.innerHTML === 'Enter') {
        evt.preventDefault();
        textArea.value += '\n';
      } else if (currentValue.innerHTML === '▲Alt' || currentValue.innerHTML === ' Alt' || currentValue.innerHTML === '▲Shift' || currentValue.innerHTML === 'CapsLock' || currentValue.innerHTML === 'Ctrl' || currentValue.innerHTML === ' Ctrl' || currentValue.innerHTML === 'Win' || currentValue.innerHTML === 'Shift') {
        textArea.value += '';
      } else {
        evt.preventDefault();
        evt.currentTarget.value += currentValue.innerHTML;
      }
    } else if (evt.key.toUpperCase() === keyMapValues[index][1][0].toUpperCase()) {
      if (currentValue.innerHTML === 'Backspace') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Del') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Tab') {
        evt.preventDefault();
        textArea.value += '    ';
      } else if (currentValue.innerHTML === 'Enter') {
        evt.preventDefault();
        textArea.value += '\n';
      } else if (currentValue.innerHTML === '▲Alt' || currentValue.innerHTML === ' Alt' || currentValue.innerHTML === '▲Shift' || currentValue.innerHTML === 'CapsLock' || currentValue.innerHTML === 'Ctrl' || currentValue.innerHTML === ' Ctrl' || currentValue.innerHTML === 'Win' || currentValue.innerHTML === 'Shift') {
        textArea.value += '';
      } else {
        evt.preventDefault();
        evt.currentTarget.value += currentValue.innerHTML;
      }
    } else if (evt.key.toUpperCase() === keyMapValues[index][1][1].toUpperCase()) {
      if (currentValue.innerHTML === 'Backspace') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Del') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Tab') {
        evt.preventDefault();
        textArea.value += '    ';
      } else if (currentValue.innerHTML === 'Enter') {
        evt.preventDefault();
        textArea.value += '\n';
      } else if (currentValue.innerHTML === '▲Alt' || currentValue.innerHTML === ' Alt' || currentValue.innerHTML === '▲Shift' || currentValue.innerHTML === 'CapsLock' || currentValue.innerHTML === 'Ctrl' || currentValue.innerHTML === ' Ctrl' || currentValue.innerHTML === 'Win' || currentValue.innerHTML === 'Shift') {
        textArea.value += '';
      } else {
        evt.preventDefault();
        evt.currentTarget.value += currentValue.innerHTML;
      }
    } else if (evt.key === keyMapValues[index][1][2]) {
      if (currentValue.innerHTML === 'Backspace') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Del') {
        evt.preventDefault();
        textArea.value = textArea.value.slice(0, -1);
      } else if (currentValue.innerHTML === 'Tab') {
        evt.preventDefault();
        textArea.value += '    ';
      } else if (currentValue.innerHTML === 'Enter') {
        evt.preventDefault();
        textArea.value += '\n';
      } else if (currentValue.innerHTML === '▲Alt' || currentValue.innerHTML === ' Alt' || currentValue.innerHTML === '▲Shift' || currentValue.innerHTML === 'CapsLock' || currentValue.innerHTML === 'Ctrl' || currentValue.innerHTML === ' Ctrl' || currentValue.innerHTML === 'Win' || currentValue.innerHTML === 'Shift') {
        textArea.value += '';
      } else {
        evt.preventDefault();
        evt.currentTarget.value += currentValue.innerHTML;
      }
    }
  });
});

// /Дополнительный символы при нажатии shift

const numKey = document.querySelectorAll('.addSymb');

document.addEventListener('keydown', (target) => {
  if (target.key === 'Shift') {
    numKey.forEach((currentValue, index) => {
      currentValue.innerHTML = keyMapValues[index + 1][1][2];
    });
  }
});

document.addEventListener('keyup', (target) => {
  if (target.key === 'Shift') {
    numKey.forEach((currentValue, index) => {
      currentValue.innerHTML = keyMapValues[index + 1][1][1];
    });
  }
});
