### em/rem布局理解[参考文章](https://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/)
   em作为font-size的单位时，其代表父元素的字体大小，em作为其他属性单位时，代表自身字体大小——MDN
   
   rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小——MDN
   
   如何让html字体大小一直等于屏幕宽度的百分之一呢？ 可以通过js来设置，一般需要在页面dom ready、resize和屏幕旋转中设置
   
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 100 + 'px';
    
   那么如何把UE图中的获取的像素单位的值，转换为已rem为单位的值呢？公式是元素宽度 / UE图宽度 * 100，
   让我们举个例子，假设UE图尺寸是640px，UE图中的一个元素宽度是100px，根据公式100/640*100 = 15.625
   
       $ue-width: 640; /* ue图的宽度 */
       
       @function px2rem($px) {
         @return #{$px/$ue-width*100}rem;
       }
       
       p {
         width: px2rem(100);
       }

   vw —— 视口宽度的 1/100；vh —— 视口高度的 1/100 —— MDN
   
    /* rem方案 */
    html {fons-size: width / 100}
    p {width: 15.625rem}
    
    /* vw方案 */
    p {width: 15.625vw}
    
   vw还可以和rem方案结合，这样计算html字体大小就不需要用js了
    
    html {fons-size: 1vw} /* 1vw = width / 100 */
    p {width: 15.625rem}
    
   当然不同屏幕字体大小相同也是非常合理和不错的效果，需要你自己做决策
    
    @media screen and (min-width: 320px) {
        body {font-size: 16px}
    }
    @media screen and (min-width: 481px) and (max-width:640px) {
        body {font-size: 18px}
    }
    @media screen and (min-width: 641px) {
        body {font-size: 20px}
    }
    
    p {font-size: 1.2em}
    p a {font-size: 1.2em}
    
   第二，如果用户在PC端浏览，页面过宽怎么办？一般我们都会设置一个最大宽度，大于这个宽度的话页面居中，两边留白
    
    var clientWidth = document.documentElement.clientWidth;
    clientWidth = clientWidth < 780 ? clientWidth : 780;
    document.documentElement.style.fontSize = clientWidth / 100 + 'px';
    
   设置body的宽度为100rem，并水平居中
    
    body {
        margin: auto;
        width: 100rem
    }
    
    
   Rem布局方案
   
   通过上面可以得出实现缩放布局，共有四种方案，下面做一个对比
    
    缩放布局	      用户体验	兼容性	 依赖js	超大屏幕	修正字体
    rem+media-query	可	IOS4.1 AN2.1	√	 √	      ×
    rem+js	        良	IOS4.1 AN2.1	×	 √	      ×
    rem+vw	        优	IOS6.1 AN4.4	√	 √	      ×
    vw	            优	IOS6.1 AN4.4	√	 ×	      √
    
   如果要求兼容性，建议rem+js方案，需要解决的问题如下：
    
   修正body字体大小

   浏览器禁用js（可选）
   宽度限制，超大屏幕居中（可选）
   字体缩放（可选）
   如果兼容性满足，建议使用rem+vw方案，需要解决的问题如下：

   修正body字体大小
   宽度限制，超大屏幕居中（可选）
   字体缩放（可选）
   
   rem进行屏幕适配总结
   
   下面这个网址是针对rem来写的一个简单的demo页面，大家可以在不同的手机上看一下效果
   
   
   但是rem也并不是万能的，下面也有一些场景是不适于使用rem的
   
   1 当用作图片或者一些不能缩放的展示时，必须要使用固定的px值，因为缩放可能会导致图片压缩变形等。
   
   2 再设置backgroundposition或者backgroundsize时不宜使用rem。
   
   在列举几个使用rem的线上网站：
   
   手机淘宝网部分适配代码
   
       ! function (e, t) {
         var n = t.documentElement,
           d = e.devicePixelRatio || 1;
       
         function i() {
           var e = n.clientWidth / 3.75;
           n.style.fontSize = e + "px"
         }
         if (function e() {
             t.body ? t.body.style.fontSize = "16px" : t.addEventListener("DOMContentLoaded", e)
           }(), i(), e.addEventListener("resize", i), e.addEventListener("pageshow", function (e) {
             e.persisted && i()
           }), 2 <= d) {
           var o = t.createElement("body"),
             a = t.createElement("div");
           a.style.border = ".5px solid transparent", o.appendChild(a), n.appendChild(o), 1 === a.offsetHeight && n.classList.add("hairlines"), n.removeChild(o)
         }
       }(window, document)

   手机网易新闻网部分适配代码
   
       html {
           font-size: 13.33333vw
       }
       
       @media screen and (max-width: 320px) {
           html {
               font-size:42.667px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 321px) and (max-width:360px) {
           html {
               font-size:48px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 361px) and (max-width:375px) {
           html {
               font-size:50px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 376px) and (max-width:393px) {
           html {
               font-size:52.4px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 394px) and (max-width:412px) {
           html {
               font-size:54.93px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 413px) and (max-width:414px) {
           html {
               font-size:55.2px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 415px) and (max-width:480px) {
           html {
               font-size:64px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 481px) and (max-width:540px) {
           html {
               font-size:72px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 541px) and (max-width:640px) {
           html {
               font-size:85.33px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 641px) and (max-width:720px) {
           html {
               font-size:96px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 721px) and (max-width:768px) {
           html {
               font-size:102.4px;
               font-size: 13.33333vw
           }
       }
       
       @media screen and (min-width: 769px) {
           html {
               font-size:102.4px;
               font-size: 13.33333vw
           }
       }
