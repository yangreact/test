(()=>{
function loadCart(){
ajax({//ajax请求2_getCart.php
  type:"get",url:"2_getCart.php",dataType:"json"
}).then(data=>{
  var html="",total=0;
  for(var p of data){
    html+=`<tr>
      <td><input type="checkbox" ${p.is_checked=="1"?"checked":""}/></td>
      <td>${p.title}</td>
      <td>¥${parseFloat(p.price).toFixed(2)}</td>
      <td>
        <button>-</button>
        <span>${p.count}</span>
        <button>+</button>
        <input type="hidden" value="${p.iid}"/>
      </td>
      <td>¥${(p.price*p.count).toFixed(2)}</td>
    </tr>`;
    total+=p.price*p.count;
  }
  //找到table
  var table=document.getElementById("data");
  //找table下的tbody,设置其内容为html
  table.querySelector("tbody").innerHTML=html;
  //查找tfoot中最后一个td,设置其内容为total
  table.querySelector("tfoot td:last-child")
       .innerHTML="¥"+total.toFixed(2);

  //Step1: 找触发事件的元素
  //找到tbody下所有button
  var btns=table.querySelectorAll("tbody button");
  //为每个按钮绑定事件
  for(var i=0;i<btns.length;i++){
    //Step2: 绑定事件处理函数
    btns[i].onclick=function(){//this->当前btn
      //Step3: 查找要修改的元素
      //Step4: 修改其内容
      //找到旁边的span,获取其内容转为整数,保存在n中
      var span=this.parentNode.children[1];
      var n=parseInt(span.innerHTML);
      //如果this的innerHTML为+,n就+1,否则就-1
      this.innerHTML=="+"?n++:n--;
      //找到按钮旁边的input的value，保存在iid中
      var iid=this.parentNode.children[3].value;
      //ajax请求updateCart.php,拼参数字符串:iid=iid&count=n,然后,重新loadCart()
      ajax({
        type:"post",
        url:"2_updateCart.php",
        data:`iid=${iid}&count=${n}`
      }).then(loadCart);
    }
  }

  //在table下找thead中第一个th中的input
  var chbAll=table.querySelector(
    "thead th:first-child>input");
  chbAll.checked=//tbody中没有未选中的checkbox
    table.querySelector(
      "tbody input[type=checkbox]:not(:checked)"
    )==null?true:false;
  //为chbAll绑定单击事件
  chbAll.onclick=e=>{
    //获得当前chbAll的checked
    var checked=chbAll.checked;
    //发送ajax请求更新数据库
    ajax({
      type:"post",
      url:"2_checkCart.php",
      data:`chkAll=${checked}`
    }).then(loadCart);
  }
  //在table下找tbody中每行第一个td下的input,保存在chbs
  var chbs=table.querySelectorAll(
    "tbody td:first-child>input");
  for(var chb of chbs){//为每个chb绑定单击事件
    chb.onclick=e=>{
      var chb=e.target;
      var iid=
        chb.parentNode//td chb
           .parentNode//tr
           .children[3]//td hidden
           .children[3]//input hidden
           .value;
      ajax({
        type:"get",
        url:"2_checkCart.php",
        data:`iid=${iid}&chk=${chb.checked}`
      }).then(loadCart);
    }
  }
});
}
loadCart();
})();