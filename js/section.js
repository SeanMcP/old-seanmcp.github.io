const writeSection = (parentElement) => {
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

    const location = window.location.hash.slice(1);
    const { heading, tagline, content, image } = copy[location || 'home'];

    const section = document.createElement('section');
    const article = document.createElement('article');

    const h1 = document.createElement('h1');
    h1.textContent = heading;
    article.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = tagline;
    article.appendChild(h2);

    content.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        article.appendChild(p);
    });

    section.appendChild(article);

    if (image.source) {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = image.source;
        img.alt = image.caption;
        img.style.height = `${img.height}px`;
        img.style.width = `${img.width}px`;
        console.log(img.width);
        console.log(img.height);
        figure.appendChild(img);

        const caption = document.createElement('figcaption');
        caption.textContent = image.caption;
        figure.appendChild(caption);

        section.appendChild(figure);
    }

    parentElement.appendChild(section);
};