const navOptions = [
    {
        text: 'Home',
        icon: 'home',
        target: '#home'
    },
    {
        text: 'About',
        icon: 'book',
        target: '#about'
    },
    {
        text: 'Work',
        icon: 'briefcase',
        target: '#work'
    },
    {
        text: 'Contact',
        icon: 'paper-plane',
        target: '#contact'
    },
];

const writeNavOptions = (parentElement) => {
    const ul = document.createElement('ul');

    navOptions.forEach(option => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');

        const icon = document.createElement('i');
        icon.classList.add('fas', `fa-${option.icon}`, 'fa-2x');
        anchor.appendChild(icon);

        const title = document.createElement('div');
        title.textContent = option.text;
        anchor.appendChild(title);

        anchor.href = option.target;
        anchor.addEventListener('click', () => {
            parentElement.querySelectorAll('a')
                .forEach(child => child.removeAttribute('class'));
            anchor.classList.add('active', option.target.slice(1));
        });

        li.appendChild(anchor);
        ul.appendChild(li);
    });

    parentElement.appendChild(ul);
};