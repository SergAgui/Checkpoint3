'use strict';


$(document).ready(function() {
  var panCount = 0;
  var adClick = 0;
  var tvClick = 0;
  var boardClick = 0;

  function update() {
    // This changes the original H4 dynamically
    $("#counter").html("<h4>You've sold "+panCount+" Pan Dulces");

    // This is so the title changes too
    document.title = panCount + " Pan Sold";

    // Update the note below the Ad
    $("#adCost").html("<p>Sell " + ((adClick+1) * 15) + " more Pan");

    // Update the note below the TV
    $("#tvCost").html("<p>Sell " + ((tvClick+1) * 30) + " more Pan");

    //Update the note below the bllboard
    $("#boardCost").html("<p>Sell " + ((boardClick+1) * 80) + " more Pan");
  };

  function keepAdding() {
    panCount = panCount + adClick;
    panCount = panCount + tvClick*3;
    panCount = panCount + boardClick*8
    update()
  };

  setInterval(keepAdding, 2000);


  $('#dulce').click(function add() {
    panCount++;
    update();
  });

  // If the amount of pan sold is greater than or equal to the cost to purchase an upgrade, then it will subtract the cost from the total pan
  $("#upgrade1").click(function buyAd() {
    if (panCount >= ((adClick+1) *15)) {
      panCount = panCount - ((adClick+1) * 15);
      adClick = adClick + 1;
      update();
    };
  });

  $("#upgrade2").click(function buyTvAd() {
    if (panCount >= ((tvClick+1) *30)) {
      panCount = panCount - ((tvClick+1) * 30);
      tvClick = tvClick + 1;
      update();
    };
  });

  $("#upgrade3").click(function buyTvAd() {
    if (panCount >= ((boardClick+1) *80)) {
      panCount = panCount - ((boardClick+1) * 80);
      boardClick = boardClick + 1;
      update();
    };
  });
});
