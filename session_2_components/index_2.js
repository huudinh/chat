const app = document.getElementById('app');
const clocks = [];

const btnAddMore = document.createElement('button');
btnAddMore.classList.add('control');
btnAddMore.innerHTML = 'Add';
btnAddMore.addEventListener('click', () => {
    const clock = new Clock();
    clocks.push(clock);
    app.appendChild(clock.render());
});

const btnStartAll = document.createElement('button');
btnStartAll.classList.add('control');
btnStartAll.innerHTML = 'Start all';
btnStartAll.addEventListener('click', () => {
    clocks.forEach(clock =>{
        clock.start();
    })
});

const title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Đồng Hồ Bấm Giờ';

app.appendChild(title);
app.appendChild(btnAddMore);
app.appendChild(btnStartAll);