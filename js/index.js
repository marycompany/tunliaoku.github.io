$(document).ready(function () {
 
                var i = 0;
 
                var clone = $(".banner .img li").first().clone();//克隆第一张图片
                $(".banner .img").append(clone);//复制到列表最后
                var size = $(".banner .img li").size();
                console.log(size);//计算li的数量
 
                //添加四个li,就是添加圆点
                for (var j = 0; j < size-1; j++) {
                    $(".banner .num").append("<li></li>");
                }
                //给第一个li添加class on
                $(".banner .num li").first().addClass("on");
 
                /*移动事件*/
                function move() {
                    if (i == size) {
                        $(".banner .img").css({ left: 0 });
                        i = 1;
                    }
                    if (i == -1) {
                        $(".banner .img").css({ left: -(size - 1) * 500 });
                        i = size - 2;
                    }
                    $(".banner .img").stop().animate({ left: -i * 500 }, 500);
 
                    if (i == size - 1) {
                        //eq(index)选择器选取带有指定 index 值的元素
                        //siblings()遍历所有同胞元素
                        $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
 
 
                //var t = setInterval(function () { i++; move();},2000);
                //$(selector).hover(inFunction,outFunction)
                /*自动轮播*/
                /*鼠标悬停事件*/
                /*$(".banner").hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时重置定时器
                });*/
 
                /*鼠标滚动监听事件*/
                var scrollFunc=function(e){
                    ee=e || window.event;
                    if(e.wheelDelta){//IE/Opera/Chrome
                        if(e.wheelDelta>0){
                            console.log(e.wheelDelta);
                            i++;
                            console.log(i);
                            move();
                        }else{
                            i--;
                            console.log(e.wheelDelta);
                            console.log(i);
                            move();
                        }
                    }else if(e.detail){//Firefox
                        if(e.detail>0){
 
                            move();
                        }else{
 
                            move();
                        }
                    }
                }
                /*注册事件*/
                if(document.addEventListener){
                    //addEventListener(event,function,useCapture)
                    //useCapture为boolean值，false(默认)z在冒泡阶段执行，ture在捕获阶段执行
                    document.addEventListener('DOMMouseScroll',scrollFunc,false);
                }
                //window.onmousewheel=document.onmousewheel=scrollFunc;
                document.onmousewheel=scrollFunc;//鼠标滚动一格触发一次监听事件,chrome支持，火狐不支持
                //window.onmousewheel=scrollFunc;//也只触发一次事件，火狐浏览器不支持，chrome支持
 
                /*鼠标滑入原点事件*/
 
                $(".banner .num li").hover(function () {
 
                    var index = $(this).index();//获取当前索引值
                    i = index;
                    $(".banner .img").stop().animate({ left: -index * 500 }, 500);
                    $(this).addClass("on").siblings().removeClass("on");
                });
 
 
 
                /*向左按钮*/
                $(".banner .btn_l").click(function () {
                    i++;
                    move();
                })
 
 
                /*向右按钮*/
                $(".banner .btn_r").click(function () {
                    i--;
                    move();
                })
 
 
            });
