$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var candyInput = $("input#candy").val();
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();

    var result = [candyInput, colorInput, animalInput]
    var newResult = [result[1],result[0],result[2]]
        console.log(result);
        console.log(newResult);
    var newArray = ["Fun", "Sun"]
    newArray.push(result[1])
      console.log(newArray)

    if (nameInput === "") {
      $(".error").show();
      $("#listStuff").hide();
    } else {
      $("#listStuff").show();
      $("li#first").prepend(result[0]);
      $("li#second").prepend(result[1]);
      $("li#third").prepend(result[2]);
      $(".error").hide();
    };


  });

});
