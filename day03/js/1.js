(()=>{
var selFamily=
  document.querySelector("[name=family]"),
    selLaptop=
  document.querySelector("[name=laptop]");
ajax({
  type:"get",url:"1_getFamily.php",dataType:"json"
}).then(data=>{ 
  //创建文档片段
  var frag=document.createDocumentFragment();
  //创建option,设置内容为-请选择family-,并添加到selFamily中
  frag.appendChild(new Option("-请选择family-"));
  for(var f of data){//遍历data
    //每遍历一个就创建一个option元素，并添加到selFamily中
    //设置option的value为当前对象的fid属性值
    //设置option的内容为当前对象的fname属性值
    frag.appendChild(new Option(f.fname,f.fid));
  }
  selFamily.appendChild(frag);
  //为selFamily绑定change事件
  selFamily.onchange=e=>{
    selLaptop.innerHTML="";//清除selLaptop的内容
    //selLaptop.length=0;
    //创建文档片段frag
    var frag=document.createDocumentFragment();
    //创建option，内容为-请选择laptop-，并追加到frag中
    frag.appendChild(new Option("-请选择laptop-"));
    //获得selFamily的值,保存在value中
    var value=e.target.value;
    //如果value不是-请选择family-
    if(value!="-请选择family-"){
      //ajax,get请求1_getLaptopByFamily.php,设置参数为fid=value,返回的数据类型定义为json
      ajax({
        type:"get",
        url:"1_getLaptopByFamily.php",
        data:"fid="+value,
        dataType:"json"
      }).then(data=>{//然后 data
        for(var l of data){//遍历data
          //每遍历一个商品就创建一个option，并添加到frag中
          //设置option的内容为当前商品的title
          //设置option的值为当前商品的lid
          frag.appendChild(
            new Option(l.title,l.lid));
        }
        //将frag追加到selLaptop中
        selLaptop.appendChild(frag);
      })
    }else{//否则
      //将frag追加到selLaptop中
      selLaptop.appendChild(frag);
    }
  }
})
})()