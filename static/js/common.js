/* jQuery jtClite beta_v0.2 Last Updated: 2012-3-27 Author:CloudYan qq:1395093509 */
$(document).ready(function() {
xh_clear_input(".s_inp","中文/拼音");
		function xh_clear_input(input_box,input_default_text){
		$(input_box).bind({
		  focus:function() {
				var input_text = $(this).val();
				if(input_text == input_default_text) {$(this).val('').css('color', '#333');}
			},
		   blur:function() {
				var input_text = $(this).val();
				if(input_text == ""){$(this).val(input_default_text).css('color', '#999');}
			}
	   })};
  

    /* 首末第一个元素添加特定样式 */
	  $(".first_child").each(function(){
		  $(this).children().first().addClass("first");
	  });
	  $(".last_child").each(function(){
		  $(this).children().last().addClass("last");
	  });
		/*指定去掉边框*/


    //切换样式(采用参数调用形式，方便扩展)
	  JS_tab_nav(".JS_tab_nav li",".JS_tab_switch .tabcon","selected","click");
	  function JS_tab_nav(tab_nav,tab_con,selected,tri_type){
		  $tab_obj=$(tab_nav);
		  $tab_obj.bind(tri_type,function(){
				var tab_li_index = $(tab_nav).index(this);
				$(this).addClass(selected).siblings().removeClass(selected);
				$(tab_con).eq(tab_li_index).show().siblings().hide();
				});
		};

    /*关闭控制*/
		xh_close_this(".top_banner .close",".top_banner");
	
		function xh_close_this(_close,_this){
			$(_close).live("click",function(){
				$(this).parents(_this).hide()
		})}



});