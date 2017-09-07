window.onload = function() {
   const buttonOne = document.querySelector(".buttonOne")
    buttonOne.addEventListener("click", function(){
        alert("you have clicked button one")
    });
    const buttonTwo = document.querySelector(".buttonTwo")
    buttonTwo.addEventListener("click", function(){
        const paragraph = document.getElementById('information');
        paragraph.innerText = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback)."; 
    });
    const buttonThree = document.querySelector(".buttonThree")
    buttonThree.addEventListener("click", function(){
        document.getElementsByTagName("div")[1].innerHTML = "";
    });
}
