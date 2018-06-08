//Step1: 查找触发事件的元素:data-toggle=tab,保存在tabs中
var tabs=
  document.querySelectorAll("[data-toggle=tab]");
for(var t of tabs){//Step2: 绑定事件
  t.onclick=e=>{
    var a=e.target;
    //Step3: 查找要修改的元素
    //var i=a.href.lastIndexOf("#");
    var id=a.dataset.target;//a.href.slice(i);
    var div=document.querySelector(id); 
    if(div.className!="active"){
    //Step4: 修改元素
      //找到#container下class为active的一个div,直接清除其class属性
      document.querySelector("#container>.active")
        .className="";
      //将当前div的class改为active
      div.className="active";
    }
  }
}
//查找触发事件的元素
//绑定事件
//查找要修改的元素
//修改元素