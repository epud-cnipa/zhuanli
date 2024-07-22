// 响应式nav
$(function() {
  var swi = ".nshowhide";
  var box = ".navbar .nli";
  var act = "sitebar-active";
  $(".navbar .nli").before("<a class='nshowhide'><i class='icon'></i></a>");
  $(window).resize(function() {
    $(swi).unbind();
    if (window.innerWidth <= 767) {
      o();
      a();
    } else {
      u();
    };
  });
  function o() {
    $(swi).show(0);
    // $(swi).bind("click",
    $(swi).bind("",
    function(event) {
      event.stopPropagation();
      $("html").removeClass("topbar-active");
      $(".topbar .r").hide(0);
      if ($(box).is(":hidden")) {
        $(box).show(0).css("overflow-y","auto");
        $("html").addClass(act);
      } else {
        $(box).hide(0);
        $("html").removeClass(act);
      };
    });
    $(document).click(function(event) {
      var _con = $(box).find("li");
      if (!_con.is(event.target) && _con.has(event.target).length === 0) {
        $(box).hide(0);
        $("html").removeClass(act);
      }
    });
  };
  function a() {
    $(box).find("a").click(function(event) {
      $(box).hide(0);
      $("html").removeClass(act);
    });
  };
  function u() {
    $("html").removeClass(act);
    $(swi).hide(0);
    $(box).removeAttr("style");
    $(box).find("a").unbind();
    $(document).unbind("click");
  };
  $(window).resize();

$(".j-drop-item .tit").click(function () {
    var box = $(this).next(".box");
    if (box.css("display") === "none") {
        box.fadeIn(200);
        $(this).removeClass("hover");
    } else {
        box.hide();
        $(this).addClass("hover");
    }
});
  
});
