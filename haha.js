// class button is selected and stored in variable buttons
const buttons = document.querySelectorAll(".button") 

// body element is selected and stored in variable body
const body = document.querySelector("body")

 buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function(a) {
    console.log(a);
    console.log(a.target);

    if(a.target.id === "grey"){
      body.style.backgroundColor = "grey";
    }
    if(a.target.id === "pink"){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "blue"){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "yellow"){
      body.style.backgroundColor = "yellow";
    }
    if(a.target.id === "green"){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "peru"){
      body.style.backgroundColor = "peru";
    }
    if(a.target.id === "purple"){
      body.style.backgroundColor = a.target.id;
    }
    if(a.target.id === "red"){
      body.style.backgroundColor = a.target.id;
    }

  })
 })