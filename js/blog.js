// Declare

var hash = location.hash.slice(1)

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
    var article = document.createElement('article')
    article.appendChild(createCloseArticleButton())
    nodifyString(htmlString).forEach(function (node) {
        article.appendChild(node)
    })
    document.body.appendChild(article)
}

function createCloseArticleButton() {
    var button = document.createElement('button')
    button.type = 'button'
    button.onclick = closeArticle
    button.textContent = 'Close'
    return button
}

function closeArticle() {
    var article = document.querySelector('article')
    article.classList.add('exiting')
    setTimeout(function () {
        location = '/thoughts'
    }, 1000)
}

// On load

if (hash) {
    goFetch(hash)
}

window.onhashchange = function () {
    hash = location.hash.slice(1)
    if (hash) {
        goFetch(hash)
    }
}