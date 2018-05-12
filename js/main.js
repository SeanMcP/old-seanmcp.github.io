// HTML elements

const main = document.querySelector('main');
const nav = document.querySelector('nav');

// Site building

writeSection(main);
writeNavOptions(nav);

window.onhashchange = () => writeSection(main);