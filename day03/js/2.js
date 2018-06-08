(()=>{
ajax({
  type:"get",url:"2_getUsers.php",dataType:"json"
}).then(data=>{
  //创建table
  var table=document.createElement("table");
  table.createTHead();//创建thead,并添加到table中
  //创建tr，并添加到thead中
  var tr=table.tHead.insertRow();
  //遍历data中第一个用户对象的每个属性
  for(var key in data[0]){
    //创建th，并添加到tr中，设置其内容为key
    tr.insertCell().innerHTML=key;
  }

  table.createTBody();//创建tbody,并添加到table中
  //遍历data
  for(var u of data){
    //每遍历一个用户对象就创建一个tr,并将tr追加到tbody中
    var tr=table.tBodies[0].insertRow(0);
    //遍历当前用户对象的每个属性值
    for(var key in u){
      //创建td，并添加到tr中，设置其内容为当前用户对象的当前属性的值
      tr.insertCell().innerHTML=u[key];
    }
  }

  //将table添加到id为data的元素内
  document.getElementById("data")
    .appendChild(table);

})
})()