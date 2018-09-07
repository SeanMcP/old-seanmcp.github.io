// HTML elements

const body = document.querySelector('body')
const root = document.getElementById('root')

const main = document.createElement('main')
const nav = document.createElement('nav')

root.appendChild(main)
root.appendChild(nav)

// Variables

const getHash = () => window.location.hash.slice(1)
const hash = getHash()

// Site building

const writeMarkdown = () => {
    const hash = getHash()
    fetch(`../md/${hash ? hash : 'home'}.md`)
        .then(res => res.text())
        .then(res => main.innerHTML = marked(res))
}

writeMarkdown(hash)
writeNavOptions(nav)

// Set active button on load
if (hash.length) {
    body.classList.add(hash)
    document.querySelector(`a[href='#${hash}']`)
        .classList.add('active', hash)
} else {
    body.classList.add('home')
    document.querySelector(`a[href='#home']`)
        .classList.add('active', 'home')
}


window.onhashchange = () => {
    writeMarkdown()
    body.removeAttribute('class')
    body.classList.add(getHash())
}