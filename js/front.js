function Headerfixed() {
  var menu = $("header").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > menu.top) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
}

// //mySidepanel 사이드메뉴
// function openNav() {
//   document.getElementById("mySidepanel").style.width = "100%";
// }

// /* Set the width of the sidebar to 0 (hide it) */
// function closeNav() {
//   document.getElementById("mySidepanel").style.width = "0";
// }

function openNav() {
  var element = document.getElementById("mySidepanel");
  var element2 = document.getElementById("left-menu");
  $("#mySidepanel").css("z-index", 1);
  element.classList.add("on");
  element2.classList.add("on");
}

//mySidepanel 사이드메뉴

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  var element = document.getElementById("mySidepanel");
  var element2 = document.getElementById("left-menu");
  element.classList.remove("on");
  element2.classList.remove("on");
  setTimeout(function () {
    $("#mySidepanel").css("z-index", -1);
  }, 100);
  var element1 = (document.style.display = "none");
}
