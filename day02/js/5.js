//Step1:查找触发事件的元素
var txtName=
  document.querySelector("[name=username]"),
  //document.getElementsByName("username")[0],
    txtPwd=
  document.querySelector("[name=pwd]");
//Step2:绑定事件
txtName.onfocus=txtPwd.onfocus=e=>{
  //Step3: 查找要修改的元素
  //Step4: 修改元素
  var txt=e.target;
  txt.className="txt_focus";
  var div=
    txt.parentNode.nextElementSibling.children[0]
           //   td          +td         div
  div.className="";
};
txtName.onblur=e=>vali(e.target,/^\w{1,10}$/);
function vali(txt,reg){
  txt.className="";
  var div=
    txt.parentNode.nextElementSibling.children[0];
  if(reg.test(txt.value)){
    div.className="vali_success";
  }else{
    div.className="vali_fail";
  }
}
txtPwd.onblur=e=>vali(e.target,/^\d{6}$/);
  