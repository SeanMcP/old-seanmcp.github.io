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

const nodifyString = (htmlString) => {
    const byLine = htmlString.split('\n')

    return byLine.reduce((acc, line) => {
        if (!line.length) return acc

        const tagMatch = line.match(/\<(\w+)(?:\s*|\>)?/g)[0]
        const tag = tagMatch.slice(1, tagMatch.length - 1)

        const textMatch = line.match(/\>(.*?)\</g)[0]
        const text = textMatch.slice(1, textMatch.length - 1)

        const element = document.createElement(tag)
        const textNode = document.createTextNode(text)
        element.appendChild(textNode)

        return acc.concat(element)
    }, [])
}

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
            // const parser = new DOMParser()
            // const html = parser.parseFromString(marked(res), 'text/html')
            // console.log(html.firstChild.lastChild)
            console.log(nodifyString(marked(res)))
            console.log(marked(res))
            // console.log(typeof marked(res))
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