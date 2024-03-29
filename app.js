const container = document.querySelector('.container');
const left = container.querySelector('.split.left');
const right = container.querySelector('.split.right');
const chooseOne = document.querySelector('.choose-one');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover_left');
    container.classList.add('hover_left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover_left');
    container.classList.remove('hover_left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover_right');
    container.classList.add('hover_right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover_right');
    container.classList.remove('hover_right');
});
