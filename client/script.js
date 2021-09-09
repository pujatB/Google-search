const form = document.getElementById('submit')
form.addEventListener('click', showResults())

function showResults(){
    fetch('http://localhost:3001/food')
    .then(r => {
        console.log(r)
        const foodResults = r.text()
        console.log(foodResults)
        return foodResults
    })
    .then(foodResults => {
        document.querySelector('h1').innerHTML = foodResults
    })
}