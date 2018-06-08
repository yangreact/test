//Step1: 查找触发事件的元素:.tree span,保存在spans
var spans=document.querySelectorAll(".tree span");
//Step2: 绑定事件处理函数
//遍历spans中每个span
for(var span of spans){//错误:...iterator //60+
  span.onclick=e=>{//为当前span绑定单击事件处理函数
      var span=e.target;//Step3: 查找要修改的元素
      //如果自己是开着的,就关闭自己
      if(span.className=="open")
        span.className="";//清除自己的className
      else{//否则
        var openSpan=//在当前ul下找开着的菜单:
          document.querySelector(".tree .open");
        if(openSpan!=null)//如果找到
          //先将开着的菜单关上
          openSpan.className="";
        span.className="open";//将自己打开
      }
  }
}