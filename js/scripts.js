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

    if (nameInput === "") {
      $(".error").show();
      // $(result).hide();
    } else {
      // $(result).show();
      $(".error").hide();
    };


  });

});
