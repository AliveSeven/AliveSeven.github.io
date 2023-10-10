var link = "" ;
// 遍历所有的img标签
$("img").each( (i,o) => {
	var o = $(o);
    // 判断图片的链接是否包含sinaimg关键字
	if( o.attr("src").indexOf("sinaimg") > 0 ){
        // 给这个标签加上referrerPlicy属性
		o.attr("referrerpolicy","no-referrer");
        // 备份图片的src
		link = o.attr("src");
        // 重新设置src，让页面重新加载一次图片
		o.attr("src",link);
	}
});