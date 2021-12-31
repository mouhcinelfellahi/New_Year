 
var v = "Mouhcine El Fellahi Wishes You A HAPPY NEW YEAR";
        var x = 0;
        var i = 343245
        var myh = setInterval(function() { document.getElementById("txt").innerHTML += v[x++];
                                          
                                         if(x >= v.length){
                                             clearInterval(myh);
                                         }
                                         },120);
        
        function clear() {
            window.txt.value = " ";
            clearInterval(myh);
        }

 function creathl() {
            document.getElementById("txt2").innerHTML = "2022";
        }
        
         
        setTimeout(creathl,6600); //1000 = 1s








        
    
  



