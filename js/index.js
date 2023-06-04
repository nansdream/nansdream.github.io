//点击跳转
$('.xz').click(
    function() {
        window.location.href = "https://mc.minebbs.com";
    }
)

$('.zy').click(
    function() {
        window.location.href = "#";
    }
)
//

//读取高度
var time = setInterval(
    function () {
        if ($('nav').offset().top > 0) {
            $('nav').addClass('nav2');
        } else {
            $('nav').removeClass('nav2');
        }
    }
)
//

//加入
$('.jrwm').click(
    function() {
        $('.jr').show();
    }
);

$('.gb').click(
    function() {
        $('.jr').hide();
    }
)

$('.jr-csm').click(
    function() {
        window.location.href = "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=pOUff2Yia1W4acBip5iWxegW4TGVoV37&authKey=b%2B8m9F%2F7Y0IpuGMiACoy7MKe0%2BRRMqziR%2Bf3n1kzV2mQ5WNSG1DyvsEA5H%2BiDmd7&noverify=0&group_code=836841932";
    }
)
//联系
$('.lx').click(
    function() {
        $('.lxs').show();
    }
);

$('.lx-gb').click(
    function() {
        $('.lxs').hide();
    }
)

//关于
$('.gy').click(
    function() {
        $('.about').show();
    }
);

$('.about-gb').click(
    function() {
        $('.about').hide();
    }
)
//

//加载
window.onload = function () {
    $(".loading").fadeOut(1000);
}
//

//价值观点击特效
    (function () {
        var a_idx = 0;
        window.onclick = function (event) {
            var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国",
                "敬业", "诚信", "友善");

            var heart = document.createElement("b"); //创建b元素
            heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

            document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
            a_idx = (a_idx + 1) % a.length;
            heart.style.cssText = "position: fixed;"; //给p元素设置样式
            heart.style.zIndex = "99999999999";

            var f = 16, // 字体大小
                x = event.clientX - f / 2, // 横坐标
                y = event.clientY - f, // 纵坐标  
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 1.2; // 放大缩小

            var timer = setInterval(function () { //添加定时器
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;z-index: 999999999; user-select: none; font-family: '微软雅黑'; position: fixed;color:" +
                        c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                        s + ");";

                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 15)

        }
        // 随机颜色
        function randomColor() {

            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";

        }
    }());
//