// HTML elements

const body = document.querySelector('body')
const root = document.getElementById('root')

const main = document.createElement('main')
const nav = document.createElement('nav')

root.appendChild(main)
root.appendChild(nav)

// Variables

const unknown = '# Uh oh! Something went wrong\n\nThere doesn\'t seem to be a page at this location. [Go back to home](#home)?'

const getHash = () => window.location.hash.slice(1)
const hash = getHash()

// Site building

const writeMarkdown = () => {
    const hash = getHash()
    main.style.opacity = 0
    fetch(`../md/${hash ? hash : 'home'}.md`)
        .then(res => {
            if (res.ok) {
                return res.text()
            } else {
                throw Error
            }
        })
        .then(res => {
            main.innerHTML = marked(res)
            main.style.opacity = 1
        })
        .catch(() => {
            main.innerHTML = marked(unknown)
            main.style.opacity = 1
        })
}

const setActiveNav = () => {
    const hash = getHash()
    if (hash.length) {
        body.classList.add(hash)
        const link = document.querySelector(`a[href='#${hash}']`)
        if (link) link.classList.add('active', hash)
    } else {
        body.classList.add('home')
        document.querySelector(`a[href='#home']`)
            .classList.add('active', 'home')
    }
}

writeMarkdown()
writeNavOptions(nav)
setActiveNav()


window.onhashchange = () => {
    writeMarkdown()
    setActiveNav()
    body.removeAttribute('class')
    body.classList.add(getHash())
}