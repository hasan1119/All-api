// TODO: TASK - 1


/* var api = "https://jsonplaceholder.typicode.com/comments"
const loadData = () => {
    fetch(api)
        .then(res => res.json())
        .then(data => console.log(data))
}
document.getElementById('btn').addEventListener('click', loadData) */



// TODO: TASK - 2
/* 
var api = "https://jsonplaceholder.typicode.com/comments"
const loadData = () => {
    fetch(api)
        .then(res => res.json())
        .then(data => showData(data))
}
document.getElementById('btn').addEventListener('click', loadData)


function showData(comments) {
    const section = document.getElementById('secition')

    comments.forEach(comment => {
        console.log(comment);
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <p>${comment.id} . ${comment.body.slice(0, 50)}</p>
            <p>Name: ${comment.name.slice(0, 10)}</p>
            <p>Email: ${comment.email}</p>
        </div>
         </div>`

        section.appendChild(div)
    })
} */


// TODO: TASK - 3

/* 
var api = "https://jsonplaceholder.typicode.com/comments"
const loadData = () => {
    fetch(api)
        .then(res => res.json())
        .then(data => showData(data))
}



function showData(comments) {
    const section = document.getElementById('secition')

    comments.forEach(comment => {

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <p>${comment.id} . ${comment.body.slice(0, 50)}</p>
            <p>Name: ${comment.name.slice(0, 10)}</p>
            <p>Email: ${comment.email}</p>
            <p>Email: ${comment.id}</p>
        </div>
         </div>`

        section.appendChild(div)
    })
}
 */
// TODO: TASK - 4 has been completed;




// TODO: TASK - 5

var api = "https://jsonplaceholder.typicode.com/comments"
const loadData = () => {
    fetch(api)
        .then(res => res.json())
        .then(data => showData(data))
}



function showData(comments) {
    const section = document.getElementById('secition')

    comments.forEach(comment => {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <p>${comment.id} . ${comment.body.slice(0, 50)}</p>
            <p>Name: ${comment.name.slice(0, 10)}</p>
            <p>Email: ${comment.email}</p>
            <p>id: ${comment.id}</p>
            <button onclick='showDetails(${comment.id})' class="btn btn-primary">Details</button>
        </div>
         </div>`

        section.appendChild(div)
    })
}


function showDetails(id) {
    var dynamicApi = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(dynamicApi)
        .then(res => res.json())
        .then(data => showCommentDetail(data))

}



function showCommentDetail(id) {

    console.log(id);
    const details = document.getElementById('show-detail')
    // console.log(details);
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
        <p>Post Id: ${id.postId}</p>
        <p>${id.id} . ${id.body}</p>
        <p>Name: ${id.name}</p>
        <p>Email: ${id.email}</p>
    </div>
     </div>`
    details.innerHTML = ''
    details.appendChild(div)
    // console.log(div);
}