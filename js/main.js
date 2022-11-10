function menuChange(x){
    x.classList.toggle("change")
}


var mobileMneu = document.getElementById("mobileMneu");

var topBar = document.querySelector("nav");


mobileMneu.addEventListener("click", function(){
    topBar.classList.toggle("menuOpner")
})

var dropDownIconC = document.getElementsByClassName("dropDownIcon");


for (var i = 0; i< dropDownIconC.length; i++){
    
    dropDownIconC[i].addEventListener("click", function(){
        var x = this.nextElementSibling;
        if(x.style.display ==="block"){
            x.style.display = "none";
        }else{
            x.style.display= "block";
            
        }
    })
}

