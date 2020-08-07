const renderBio = document.querySelector(".developer-display")


const selectDeveloper = () =>{
    for(let x=1; x>=6; x++) {
        console.log(x)
        if(x==1){
            const devSelect = document.getElementById("jd")
        }
        if( x==2){
            const devSelect = document.getElementById("trey")
        }
        if(x==3){
            const devSelect = document.getElementById("miles")
        }
        if( x==4){
            const devSelect = document.getElementById("miles")
        }
        if(x==5){
            const devSelect = document.getElementById("kenny")
        }
        if( x==6){
            const devSelect = document.getElementById("sarah")
        }
        devSelect.addEventListener("click", () => {
            console.log("You hovered " + devSelect)
        })
    }
}

const runAll = () =>{
    selectDeveloper()
}

runAll()