function init (){
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbort= document.getElementById("missionAbort");
    const paragraph = document.getElementById("flightStatus");

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

abortMission.addEventListener("click", function(event){
    let answer = window.confirm("Confirm that you want to abort the mission.")
        if (answer===true){
        document.getElementById("flightStatus").innerHTML="Mission Aborted";
        document.getElementById("shuttleBackground").style.background="green";
        document.getElementById("spaceShuttleHeight").innerText="0"; 
        }

})



    }


window.addEventListener("load", init);


