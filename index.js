const KeyboardRU = [
        '>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
        'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ё', 'Enter',
        'Shift', ']', 'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '↑', 'Shift',
        'control', 'option', 'command', '', 'command', 'option', '←', '↓', '→'
    ]
    const KeyboardEN = [
        '>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
        'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter',
        'Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
        'control', 'option', 'command', '', 'command', 'option', '←', '↓', '→'
    ]

    const idArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 
                'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
                'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI',
                'KeyO','KeyP','BracketLeft', 'BracketRight',
                'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 
                'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter',
                'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 
                'KeyN', 'KeyM','Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
                'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 
                'ArrowLeft', 'ArrowDown', 'ArrowRight'
            ];
                
  class Keyboard {
    constructor(lang) {
        this.lang = KeyboardEN;
    }
  
    createWrapper() {
        const body = document.querySelector('body');
        body.classList.add('EN');
        
        let textarea = document.createElement('textarea');
        textarea.classList.add('textarea');
        body.append(textarea);
        
        const keyboardWrapper = document.createElement('div');
        keyboardWrapper.classList.add('keyboard-wrapper');
        body.append(keyboardWrapper);

        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');
        keyboardWrapper.append(keyboard);
        
        const paragraph1 = document.createElement('p');
        body.append(paragraph1);
        paragraph1.append("Клавиатура создана в операционной системе iOS");
        
        const paragraph2 = document.createElement('p');
        body.append(paragraph2);
        paragraph2.append("Для переключения языка комбинация: левыe command + alt");
    }
  
    createKeys(lang) {
        const keyboard = document.querySelector('.keyboard');
        let arr = [];
        for(let i = 0; i < this.lang.length; i++) {
            const keyDiv = document.createElement('div');
            keyboard.append(keyDiv);
            keyDiv.setAttribute('id', `${idArr[i]}`);
            keyDiv.classList.add('keyboard-key');
            if (this.lang[i] == 'Backspace' || this.lang[i] == 'Tab' || this.lang[i] == 'Capslock' ||
                this.lang[i] == 'Shift' || this.lang[i] == 'Enter' || this.lang[i] == 'command') {
                keyDiv.classList.add('wide');
                if (this.lang[i] == 'Tab') {
                    keyDiv.classList.add('capslock');
                }
                if(this.lang[i] == 'Shift' || this.lang[i] == ' Shift') {
                    keyDiv.classList.add('shift');
                }
            } 
                
                if(this.lang[i] !== 'Backspace' && this.lang[i] !== 'Capslock' && this.lang[i] !== 'Shift' &&
                 this.lang[i] !== 'Enter' && this.lang[i] !== ' Shift' && this.lang[i] !== 'Ctrl' &&
                  this.lang[i] !== 'Win' && this.lang[i] != 'Del' && this.lang[i] !== 'Alt' && this.lang[i] != 'TAB') {
                    keyDiv.classList.add('letters');
                }
                if (this.lang[i] == '') {
                    keyDiv.classList.add('keyboard-space');
                }
                keyDiv.append(`${lang[i]}`);
                arr.push(keyDiv);
                if(this.lang[i] == 'Backspace' || this.lang[i] == 'Enter' || this.lang[i] == ' Shift') {
                    const breakDiv = document.createElement('div');
                    breakDiv.classList.add('break');
                    arr.push(breakDiv);
                }
            };
            return arr;
        }

  }
  let wrapper = new Keyboard();
  wrapper.createWrapper();
  wrapper.createKeys(KeyboardEN);

  let textarea = document.querySelector('.textarea');

  document.addEventListener('keydown', (event) => {
      console.log(event.code);
    if(event.code) {
        if(event.code !== 'CapsLock') {
            document.getElementById(`${event.code}`).classList.add('active');
        } 
        let e = event.code;
        if (e == 'Enter') {
            textarea.textContent += `\n`;
        } else if(e == 'Tab') {
            event.preventDefault();
            textarea.textContent += '   ';
            
        } else if(e == 'Space') {
            textarea.textContent += ' ';
        } else if(e != 'Backspace' && e != 'CapsLock' &&  e != 'ShiftLeft' && e != 'ShiftRight' &&
        e != 'ControlLeft' && e != 'MetaLeft' && e != 'MetaRight' && e != 'AltLeft' && e != 'AltRight'){
            textarea.textContent += document.getElementById(`${e}`).textContent;
        }
    } 

    if(event.code == 'CapsLock') {
        document.getElementById('CapsLock').classList.toggle('active-caps');
        keyboardWrapper.classList.add('caps');
        wrapper.createKeys(KeyboardRU);
        
    }
    if(event.code == 'Backspace') {
        let content = textarea.textContent.toString();
        let arr = content.split('');
        arr.pop();
        let resultArr = arr.join('');
        textarea.textContent = `${resultArr}`;
    }
});

document.addEventListener('keyup', (event) => {
    if(event.code != 'CapsLock') {
        console.log('remove')
        document.getElementById(`${event.code}`).classList.remove('active');
    } 
    
    if(event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        
        if (keyboardWrapper.classList.contains('caps')) {
            keyboardWrapper.classList.remove('caps');
            if(body.classList.contains('RU')) {
                keyboardWrapper.innerHTML = ``;
                keyboardWrapper.append(createWrapper(createKeys(KeyboardRU)));
            } else {
                keyboardWrapper.innerHTML = ``;
                keyboardWrapper.append(createWrapper(createKeys(KeyboardEN)));
            }
            document.getElementById('CapsLock').classList.toggle('active-caps');
            let lettersKey = document.querySelectorAll('.letters');
            changeRegistr(lettersKey);
        } else {
            if(body.classList.contains('RU')) {
                keyboardWrapper.innerHTML = ``;
                keyboardWrapper.append(createWrapper(createKeys(KeyboardRU)));
            } else {
                keyboardWrapper.innerHTML = ``;
                keyboardWrapper.append(createWrapper(createKeys(KeyboardEN)));
            }
        }
        typeText();
    } 
});

function typeText() {
    let keyboardKey = document.querySelectorAll('.keyboard-key');
    let textarea = document.querySelector('.textarea');
    keyboardKey.forEach(k_key => {
        k_key.addEventListener('click', () => {
            if (k_key.classList.contains('letters')) {
                textarea.textContent += k_key.textContent;
            }
            if (k_key.textContent == 'Enter') {
                textarea.textContent += `\n`;
            } else if (k_key.textContent == 'TAB') {
                textarea.textContent += '    ';
            } else if(k_key.textContent == '') {
                textarea.textContent += ' ';
            }
        })
    })
}