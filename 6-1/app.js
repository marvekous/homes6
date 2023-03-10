const html = document.getElementById('list')
const button = document.getElementById('btn')
const input = document.getElementById('input')

button.addEventListener('click',() =>{
const getData = async () =>{
    const dataEl = await fetch('https://jsonplaceholder.typicode.com/posts')
    const element = await dataEl.json()
    const filter = element.filter((el) => el.userId == input.value)
    const maps = filter.map((el)=>{
        return  `<div class = "elm"><p>User id:${el.userId}</p><p>Id:${el.id}</p><p>${el.title}</p><p>${el.body}</p></div>`
    })
    html.innerHTML = maps.join('')
   
}
getData()
})