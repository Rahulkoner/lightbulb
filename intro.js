document.getElementById("light-on").addEventListener("click",handelclick1);
function handelclick1(){
    document.querySelector("img").setAttribute("src","./lighton.jpg")
}

document.getElementById("light-off").addEventListener("click",handelclick2);
function handelclick2(){
    document.querySelector("img").setAttribute("src","./lightoff.jpg")
}

// if(document.querySelector("img").src === "./lightoff.jpg"){
//     document.getElementById("switch").addEventListener("click",function(){
//         document.querySelector("img").setAttribute("src","./lighton.jpg");
//     });
//  }

// else if(document.querySelector("img").src === "./lighton.jpg"){
//     document.getElementById("switch").addEventListener("click",function(){
//     document.querySelector("img").setAttribute("src","./lightoff.jpg")
//     });   
// } 
