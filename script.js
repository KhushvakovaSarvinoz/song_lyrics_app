// VARIABLES
const form =document.getElementById("form");
const search =document.getElementById("search");
const result =document.getElementById("result");

const apiURL = "http://api.lyrics.ovh";

//GET INPUT VALUE
form.addEventListener("submit", e =>{
    e.preventDefault();
    let searchValue = search.value.trim();

    if(!searchValue){
        alert("Nothing to search")
    } else{
        beginSearch(searchValue);
    }
})

// CREATE SEARCH FUNCTION  
async function beginSearch(searchValue){
const searchResult = await fetch('${apiURL}/suggest/${searchValue}');
const data = await searchResult.json();

displayData(data);
}