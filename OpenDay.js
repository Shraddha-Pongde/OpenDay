

var material;

function loadpage(){
    console.log('First-Step');

    fetch('./OpenDay.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        material = data;
        document.getElementById('heading').innerHTML = (data.description);
        
    })
}

function myFunction(){
    
    var searchInput = document.getElementById("mysearch").value.toLowerCase();
    var demoDiv = document.getElementById('output');
    demoDiv.innerHTML = "";

     // Check if search input is empty
    if(searchInput === "") {
        return; // Exit function if search input is empty
    }

    document.getElementById("mysearch").addEventListener("input", function(event) {
    if(event.inputType === "deleteContentBackward" && event.target.value === "") {
        document.getElementById('output').innerHTML = ""; // Clear output div
    }
});

    for(var i=0; i<material.topics.length; i++){
        var programs = material.topics[i].programs;
        for(j=0; j<programs.length;j++){
            var program = programs[j];  
            if(program.title.toLowerCase().includes(searchInput) || program.description_short.toLowerCase().includes(searchInput)){
                var div_element = document.createElement('div');
                var header = document.createElement('h3')
                header.innerHTML = (program.title)
                var result_string = 'Program Title: '+program.title+'\n';
                result_string += 'Description: '+program.description_short+'\n';

                if(program.school == true){
                    result_string += 'Is a school: Yes\n';
                }
                else{
                    result_string += 'Is a school: No\n';
                }

                result_string += 'Room: '+program.room+'\n';
                result_string += 'Floor: '+program.floor+'\n\n';
                result_string += 'Location: '+program.location.title+'\n';
                result_string += 'Location Description: '+program.location.description+'\n';
                result_string += 'Address: '+program.location.address+'\n';
                result_string += 'Postcode: '+program.location.postcode+'\n';
                result_string += 'Website: '+program.location.website+'\n';

                if (program.location.accessible == 1){
                    result_string += 'Is it Accessible: Yes\n';
                }
                else{
                    result_string += 'Is it Accessible: No\n';
                }

                if (program.location.parking == 1){
                    result_string += 'Parking available: Yes\n';
                }
                else{
                    result_string += 'Parking available: No\n';
                }

                if (program.location.bike_parking == 1){
                    result_string += 'Bike parking available: Yes\n';
                }
                else{
                    result_string += 'Bike parking available: No\n';
                }

                div_element.appendChild(header)
                div_element.innerText = result_string;
                div_element.setAttribute('class','sub_div')
                //demoDiv.appendChild(div_element);
                document.getElementById("output").appendChild(div_element);
                var line_break = document.createElement('br');
                document.getElementById("output").appendChild(line_break);
            }
        }
    }
}
