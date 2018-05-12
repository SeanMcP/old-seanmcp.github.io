// HTML elements

const root = document.getElementById('root');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

// Variables

const hash = window.location.hash;

// Site building

main.classList.add(hash.slice(1));

writeSection(main);
writeNavOptions(nav);

document.querySelector(`a[href='${hash}']`).classList.add('active');

window.onhashchange = () => {
    writeSection(main);
    main.removeAttribute('class');
    main.classList.add(window.location.hash.slice(1));
};