let toggleButton = document.getElementById('toggle')
let body = document.getElementById('body')
let logo = document.getElementById('logo')
let navBar = document.getElementById('navBar')
let htmlExperience = document.getElementById('html')
let cssExperience = document.getElementById('css')
let jsExperience = document.getElementById('js')
let bootstrapExperience = document.getElementById('bootstrap')
let intro = document.getElementById('intro')


toggleButton.addEventListener("click", ()=>{
    if(toggleButton.innerHTML == `<i class="fa-regular fa-sun"></i>`){
    toggleButton.innerHTML = `<i class="fa-regular fa-moon"></i>`
    toggleButton.style.backgroundColor = "rgb(30,48,80)"
    body.style.backgroundColor = "white"
    logo.setAttribute('src', '/image/black logo.svg')
    body.style.color = "white"
    }
    else{
        toggleButton.innerHTML = `<i class="fa-regular fa-sun"></i>`
        toggleButton.style.backgroundColor = "yellow"
        body.style.backgroundColor = "rgba(2, 0, 0, 0.699)"
        logo.setAttribute('src', '/image/white logo.svg')
    }
})


window.addEventListener("scroll", ()=>{
    if(window.scrollY > intro.offsetHeight - intro.offsetTop){
        htmlExperience.innerText = `1 year experience`
        bootstrapExperience.innerText = `1 month experience`
        cssExperience.innerText = `1 year experience`
        jsExperience.innerText = `4 months experience`
    }
    else{
        htmlExperience.innerText = ""
        cssExperience.innerText = ""
        bootstrapExperience.innerText = ""
        jsExperience.innerText = ""
    }


})