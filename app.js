const html = document.getElementById('list')

const getData = async () =>{
    const dataEl = await fetch('https://jsonplaceholder.typicode.com/posts')
    const element = await dataEl.json()
    const filter = element.filter((el) => el.userId === 1)
    const maps = filter.map((el)=>{
        return  `<div class = "elm"><p>User id:${el.userId}</p><p>Id:${el.id}</p><p>${el.title}</p><p>${el.body}</p></div>`
    })
    html.innerHTML = maps.join('')
    console.log(element);
}
getData()