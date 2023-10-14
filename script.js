// VARIABLES
const form =document.getElementById("form");
const search =document.getElementById("search");
const result =document.getElementById("result");

const apiURL = "http://api.lyrics.ovh";

//Get input value
form.addEventListener("submit", e =>{
    e.preventDefault();
    let searchValue = search.value.trim();

    if(!searchValue){
        alert("Nothing to search")
    } else{
        beginSearch(searchValue);
    }
})