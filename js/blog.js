// Declare

function goFetch(url) {
    fetch(`./md/${url}.md`)
        .then(function (res) {
            return res.text()
        })
        .then(function (res) {
            renderPost(res)
        })
        .catch(function (err) {
            console.log(err)
        })
}

function renderPost(markdown) {
    var htmlString = marked(markdown)
    var section = document.createElement('section')
    section.id = 'article-container'

    var overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.onclick = closeArticle

    var article = document.createElement('article')

    var header = document.createElement('header')
    header.appendChild(createCloseArticleButton())
    article.appendChild(header)

    nodifyString(htmlString).forEach(function (node) {
        article.appendChild(node)
    })

    var footer = document.createElement('footer')
    var ps = document.createElement('p')
    ps.textContent = '(SDG)'
    footer.appendChild(ps)
    article.appendChild(footer)

    section.appendChild(article)
    section.appendChild(overlay)
    document.body.appendChild(section)
}

function createCloseArticleButton() {
    var button = document.createElement('button')
    button.type = 'button'
    button.textContent = '‹ Back'
    button.onclick = closeArticle
    return button
}

function closeArticle() {
    var container = document.getElementById('article-container')
    container.classList.add('exiting')
    setTimeout(function () {
        container.parentElement.removeChild(container)
        location = '#back'
    }, 200)
}

function checkHashAndFetch() {
    var hash = location.hash.slice(1)
    if (hash && hash !== 'back') {
        goFetch(hash)
    }
}

// On load

checkHashAndFetch()

window.onhashchange = checkHashAndFetch