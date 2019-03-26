### 防止外边距重叠解决方案：

虽然外边距的重叠有其一定的意义，但有时候我们在设计上却不想让元素之间产生重叠，那么可以有如下几个建议可供参考：

    外层元素padding代替
    内层元素透明边框 border:1px solid transparent;
    内层元素绝对定位 postion:absolute:
    外层元素 overflow:hidden;
    内层元素 加float:left;或display:inline-block;
    内层元素padding:1px;
