// https://api.kanye.rest
document.getElementById('btn').addEventListener('click', loadKanye)

function loadKanye() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(info => showKanye(info))
}

showKanye = (kanyeQuote) => {
    var section = document.querySelector('#section')
    section.innerText = kanyeQuote.quote;
}