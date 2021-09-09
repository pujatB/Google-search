async function showResults(){
    let url = `http://localhost:3000/${searchBar.value}`
    console.log(url)
    const response = await fetch(url)
    const link = await response.json();
    response.send(link)
    console.log(link)
}


const submit = document.getElementById('googsearch')
const searchBar = document.getElementById('search')

function message(){
    const para = document.getElementById('para')
    para.textContent = searchBar.value
    console.log(searchBar.value)
}

submit.addEventListener('click', e=>{
    e.preventDefault();
    message();
    showResults();
})

//const arr = []
//searchBar.addEventListener('keyup', {
//})



// add an event listener to empty the array after each search
/*
const foodResults = r.text()
console.log(foodResults)
return foodResults
document.querySelector('h1').innerHTML = foodResults
} */
