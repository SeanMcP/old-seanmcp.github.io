var siteContainer = document.getElementById('site')

var links = [{
        href: 'https://github.com/seanmcp',
        icon: 'fa-github',
        isBrand: true,
        name: 'GitHub'
    },
    {
        href: 'https://medium.com/@seanmcp',
        icon: 'fa-medium-m',
        isBrand: true,
        name: 'Medium'
    },
    {
        href: 'https://twitter.com/mcpcodes',
        icon: 'fa-twitter',
        isBrand: true,
        name: 'Twitter'
    },
    {
        href: 'https://linkedin.com/in/seanmcp',
        icon: 'fa-linkedin-in',
        isBrand: true,
        name: 'LinkedIn'
    },
    {
        href: 'mailto:sean@seanmcp.com',
        icon: 'fa-paper-plane',
        name: 'email'
    }
]

var linksContainer = document.createElement('footer')
siteContainer.appendChild(linksContainer)

links.forEach(function (link) {
    var anchor = document.createElement('a')
    anchor.target = '_blank'
    anchor.rel = 'noopener noreferrer'
    anchor.title = `External link to ${link.name}`
    anchor.href = link.href
    anchor.classList.add(
        'footer-link',
        link.name.toLowerCase()
    )

    var icon = document.createElement('i')
    icon.classList.add(
        link.isBrand ? 'fab' : 'fas',
        link.icon,
        'fa-lg',
    )

    anchor.appendChild(icon)
    linksContainer.appendChild(anchor)
})