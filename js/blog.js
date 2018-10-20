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
    var main = document.createElement('main')
    main.id = 'article-container'
    var overlay = document.createElement('div')
    overlay.classList.add('overlay')
    overlay.onclick = closeArticle
    var article = document.createElement('article')
    article.appendChild(createCloseArticleButton())
    nodifyString(htmlString).forEach(function (node) {
        article.appendChild(node)
    })
    main.appendChild(article)
    main.appendChild(overlay)
    document.body.appendChild(main)
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