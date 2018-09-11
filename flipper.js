function coinFlip(flips) {
  var results = [];
  for (i = 0, len = flips; i < len; i++){
    results.push(Math.floor(Math.random() * 2));
  }
  displayResult(results);
}

function displayResult(results){
  $("#result").empty();
  $("#result_title").empty();
  var one = 0;
  var zero = 0;
  for (i in results){
    if (results[i] == 1) {
      $("#result").append("Chipotle ");
      one++;
    }
    else {
      $("#result").append("Moes ");
      zero++;
    };
  };

  if (one > zero){
    $("#result_title").append("<h1> You should go to Chipotle! </h1> ");

  }
  else if (one == zero){
    $("#result_title").append("<h1>It's a tie! Try again.</h1> ");

  }
  else{
    $("#result_title").append("<h1>You should go to Moes! </h1> ");

  };
}

function onLoad(){
  $("#form").submit(function(e) {
    e.preventDefault();
    var flipCount = $("#flips").val();
    coinFlip(flipCount);
  });
}

$(onLoad);
