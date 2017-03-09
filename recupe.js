
var mydata;
            window.onload = function () {
                mydata = JSON.parse(data);
                console.log(mydata);

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
                document.getElementById("liberation").innerHTML = "";
                document.getElementById("orbite").innerHTML = "";
                document.getElementById("inclinaison").innerHTML = "";
                document.getElementById("accel").innerHTML = "";
                document.getElementById("pression").innerHTML = "";


                


});

            function populateModal(smaplanette) {
                    var maplanette = JSON.parse(smaplanette);

                   
                    document.getElementById("modal-title").innerHTML = maplanette.name;
                    document.getElementById("modal-image").src = maplanette.imgpath;
                    document.getElementById("satellites").innerHTML = maplanette.satellites;
                    document.getElementById("dist").innerHTML = maplanette.dist;
                    document.getElementById("temperature").innerHTML = maplanette.temperature;
                    document.getElementById("masse").innerHTML = maplanette.masse;
                    document.getElementById("rotation").innerHTML = maplanette.rotation;
                    document.getElementById("rotation2").innerHTML = maplanette.rotation2;
                    document.getElementById("diametre").innerHTML = maplanette.diametre;
                    document.getElementById("liberation").innerHTML = maplanette.liberation;
                    document.getElementById("orbite").innerHTML = maplanette.orbite;
                    document.getElementById("inclinaison").innerHTML = maplanette.inclinaison;
                    document.getElementById("accel").innerHTML = maplanette.accel;
                    document.getElementById("pression").innerHTML = maplanette.pression;
                
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