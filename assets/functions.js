function myFunction(){
    var x = document.getElementById("myTopnavbar")
    if (x.className === "topnavbar"){
        x.className += " responsive";
    }
    else {
        x.className = "topnavbar"
    }
} 
