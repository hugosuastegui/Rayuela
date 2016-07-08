
$(document).ready(function() {

      var stop1 = false;
      var stop2 = false;
    $(document).keyup(function(event){
      // 65 ---- a (player1)
      if (event.which == 65) {
       stop1 = true;
       // 76 ---- l (player2)
      }

      if (event.which == 76) {
       stop2 = true;
      }

    });
  // Tu código va aquí
  // escuchar button
  //   encontrar td
  //     iterar sobre ellos
  //       agregas clase active next
  //       quitas clase anterior
  player1 = $("#Player1");
  player2 = $("#Player2");
  pos1 = 90;
  pos2 = 90;
  var result = "Que comience el juego";

  var  counter = 4;

  $("#start_btn").click(function(){
    if ($("#numtab_0").hasClass("active")) {
      result = "Que comience el juego!";
      $("#message").html(result);
      counter = 4;
      countdown();  
    }
    else {
      player1.find("td.active").first().removeClass("active");
      player2.find("td.active").first().removeClass("active");
      player1.find("td#numtab_0").addClass("active");
      player2.find("td#numtab_0").addClass("active");
      result = "Que comience el juego!";
      $("#message").html(result);
      stop1 = false;
      stop2 = false;
      counter = 4;
      countdown();
      }
  });

  function throw_coin1() {
    // var id = "#Player"+i
     player1.find("td.active").next().addClass("active");
     player1.find("td.active").first().removeClass("active");
   

     if (stop1 == true) {
        var act = player1.find("td.active").attr("id");
        var x = act.split("_");
        pos1 = x[x.length-1];
        if (stop2 == true) {
          winner(pos1, pos2)
        }
        return true;
     }


     var bolean = $("#end_cell").hasClass("active");
      if (bolean === true) {
        return;
      }

     setTimeout(throw_coin1, 30);
  }


   function throw_coin2() {
    // var id = "#Player"+i
     player2.find("td.active").next().addClass("active");
     player2.find("td.active").first().removeClass("active");
  
   

     if (stop2 == true) {
        var act = player2.find("td.active").attr("id");
        var x = act.split("_");
        pos2 = x[x.length-1]
        if (stop1 == true) {
          winner(pos1, pos2)
        }
       return true;
     }

     var bolean = $("#end_cell").hasClass("active");
      if (bolean === true) {
        return;
      }


     setTimeout(throw_coin2, 30);
  }


  function countdown() {
    // $("#countdown").delay(1000).append("2");
    // $("#countdown").delay(1000).append("1");
    $("#start_btn").prop("disabled", true);
    counter--;
    $("#countdown").html(counter);
    if (counter == 0) {
      throw_coin1();
      throw_coin2();
      return true;
    }

    setTimeout(countdown, 1000);
    
    }

  function winner(pos1, pos2) {
    $("#start_btn").prop("disabled", false);
    if (pos1 > 80|| pos2 > 80) {
      result = "Empate"
      $("#message").html(result);
    }
    else {
      var dist1 = 80 - pos1;
      var dist2 = 80 - pos2;
      var difference = dist1 - dist2
    
      if (difference < 0) {
        result = "Player 1 won the game!";
        $("#message").html(result);
      }
      else if (difference > 0) {
        result = "Player 2 won the game!";
        $("#message").html(result);
      }
      else if (difference = 0) {
        result = "Empate";
        $("#message").html(result);
      }
    }
  }


});




