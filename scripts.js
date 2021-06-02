
function init (){
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbort= document.getElementById("missionAbort");
    const paragraph = document.getElementById("flightStatus");
//     const image = documenst.getElementById("rocket");
//     const up = document.getElementById("Up");
//     const down = document.getElementById("Down");
//     const right = document.getElementById("Right");
//     const left= document.getElementById("Left");
// let height= 0;
// image.style.position = "relative";
// image.style.top = "0px";
// image.style.left="0px";






takeoffButton.addEventListener("click", function(event)
    {
        let answer = window.confirm("Confirm that the shuttele is ready for takeoff")
        if (answer){
        paragraph.innerHTML="Shuttle in flight.";
        document.getElementById("shuttleBackground").style.background="blue";
        document.getElementById("spaceShuttleHeight").innerText="10,000"; 
        }
    });

landingButton.addEventListener("click",function(event){
    let alert= window.alert("The shuttle is landing. Landing gear engaged.")
    document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
    document.getElementById("shuttleBackground").style.background="green";
    document.getElementById("spaceShuttleHeight").innerText="0"; 
})


missionAbort.addEventListener("click", function(event){
    let abort = window.confirm("Confirm that you want to abort the mission.")
        if (abort){
        document.getElementById("flightStatus").innerHTML="Mission Aborted";
        document.getElementById("shuttleBackground").style.background="green";
        document.getElementById("spaceShuttleHeight").innerText="0"; 
        }

})


// up.addEventListener("click", function(event){
//    image.style.top = parseInt(image.style.top) - 10 +"px" ;
//    height -= 10000;
//    document.getElementById("spaceShuttleHeight").innerText= height; 
// })

// down.addEventListener("click", function(event){
//     image.style.top = parseInt(image.style.top) + 10 +"px" ;
     
//  })

// right.addEventListener("click", function(event){
//     image.style.top = parseInt(image.style.left) - 10 +"px" ;
     
//  })

// left.addEventListener("click", function(event){
//     image.style.top = parseInt(image.style.left) + 10 +"px" ;
     
//  }
 



}





window.addEventListener("load", init);


