const submit = document.getElementById('googsearch')
const searchBar = document.getElementById('search')
const paraValue = document.getElementById("para")
const ul = document.querySelector("ul")
const newpara = document.getElementById("newpara")


// document.getElementById("searchHTML").addEventListener("DOMContentLoaded", function(event) {     
//     newpara.style.backgroundColor = "blue";
//     newpara.textContent = window.location.search;
//     newpara.textContent = localStorage.getItem("liValue");
//  });


function getResults() {
    let url = `http://localhost:3000/${searchBar.value}`
    fetch(url)
        .then(r => {
            let data = r.text();
            console.log(Array.isArray(data))
            return data;
        })
        .then(data => {
            let newList = document.createElement('li')
            newList.textContent = data
            console.log(newList)
            ul.append(newList)
            // liValue =document.querySelector("li").value
            // localStorage.setItem("liValue",liValue);
            // return data;
            //paraValue.textContent = data;  
        })


}

submit.addEventListener('click', e => {
    e.preventDefault()
    getResults();
})


