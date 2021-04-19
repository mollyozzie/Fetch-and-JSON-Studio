window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json) {
            const container = document.getElementById("container");
            json = json.sort(function(a,b) {
                return b.hoursInSpace - a.hoursInSpace;
            })

            const astronautCount = document.getElementById("astronautCount");

            astronautCount.innerHTML = "Astronaut Count: " + json.length

            let color = "color:green";
            
            for (var i=0; i<json.length; i++) {
                if (json[i].active == true) {
                    color = "color:green";
                } else {
                    color = "color:red"
                };
                container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${json[i].hoursInSpace}</li>
                            <li style = ${color}>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                </div>
                    <img class = "avatar" src=${json[i].picture}></img>
                </div>
            `; 
            }
        });
    });
});