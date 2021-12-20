//Gọi trực tiếp từ sự kiên Onclick trên HTML
function sayHello(){
    console.log('Hello, world!');
}

//Gọi thông qua DOM từ ID trên HTML
document
    .getElementById('btnClickMe')
    .addEventListener('click', function (evt){
        console.log(this);
        console.log('Hello, world 2!');
    });

//Sử dụng arrow function => es6
document
    .getElementById('btnClickMe')
    .addEventListener('click', (evt) => {
        console.log(this);
        console.log(evt.target);
        console.log('Hello, world 3!')
    });
