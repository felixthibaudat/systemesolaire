
var mydata;
            window.onload = function () {
                mydata = JSON.parse(data);
                console.log(mydata[0].name);

            }

$("#mymodal").on("hidden.bs.modal", function(){
                document.getElementById("modal-title").innerHTML = "";
                document.getElementById("modal-image").src = "";
                document.getElementById("satellites").innerHTML = "";
                document.getElementById("dist").innerHTML = "";
                document.getElementById("temperature").innerHTML = "";
                document.getElementById("masse").innerHTML = "";
                document.getElementById("rotation").innerHTML = "";
                document.getElementById("diametre").innerHTML = "";

                


});
            function populateModal(idPlanet) {
                console.log("my name: " + mydata[idPlanet].name);
                var maplanette = mydata[idPlanet];
                document.getElementById("modal-title").innerHTML = maplanette.name;
                document.getElementById("modal-image").src = maplanette.imgpath;
                document.getElementById("satellites").src = maplanette.satellites;
                document.getElementById("dist").innerHTML = maplanette.dist;
                document.getElementById("temperature").innerHTML = maplanette.temperature;
                document.getElementById("masse").innerHTML = maplanette.masse;
                document.getElementById("rotation").innerHTML = maplanette.rotation;
                document.getElementById("rotation2").innerHTML = maplanette.rotation2;
                document.getElementById("diametre").innerHTML = maplanette.diametre;
                

            };
        /* for(var i=0;i < input_values.length;i++){
                    if(parameter != 0){
                                output_values.push(input_values[i].parameter);
                            }
} else {
                        output_values.push(input_values[i].parameter);
                    }
                    return input_values */
//Filter function to show only the selected console
/*app.filter('consoleFilter',function(){
    return function(input_values,$scope){
        if(typeof(input_values) != "undefined"){
            if(typeof(input_values) == "object"){
                var output_values=[];
                
                //For each game, check if it's console is contained in the selected console list
                for(var i=0;i < input_values.length;i++){
                    if(parameter != 0){
                                output_values.push(input_values[i].parameter);
                            }
                        }
                    } else {
                        output_values.push(input_values[i].parameter);
                    }
                }
            }
        } else {
            throw("You apply this filter to an undefined object");
        }
        
        return output_values;
    }
});*/