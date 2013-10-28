//调整字体大小的js
//<![CDATA[
$(function(){
	$('#fontSize>a').click(function(){
	var font = $("#A").css("font-size");
	var font = parseFloat(font , 10);
	switch(this.id != "largerfont" ? 1 : 0){
	case 0: if(font < 17) font++; break;
	case 1: if(font > 11) font--; break;
	default: font = 13;
	}
	$('#A').css("font-size", font + 'px');
	$(this).blur();
	return false;
	});
	//var google_search = $("#google_search"), loading = $("#loadingDemo");
	//var url = "http://www.tcreator.info/search.html"
    //    google_search.load(url, function() {
    //        google_search.css("visibility", "visible");
    //        loading.hide();
    //});
});
//扩展功能
//<![CDATA[
//集成jquery-image-lazy-loading 的jquery.lazyload.mini.js 以下为功能部分 Version:1.5.0
//Project home: http://www.appelsiini.net/projects/lazyload
(function($){$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options);}
var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear");}else{if(counter++>settings.failurelimit){return false;}}});var temp=$.grep(elements,function(element){return!element.loaded;});elements=$(temp);});}
this.each(function(){var self=this;if(undefined==$(self).attr("original")){$(self).attr("original",$(self).attr("src"));}
if("scroll"!=settings.event||undefined==$(self).attr("src")||settings.placeholder==$(self).attr("src")||($.abovethetop(self,settings)||$.leftofbegin(self,settings)||$.belowthefold(self,settings)||$.rightoffold(self,settings))){if(settings.placeholder){$(self).attr("src",settings.placeholder);}else{$(self).removeAttr("src");}
self.loaded=false;}else{self.loaded=true;}
$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))
[settings.effect](settings.effectspeed);self.loaded=true;}).attr("src",$(self).attr("original"));};});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear");}});}});$(settings.container).trigger(settings.event);return this;};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop();}else{var fold=$(settings.container).offset().top+$(settings.container).height();}
return fold<=$(element).offset().top-settings.threshold;};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft();}else{var fold=$(settings.container).offset().left+$(settings.container).width();}
return fold<=$(element).offset().left-settings.threshold;};$.abovethetop=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).scrollTop();}else{var fold=$(settings.container).offset().top;}
return fold>=$(element).offset().top+settings.threshold+$(element).height();};$.leftofbegin=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).scrollLeft();}else{var fold=$(settings.container).offset().left;}
return fold>=$(element).offset().left+settings.threshold+$(element).width();};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"});})(jQuery);


//jquery-image-lazy-loading的自定义部分
$(function() {
	if (navigator.platform == "iPad") return;
    $(".pleft img").not(".cycle img").lazyload({
		placeholder : "/static/js/jquery-image-lazy-loading/images/grey.gif",
		threshold   : 200,
		effect      : "fadeIn"
    });
});
$(window).bind("load", function() {
    var timeout = setTimeout(function() {$("img").trigger("sporty")}, 5000);
		
		var top  = ($(window).height()-450)/2;
var left = ($(window).width()-600)/2;
var _top  = ($(window).height()-600)/2;
var _left = ($(window).width()-800)/2;
function open_sina()
{
	 window.open('/wb_api/connect_sina.php?act=index','new','height=450,width=600,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
}
function open_qq()
{
	 window.open('/wb_api/connect_qq.php?act=index','new','height=600,width=800,top='+_top+',left='+_left+',toolbar=no,menubar=no,scrollbars=yes,resizeable=no,location=no,status=no');
}

function get_pic_html()
{
	var pic_html = '';
	var imglist;
	var html = $('#A').html();
	var rep=new RegExp("<img( ||.*?)src=('|\"|)(.*?)('|\"|>| )","gim");
	imglist=html.match(rep);
	//rep.exec(html);
	if(imglist)
	for(i=0;i<imglist.length;i++){
		rep.exec(html);
		var selected=(i==0)?'class="selected"':'';
		var spanhtml=(i==0)?"<span class='abc'><img src='/img/images/ok_icon.gif' width='16' height='16' /></span>":'';
		pic_html+=("<div class='img'><a href='javascript:void(0)' "+selected+"><img width='88' height='88' src='"+RegExp.$3+"'/>"+spanhtml+"</a></div>");
	}
	return pic_html;
}

$('body').append('<div id="share_content" style="display:none;position:absolute;cursor:pointer;"><img id="sina_share_btn" title="将选中内容分享到新浪微博" src="http://www.techweb.com.cn/img/images/sina_share2.gif" /> <img width=26 id="qq_share_btn" title="将选中内容分享到腾讯微博" src="http://www.techweb.com.cn/img/images/qq32.gif" /></div>');

//选中文本分享到新浪微博
var $a = function(c){
  var d = document.getElementsByTagName("title")[0];
  c = c || document;

var f = function() {
var txt = "";
if(document.selection) {
txt = document.selection.createRange().text; // IE
} else {
txt = document.getSelection();
}
return txt.toString();
};

  c.onmouseup = c.onclick =function(e) {
    e = e || window.event;
    var txt = f(), sh = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var left = (e.clientX - 40 < 0) ? e.clientX + 20 : e.clientX - 40, top = (e.clientY - 40 < 0) ? e.clientY + sh + 20 : e.clientY + sh - 40;
    var b =document.getElementById('share_content');
    if (txt) {
      b.style.display = "inline";
      b.style.left = left + "px";
      b.style.top = top + "px";
    } else {
      b.style.display = "none";
    }
  };

  document.getElementById('sina_share_btn').onclick = function() {
    var txt = f(), title = (d && d.innerHTML)? d.innerHTML : "未命名页面";
    if (txt) {
      window.open('http://v.t.sina.com.cn/share/share.php?title=' +txt+'  '+$('.title h2').text()+'&url=' +window.location.href,'new','height=450,width=600,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');
    }
  };

}(document.getElementById('A'));


//选中文本分享到腾讯微博
var _share_tencent_weibo = function(share_btn, share_area) {
    var current_area = share_area;
    var _web = {
        "name": document.title || "",
        "href": location.href,
        "hash": location.hash,
        //"target": "toolbar=0,status=0,resizable=1,left="+((screen.width-613)>>1)+",top="+((screen.height-460)>>1)
        "target": "height=460,width=613, toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no"+left+",top="+top
    };
    var _pic = function(area) {
        var _imgarr = area.getElementsByTagName("img");
        var _srcarr = [];
        for (var i = 0; i < _imgarr.length; i++) {
            _srcarr.push(_imgarr[i].src);
        }
        return _srcarr.join("|");
    }; //图片地址
    var _u = "http://share.v.t.qq.com/index.php?c=share&a=index&url=$url$&title=$title$&pic=$pic$";
    var _select = function() {
        return (document.selection ? document.selection.createRange().text: document.getSelection()).toString().replace(/[\s\n]+/g, " ");
    };

    if ( !! window.find) {
        HTMLElement.prototype.contains = function(B) {
            return this.compareDocumentPosition(B) - 19 > 0
        }
    }
    String.prototype.elength = function() {
        return this.replace(/[^\u0000-\u00ff]/g, "aa").length;
    }
    String.prototype.tripurl = function() {
        return this.replace(new RegExp("((news|telnet|nttp|file|http|ftp|https)://){1}(([-A-Za-z0-9]+(\\.[-A-Za-z0-9]+)*(\\.[-A-Za-z]{2,5}))|([0-9]{1,3}(\\.[0-9]{1,3}){3}))(:[0-9]*)?(/[-A-Za-z0-9_\\$\\.\\+\\!\\*\\(\\),;:@&=\\?/~\\#\\%]*)*", "gi"), new Array(12).join("aa"));
    }

    share_btn.onclick = function() {
        var _str = _select();
        var _strmaxlen = 257 - _web.name.tripurl().elength();
        var _resultstr = _str.slice(0,(_strmaxlen-4)>>1);
        if (_str.elength() > _strmaxlen) {
            _strmaxlen = _strmaxlen - 3;
            for (var i = _strmaxlen >> 1; i <= _strmaxlen; i++) {
                if ((_str.slice(0, i)).tripurl().elength() >= _strmaxlen) {
                    break;
                }
                else {
                    _resultstr = _str.slice(0, i);
                }
            }
            _resultstr += "...";
        } else {
            _resultstr = _str;
        }
        if (_str) {
            var url = _u.replace("$title$", encodeURIComponent(_resultstr + " " + _web.name + " ")).replace("$pic$", _pic(current_area));
            url = url.replace("$url$", encodeURIComponent(_web.href.replace(_web.hash, ""))).substr(0, 2048);
            window.open(url, 'null', _web.target);
        }

    };
};

_share_tencent_weibo(document.getElementById('qq_share_btn'), document.getElementById("A")); 

});