var siteContainer = document.getElementById('site')

var socials = [{
        icon: 'fa-github',
        link: 'https://github.com/seanmcp',
        name: 'GitHub'
    },
    {
        icon: 'fa-medium-m',
        link: 'https://medium.com/@seanmcp',
        name: 'Medium'
    },
    {
        icon: 'fa-twitter',
        link: 'https://twitter.com/mcpcodes',
        name: 'Twitter'
    },
    {
        icon: 'fa-linkedin-in',
        link: 'https://linkedin.com/in/seanmcp',
        name: 'LinkedIn'
    }
]

var socialsContainer = document.createElement('footer')
siteContainer.appendChild(socialsContainer)

socials.forEach(function (platform) {
    var anchor = document.createElement('a')
    anchor.target = '_blank'
    anchor.rel = 'noopener noreferrer'
    anchor.title = `External link to my ${platform.name} account`
    anchor.href = platform.link
    anchor.classList.add('social-link')

    var icon = document.createElement('i')
    icon.classList.add(
        'fab',
        'fa-lg',
        platform.icon,
        platform.name.toLowerCase(),
        'social-icon'
    )

    anchor.appendChild(icon)
    socialsContainer.appendChild(anchor)
})