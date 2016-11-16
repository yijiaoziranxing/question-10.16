/**
 * Created by asus8 on 2016/10/17.
 */
/**
 * 若 标题长度太长 给它加个P标签。我设置了P的样式
 * **/
!(function (doc, win) {
    var docEle = doc.documentElement, evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'
        , fn = function () {
            var width = docEle.clientWidth;
            //640是你设计稿的宽度   1rem=100px
            //响应横屏
            width && (docEle.style.fontSize = 100 * (width / 640) + 'px');
            //1280是你设计稿的宽度   1rem=200px   两个没区别
            //width&&(docEle.style.fontSize=200*(width/1280)+'px')
        };
    win.addEventListener(evt, fn, false);
    doc.addEventListener('DOMContentLoaded', fn, false)
}(document, window));
//判断title
$(function() {
    $(".art_title").click(function () {
        if ($(this).next().hasClass("hide")) {//点击文本显示
            $(this).next().removeClass("hide");
            $(this).addClass("cur")
            $(this).children().css({"white-space":"normal","height":"auto","line-height":"150%","padding-bottom":"20px"});
            if($(this).children().length>0){//有p
                $(this).css({"padding-top":"20px"})
            }else {//没有P
                $(this).css({"padding-top":"0"})
            }
        } else { //点击文本隐藏
            $(this).next().addClass("hide")
            $(this).removeClass("cur")
            $(this).children().css({"white-space":"nowrap","height":"0.98rem","line-height":"0.98rem","padding-bottom":"0px"});
            if($(this).children().length>0){//有p
                $(this).css({"padding-top":"0px"})
            }else{//没有P
                $(this).css({"padding-top":"0px"})
            }
        }
    })

})