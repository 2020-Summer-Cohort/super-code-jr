



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
<img class="developer-img" src="images/jason.png">
<section class="developer-info-box">
    <a class="bio-anchors" href="http://jgibson37.github.io">Jason Gibson's Portfolio</a>
    <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">Jason Gibson's LinkedIn</a>
    <p class="bio-info">Strengths:</p>
    <ul>
      <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000000000</div> </span></li>
      <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000000000000000000000</div></span></li>
      <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000000000000000000000</div></span></li>
      <li><span class="skill-span"> Javascript: <div class="skill-bar-4">000000000000000000</div></span></li>
    </ul>
    <p class="bio-info">Weakness: dank memes</p>
    <p class="bio-info">
        Jason grew up in Columbus, OH. From an early age he was interested in video games and
        robots. This lead him in highschool to join the FIRST Robotics team and learn about Mechanical Engineering
        and computer programming. After pursuing Mechanical Engineering and not liking it as much, he's returned to
        the tech side and has started to pursue his other passion, Software Engineering. He still maintains the Engineering
        creed, "I am a trained problem solver."
    </p>`
}
const renderMiles = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <img class="developer-img" src="images/miles.png">
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://jgibson37.github.io">Miles Shank's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">Miles Shank's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> Javascript: <div class="skill-bar-4">000000000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: dank memes</p>
        <p class="bio-info">
            Artist, Developer, Cosplayer, Creator, ask me about Sonic the Hedgehog.
        </p>`
}

const renderKenny = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <img class="developer-img" src="images/kw.png">
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://jgibson37.github.io">Kenny Williams's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">Kenny Williams's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> Javascript: <div class="skill-bar-4">000000000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: dank memes</p>
        <p class="bio-info">
            Creative, Frontend Formulator, Master Juicer & Smoothie Maker
        </p>`
}

const renderTrey = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <img class="developer-img" src="images/trey.png">
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://jgibson37.github.io">Trey Grace's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">Trey Grace's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> Javascript: <div class="skill-bar-4">000000000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: dank memes</p>
        <p class="bio-info">
            API Specialist, Dad Joke Aficionado, Supreme Leader Smoke... Meats
        </p>`
}

const renderSarah = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <img class="developer-img" src="images/sarah.png">
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://jgibson37.github.io">Sarah Greene's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">Sarah Greene's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> Javascript: <div class="skill-bar-4">000000000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: dank memes</p>
        <p class="bio-info">
            Developer, Explorer, Inception Specialist, Doolittle has nothing on me ;-)
        </p>`
}

const renderJd = () =>{
    const selectDevBox = document.querySelector(".developer-display")
    selectDevBox.innerHTML= `            
    <img class="developer-img" src="images/jd.png">
    <section class="developer-info-box">
        <a class="bio-anchors" href="http://jgibson37.github.io">JD King's Portfolio</a>
        <a class="bio-anchors" href="http://www.linkedin.com/in/jgibson37">JD King's LinkedIn</a>
        <p class="bio-info">Strengths:</p>
        <ul>
          <li><span class="skill-span"> Java: <div class="skill-bar-1">0000000000000000000</div> </span></li>
          <li><span class="skill-span"> Html: <div class="skill-bar-2">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> CSS: <div class="skill-bar-3">000000000000000000000000000000</div></span></li>
          <li><span class="skill-span"> Javascript: <div class="skill-bar-4">000000000000000000</div></span></li>
        </ul>
        <p class="bio-info">Weakness: dank memes</p>
        <p class="bio-info">
            Back-End Developer, LOTR Savant,<br> Dr. Grant to your Jurassic Park.
        </p>`
}