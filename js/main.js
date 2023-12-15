"use strict"


const b1 = document.getElementById('b1'),
    b2 = document.getElementById('b2'),
    b3 = document.getElementById('b3'),
    b4 = document.getElementById('b4'),
    b5 = document.getElementById('b5'),
    b6 = document.getElementById('b6'),
    b7 = document.getElementById('b7'),
    b8 = document.getElementById('b8'),
    b9 = document.getElementById('b9'),
    print = document.getElementById('print'),
    warner = document.getElementById('warner'),
    playUiSection = document.querySelector('.play-ui'),
   allMainBtns = playUiSection.querySelectorAll('button');





let number = 1;

function resetFunc () {
    location.reload();
    for (const button of allMainBtns) {
        button.textContent = '';
    }
}




const myFunc1 = () => {
    if (number === 1) {
        b1.textContent = 'X'
        b1.disabled = true
       number = 0;
    } else {
        b1.textContent = 'O'
        b1.disabled = true
        number = 1;
    }
}


const myFunc2 = () => {
    if (number === 1) {
        b2.textContent = 'X'
        b2.disabled = true
       number = 0;
    } else {
        b2.textContent = 'O'
        b2.disabled = true
        number = 1;
    }
}


const myFunc3 = () => {
    if (number === 1) {
        b3.textContent = 'X'
        b3.disabled = true
        number = 0;
    } else {
        b3.textContent = 'O'
        b3.disabled = true
        number = 1;
    }
}

const myFunc4 = () => {
    if (number === 1) {
        b4.textContent = 'X'
        b4.disabled = true
        number = 0;
    } else {
        b4.textContent = 'O'
        b4.disabled = true
        number = 1;
    }
}


const myFunc5 = () => {
    if (number === 1) {
        b5.textContent = 'X'
        b5.disabled = true
        number = 0;
    } else {
        b5.textContent = 'O'
        b5.disabled = true
        number = 1;
    }
}


const myFunc6 = () => {
    if (number === 1) {
        b6.textContent = 'X'
        b6.disabled = true
        number = 0;
    } else {
        b6.textContent = 'O'
        b6.disabled = true
        number = 1;
    }
}


const myFunc7 = () => {
    if (number === 1) {
        b7.textContent = 'X'
        b7.disabled = true
        number = 0

    } else {
        b7.textContent = 'O'
        b7.disabled = true
        number = 1;
    }
}


const myFunc8 = () => {
    if (number === 1) {
        b8.textContent = 'X'
        b8.disabled = true
        number = 0;
    } else {
        b8.textContent = 'O'
        b8.disabled = true
        number = 1;
    }
}

const myFunc9 = () => {
    if (number === 1) {
        b9.textContent = 'X'
        b9.disabled = true
        number = 0;

    } else {
        b9.textContent = 'O'
        b9.disabled = true
        number = 1;
    }
}





function myFunc () {
    if (number === 1) {
        warner.innerHTML = "O'yinchi X ni gali";
    }
    else {
        warner.innerHTML = "O'yinchi O ni gali";
    }


    if ( b1.textContent === 'X' && b2.textContent === 'X' && b3.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b4.disabled = true
        b5.disabled = true
        b6.disabled = true
        b7.disabled = true
        b8.disabled = true
        b9.disabled = true


        b1.style.color = 'blue'
        b2.style.color = 'blue'
        b3.style.color = 'blue'
    } else if (b1.textContent === 'X' && b4.textContent === 'X' && b7.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b2.disabled = true
        b3.disabled = true
        b5.disabled = true
        b6.disabled = true
        b8.disabled = true
        b9.disabled = true


        b1.style.color = 'blue'
        b4.style.color = 'blue'
        b7.style.color = 'blue'
    } else if (b1.textContent === 'X' && b5.textContent === 'X' && b9.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b2.disabled = true
        b3.disabled = true
        b4.disabled = true
        b6.disabled = true
        b8.disabled = true
        b9.disabled = true


        b1.style.color = 'blue'
        b5.style.color = 'blue'
        b9.style.color = 'blue'
    }

    else if (b3.textContent === 'X' && b6.textContent === 'X' && b9.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b4.disabled = true
        b5.disabled = true
        b7.disabled = true
        b8.disabled = true


        b3.style.color = 'blue'
        b6.style.color = 'blue'
        b9.style.color = 'blue'
    }

    else if (b3.textContent === 'X' && b5.textContent === 'X' && b7.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b4.disabled = true
        b6.disabled = true
        b8.disabled = true
        b9.disabled = true


        b3.style.color = 'blue'
        b5.style.color = 'blue'
        b7.style.color = 'blue'
    }

    else if (b2.textContent === 'X' && b5.textContent === 'X' && b8.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b1.disabled = true
        b3.disabled = true
        b4.disabled = true
        b6.disabled = true
        b7.disabled = true
        b9.disabled = true


        b2.style.color = 'blue'
        b5.style.color = 'blue'
        b8.style.color = 'blue'
    }


    else if (b4.textContent === 'X' && b5.textContent === 'X' && b6.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        b7.disabled = true
        b8.disabled = true
        b9.disabled = true


        b4.style.color = 'blue'
        b5.style.color = 'blue'
        b6.style.color = 'blue'
    }



    else if (b7.textContent === 'X' && b8.textContent === 'X' && b9.textContent === 'X') {
        warner.innerHTML = '';
        print.textContent = "X o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        b4.disabled = true
        b5.disabled = true
        b6.disabled = true


        b7.style.color = 'blue'
        b8.style.color = 'blue'
        b9.style.color = 'blue'
    }



    if ( b1.textContent === 'O' && b2.textContent === 'O' && b3.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b4.disabled = true
        b5.disabled = true
        b6.disabled = true
        b7.disabled = true
        b8.disabled = true
        b9.disabled = true


        b1.style.color = 'blue'
        b2.style.color = 'blue'
        b3.style.color = 'blue'
    } else if (b1.textContent === 'O' && b4.textContent === 'O' && b7.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b2.disabled = true
        b3.disabled = true
        b5.disabled = true
        b6.disabled = true
        b8.disabled = true
        b9.disabled = true


        b1.style.color = 'blue'
        b4.style.color = 'blue'
        b7.style.color = 'blue'
    } else if (b1.textContent === 'O' && b5.textContent === 'O' && b9.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b2.disabled = true
        b3.disabled = true
        b4.disabled = true
        b6.disabled = true
        b8.disabled = true
        b9.disabled = true


        b1.style.color = 'blue'
        b5.style.color = 'blue'
        b9.style.color = 'blue'
    }

    else if (b3.textContent === 'O' && b6.textContent === 'O' && b9.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b4.disabled = true
        b5.disabled = true
        b7.disabled = true
        b8.disabled = true


        b3.style.color = 'blue'
        b6.style.color = 'blue'
        b9.style.color = 'blue'
    }

    else if (b3.textContent === 'O' && b5.textContent === 'O' && b7.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b4.disabled = true
        b6.disabled = true
        b8.disabled = true
        b9.disabled = true


        b3.style.color = 'blue'
        b5.style.color = 'blue'
        b7.style.color = 'blue'
    }

    else if (b2.textContent === 'O' && b5.textContent === 'O' && b8.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b1.disabled = true
        b3.disabled = true
        b4.disabled = true
        b6.disabled = true
        b7.disabled = true
        b9.disabled = true


        b2.style.color = 'blue'
        b5.style.color = 'blue'
        b8.style.color = 'blue'
    }


    else if (b4.textContent === 'O' && b5.textContent === 'O' && b6.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        b7.disabled = true
        b8.disabled = true
        b9.disabled = true


        b4.style.color = 'blue'
        b5.style.color = 'blue'
        b6.style.color = 'blue'
    }



    else if (b7.textContent === 'O' && b8.textContent === 'O' && b9.textContent === 'O') {
        warner.innerHTML = '';
        print.textContent = "O o'yinchi yutdi!"

        b1.disabled = true
        b2.disabled = true
        b3.disabled = true
        b4.disabled = true
        b5.disabled = true
        b6.disabled = true


        b7.style.color = 'blue'
        b8.style.color = 'blue'
        b9.style.color = 'blue'
    }


    else if ((b1.textContent === 'X' || b1.textContent === 'O') && (b2.textContent === 'X'
            || b2.textContent === 'O') && (b3.textContent === 'X' || b3.textContent === 'O') &&
        (b4.textContent === 'X' || b4.textContent === 'O') && (b5.textContent === 'X' ||
            b5.textContent === 'O') && (b6.textContent === 'X' || b6.textContent === 'O') &&
        (b7.textContent === 'X' || b7.textContent === 'O') && (b8.textContent === 'X' ||
            b8.textContent === 'O') && (b9.textContent === 'X' || b9.textContent === 'O')){
        warner.innerHTML = '';
        print.textContent ='Durrang!'
    }




}












