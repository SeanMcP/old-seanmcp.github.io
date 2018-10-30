// Declare

function goFetch(url) {
    fetch(`../md/${url}.md`)
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

    var article = document.querySelector('article')

    nodifyString(htmlString).forEach(function (node) {
        article.appendChild(node)
    })

    var footer = document.createElement('footer')
    var ps = document.createElement('p')
    ps.textContent = '(SDG)'
    footer.appendChild(ps)
    article.appendChild(footer)
}

function checkHashAndFetch() {
    var hash = location.hash.slice(1)
    console.log(hash)
    if (hash && hash !== 'back') {
        goFetch(hash)
    }
}

// On load

checkHashAndFetch()

window.onhashchange = checkHashAndFetch