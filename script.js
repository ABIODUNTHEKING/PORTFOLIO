//VARIABLES
let toggleButton = document.getElementById('toggle')
let person = document.getElementById('me')
let body = document.getElementById('body')
let logo = document.getElementById('logo')
let navBar = document.getElementById('navBar')
let navBarTwo = document.getElementById('navBarTwo')
let htmlExperience = document.getElementById('html')
let cssExperience = document.getElementById('css')
let jsExperience = document.getElementById('js')
let bootstrapExperience = document.getElementById('bootstrap')
let intro = document.getElementById('intro')
let tools = document.getElementById('tools')
let title = document.getElementById('title')
let listedTools = document.getElementById('listedTools')
let projects = document.getElementById('projects')
let contactForm = document.getElementById('contactForm')
let seeMoreButton = document.getElementById('seeMore')
let mode = localStorage.getItem('mode') 



//TOGGLE
changeAppMode(mode)
function changeAppMode(mode){
    let backgroundColor
    if(mode == 'dark'){
        backgroundColor = "rgba(2, 0, 0, 0.699)"
        toggleButton.innerHTML = `<i class="fa-regular fa-sun"></i>`
        toggleButton.style.backgroundColor = "yellow" 
        person.setAttribute('src', "/image/hi.png")
        body.style.backgroundColor = backgroundColor
        logo.setAttribute('src', '/image/white logo.svg')
        body.style.color = "white"
        intro.classList.remove("toggledIntro")
        tools.classList.remove("toggledTools")
        listedTools.classList.remove("toggledListedTools")
        title.classList.remove("toggledtitle")
        projects.classList.remove("toggledProject")
        contactForm.classList.remove("toggledContactForm")
        navBar.classList.remove('toggledNavBar')
        navBarTwo.classList.remove('toggledNavBar')
        seeMoreButton.classList.remove('toggledButton')
       
    }
    else{
        backgroundColor = 'rgba(255, 255, 255, 0.712)'
        toggleButton.innerHTML = `<i class="fa-regular fa-moon"></i>`
        toggleButton.style.backgroundColor = 'rgb(30,48,80)'
        person.setAttribute('src', "/image/white-hi.png")
        body.style.backgroundColor = backgroundColor
        logo.setAttribute('src', '/image/black logo.svg')
        intro.classList.add("toggledIntro")
        tools.classList.add("toggledTools")
        listedTools.classList.add("toggledListedTools")
        title.classList.add("toggledtitle")
        projects.classList.add("toggledProject")
        contactForm.classList.add("toggledContactForm")
        navBar.classList.add('toggledNavBar')
        navBarTwo.classList.add('toggledNavBar')
        seeMoreButton.classList.add('toggledButton')
        
    }
} 


toggleButton.addEventListener("click", ()=>{
    let mode = localStorage.getItem('mode')
    let currentMode = mode == 'dark' ? 'light' : 'dark'
    changeAppMode(currentMode)
    localStorage.setItem('mode', currentMode)
   
})





