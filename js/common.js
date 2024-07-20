$(function() {
  $(".j-sea-tips").hover(function(){
		$(this).siblings(".tips-desc").toggle();
	});
  $(".j-date-tips").hover(function(){
		$(this).siblings(".tips-desc").toggle();
	});
  $(".j-select-sort a").click(function(){
    $(this).parent().find("a").removeClass("curr");
    $(this).addClass("curr");
  });
  $(".j-txt-tips").hover(function(){
		$(this).find(".tips-eg").toggle();
	});
    $(".j-tree-menu .con").hover(function () {
        $(this).children(".dd").toggle();
    });

  $(".j-select-item a").click(function(){
    $(this).parent().find("a").removeClass("curr");
    $(this).addClass("curr");
  });
  $(".j-select-array a").click(function(){
    $(this).parent().find("a").removeClass("curr");
    $(this).addClass("curr");
    var c=$(this).attr("cmd"),
        d=$(".overview-default"),
        l=$(".overview-list"),
        v=$(".overview-view");
    if(c === "default"){	
        d.fadeIn();
        l.hide();
        v.hide();
    }
    if(c === "list"){	
        d.hide();
        l.fadeIn();
        v.hide();
    }
    if(c === "view"){	
        d.hide();
        l.hide();
        v.fadeIn();
    }
  });
  
  $(".j-select-sort a").click(function(){
    $(this).parent().find("a").removeClass("curr");
    $(this).addClass("curr");
  });
  $(".j-select-lift").click(function(){
  //  $(this).find("i").toggleClass("icon-down");
   // $(this).find("i").toggleClass("icon-up");
  });
});
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否Chrome浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "flash";
        }
        if (IE6) {
            return "flash";
        }
        if (IE7) {
            return "flash";
        }
        if (IE8) {
            return "flash";
        }
        return "flash";
    }//isIE end
    else 
        return "pdf";
  
}//myBrowser() end
//以下是调用上面的函数
function sortReset(dataCount) {
    var sortType = $("#sortFiled").val().toUpperCase();

    $("#sort_area").empty();
    if (dataCount <= 10000) {
        if (sortType == ("SQR_DESC")) {


            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('sqr', 0)\">申请日<i class='icon-down'></i></a>");

        }
        else if (sortType == ("SQR_ASC")) {
            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('sqr', 0)\">申请日<i class='icon-up'></i></a>");

        }
        else {
            $("#sort_area").append(" <a  class='j-select-lift ' onclick=\"change_sort('sqr', 0)\">申请日<i class='icon-up'></i></a>");



        }
        if (sortType == ("GGR_DESC")) {
            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('ggr', 1)\">公布公告日<i class='icon-down'></i></a>");

        }
        else if (sortType == ("GGR_ASC")) {
            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('ggr', 1)\">公布公告日<i class='icon-up'></i></a>");

        }
        else {
            $("#sort_area").append(" <a  class='j-select-lift ' onclick=\"change_sort('ggr', 1)\">公布公告日<i class='icon-up'></i></a>");

        }
    }
    else {
        $("#sort_area").append("<a class='curr'>查询结果超过10000条不排序</a>");
    }
}
function sortReset_Sw(dataCount) {
    var sortType = $("#sortFiled").val().toUpperCase();

    $("#sort_area").empty();
    if (dataCount <= 10000) {
        if (sortType == ("AN_DESC")) {


            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('an', 0)\">申请号<i class='icon-down'></i></a>");

        }
        else if (sortType == ("AN_ASC")) {
            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('an', 0)\">申请号<i class='icon-up'></i></a>");

        }
        else {
            $("#sort_area").append(" <a  class='j-select-lift ' onclick=\"change_sort('an', 0)\">申请号<i class='icon-up'></i></a>");



        }
        if (sortType == ("GGR_DESC")) {
            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('ggr', 1)\">事务数据公告日<i class='icon-down'></i></a>");

        }
        else if (sortType == ("GGR_ASC")) {
            $("#sort_area").append(" <a  class='j-select-lift curr' onclick=\"change_sort('ggr', 1)\">事务数据公告日<i class='icon-up'></i></a>");

        }
        else {
            $("#sort_area").append(" <a  class='j-select-lift ' onclick=\"change_sort('ggr', 1)\">事务数据公告日<i class='icon-up'></i></a>");

        }
    }
    else {
        $("#sort_area").append("<a class='curr'>查询结果超过10000条不排序</a>");
    }
}