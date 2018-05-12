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
    navOptions.forEach(option => {
        const anchor = document.createElement('a');
        anchor.classList.add('option');

        const icon = document.createElement('i');
        icon.classList.add('fas', `fa-${option.icon}`, 'fa-2x');
        anchor.appendChild(icon);

        const title = document.createElement('div');
        title.textContent = option.text;
        anchor.appendChild(title);

        anchor.href = option.target;
        parentElement.appendChild(anchor);
    })
};