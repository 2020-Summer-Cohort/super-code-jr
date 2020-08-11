
const createEventListeners = () =>{
const eventJason = document.getElementById("jason")
eventJason.addEventListener("mouseover", () =>{
    renderJason()
})
const eventMiles = document.getElementById("miles")
eventMiles.addEventListener("mouseover", () =>{
    renderMiles()
})
const eventTrey = document.getElementById("trey")
eventTrey.addEventListener("mouseover", () =>{
    renderTrey()
})
const eventKenny = document.getElementById("kenny")
eventKenny.addEventListener("mouseover", () =>{
    renderKenny()
})
const eventSarah = document.getElementById("sarah")
eventSarah.addEventListener("mouseover", () =>{
    renderSarah()
})
const eventJd = document.getElementById("jd")
eventJd.addEventListener("mouseover", () =>{
    renderJd()
})
}

createEventListeners()

const renderJason = () =>{
const selectDevBox = document.querySelector(".developer-display")
selectDevBox.innerHTML= `            
<container class="developer-img-container">
<img class="developer-img" src="images/jason.png">
</container>
<section class="developer-info-box">
    <a class="bio-anchors" href="http://jgibson37.github.io">Jason Gibson's Portfolio</a>
    <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">Jason Gibson's LinkedIn</a>
    <p class="bio-info">Strengths:</p>
    <ul>
      <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000</div> </span></li>
      <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000</div></span></li>
      <li><span class="skill-span"> CSS: <div class="skill-bar-3">00000000000</div></span></li>
      <li><span class="skill-span"> JS: <div class="skill-bar-4">00000000000000</div></span></li>
    </ul>
    <p class="bio-info">Weakness: Dank memes</p>
    <p class="bio-info">
        Gamer, Memer, laid backer, Go with the flower.
    </p>`
}
const renderMiles = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <container class="developer-img-container">
    <img class="developer-img" src="images/miles.png">
    </container>
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://milesshank.github.io">Miles Shank's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/miles-shank">Miles Shank's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">00000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">00000000000</div></span></li>
          <li><span class="skill-span"> JS: <div class="skill-bar-4">000000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: Spiced Peaches</p>
        <p class="bio-info">
            Artist, Developer, Cosplayer, Creator, ask me about Sonic the Hedgehog.
        </p>`
}

const renderKenny = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `
    <container class="developer-img-container">            
    <img class="developer-img" src="images/kw.png">
    </container>
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://kennycreates.github.io">Kenny Williams's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/kenny-williams-c">Kenny Williams's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> ui/ux: <div class="skill-bar-1">0000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">00000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">0000000000000</div></span></li>
          <li><span class="skill-span"> JS: <div class="skill-bar-4">0000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: Sneakers and Fashion</p>
        <p class="bio-info">
            Creative, Frontend Formulator, Master Juicer & Smoothie Maker
        </p>`
}

const renderTrey = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <container class="developer-img-container">
    <img class="developer-img" src="images/trey.png">
    </container>
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://joetreygrace.github.io">Trey Grace's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/trey-grace">Trey Grace's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul class="skill-ul">
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">00000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">00000000000</div></span></li>
          <li><span class="skill-span"> JS: <div class="skill-bar-4">000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: Krispy Kreme Donuts</p>
        <p class="bio-info">
            API Specialist, Dad Joke Aficionado, Supreme Leader Smoke... Meats
        </p>`
}

const renderSarah = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `  
    <container class="developer-img-container">          
    <img class="developer-img" src="images/sarah.png">
    </container>
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://sgreene807.github.io">Sarah Greene's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/greene-sarah">Sarah Greene's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">00000000000</div></span></li>
          <li><span class="skill-span"> JS: <div class="skill-bar-4">000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: Graeter's Ice Cream</p>
        <p class="bio-info">
            Developer, Explorer, Inception Specialist, Doolittle has nothing on me ;-)
        </p>`
}

const renderJd = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `           
    <container class="developer-img-container"> 
    <img class="developer-img" src="images/jd.png">
    </container>
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://patchesohoolihan.github.io">JD King's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/gale-king">JD King's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">0000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000</div></span></li>
          <li><span class="skill-span"> JS: <div class="skill-bar-4">000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: Bees! Not the Bees!</p>
        <p class="bio-info">
            Back-End Developer, LOTR Savant, Dr. Grant to your Jurassic Park.
        </p>`
}