document.getElementById('btn').addEventListener('click', randomUsr)


function randomUsr() {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => getUsr(data))
}

getUsr = (users) => {
    var section = document.querySelector('#section')
    const div = document.createElement('div')

    for (user of users.results) {
        section.innerHTML = ``
        div.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${user.picture.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name.title} ${ user.name.first} ${user.name.last}</h5>
      <p> Phone: ${user.phone}</p>
      <p> Email: ${user.email}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `
        console.log(user);
    }
    section.appendChild(div)

}