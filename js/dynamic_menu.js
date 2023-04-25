$(window).scroll(function() {
  //Making cut off heights so we can make the menu bar dynamic in size
  if ($(window).scrollTop() >= 100) {
    //Adjusting the height of the whole thing
    $("#menu").css("height", "100px");
    //For the main website heading
    $("#header > #menu > h1").css("font-size", "40px");
    $("#header > #menu > h1").css("margin", "1% 0px 1% 14.6%");
    //For the three links at the right
    $("#header > #menu ul").css("margin", "1.1% 14.6% 0px 0px");
    console.log("100");
    $().css();
  } else if ($(window).scrollTop() >= 50) {
    $("#menu").addClass("fixed");
    $("#menu").css("height", "140px");
    $("#header > #menu > h1").css("font-size", "48px");
    $("#header > #menu > h1").css("margin", "1.15% 0px 1% 14.6%");
    $("#header > #menu ul").css("margin", "1.7% 14.6% 0px 0px");
    console.log("50");
  } else if ($(window).scrollTop() >= 20) {
    $("#menu").addClass("fixed");
    $("#menu").css("height", "140px");
    $("#header > #menu > h1").css("font-size", "58px");
    $("#header > #menu > h1").css("margin", "1.3% 0px 1% 14.6%");
    $("#header > #menu ul").css("margin", "2% 14.6% 0px 0px");
    console.log("20");
  } else {
    $("#menu").removeClass("fixed");
    $("#menu").css("height", "160px");
    $("#header > #menu > h1").removeClass("scroll_h1");
    $("#header > #menu > h1").css("font-size", "68px");
    $("#header > #menu > h1").css("margin", "1.5% 0px 1% 14.6%");
    $("#header > #menu ul").css("margin", "2.9% 14.6% 0px 0px");
    console.log("Else");
  }
});
