function updateHeadline(title, picture, content) {
    document.getElementById('headlineTitle').innerHTML = title;
    document.getElementById('headlinePicture').setAttribute('src', picture);
    document.getElementById('headlineContent').innerHTML = content;
}

document.getElementById('changeHeadlineButton').addEventListener('click', function () {
    fetch("api/articles/random")
    .then(response => response.json())
    .then(article => {
        console.log(article);
        updateHeadline(article.title, article.picture, article.content);
    })
    ;
});

document.getElementById('searchHeadline').addEventListener('input', function(e) {
    //Here we get the value typed in the input
    let search = e.target.value;

    fetch('api/articles/search?search=' + search)
    .then(reponse => reponse.json())
    .then(articles => {
        const resultList = document.getElementById('resultList');
        resultList.innerHTML = '';

        for (const article of articles) {
            resultList.innerHTML += "<li><a href='/article?id=" + article.id + "'>" + article.title + "</a></li>";
        }
    })
    ;
});