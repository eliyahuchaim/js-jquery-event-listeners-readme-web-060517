
function getIt(){
    $('p').on("click", function(){
    alert("Hey!")
  });
}


function frameIt(){
  $('img').toggleClass('tasty')
};

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  });
};

function pressIt(){
  $('input').on("keydown", function(key){
    if (key.which === 71){
      alert("Boo")
    }
  })

}

$(document).ready(function(){

getIt();

});
