const navOptions = [
    {
        text: 'Home',
        icon: 'home',
        target: '/'
    },
    {
        text: 'About',
        icon: 'book',
        target: '/about'
    },
    {
        text: 'Work',
        icon: 'briefcase',
        target: '/work'
    },
    {
        text: 'Contact',
        icon: 'paper-plane',
        target: '/contact'
    },
];

const writeNavOptions = (parentElement) => {
    navOptions.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');

        const icon = document.createElement('i');
        icon.classList.add('fas', `fa-${option.icon}`, 'fa-lg');
        button.appendChild(icon);

        const title = document.createElement('div');
        title.textContent = option.text;
        button.appendChild(title);

        button.addEventListener('click', () => console.log(option.target));
        parentElement.appendChild(button);
    })
}