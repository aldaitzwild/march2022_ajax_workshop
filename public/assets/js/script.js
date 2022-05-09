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

    //TODO 2 : Call the route 'api/articles/search' to get the list of the articles targeted by the search
});