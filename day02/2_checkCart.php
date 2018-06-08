<?php
require_once("init.php");
//xxx.php?chkAll=0
$uid=3;
@$chkAll=$_REQUEST["chkAll"];
if($chkAll!=null){
  $sql="update xz_shoppingcart_item set is_checked=$chkAll where user_id=$uid";
  mysqli_query($conn,$sql);
}else{
  //xxx.php?chk=true/false&iid=xxx
  @$iid=$_REQUEST["iid"];
  @$chk=$_REQUEST["chk"];
  if($iid&&$chk){
    $sql="update xz_shoppingcart_item set is_checked=$chk where iid=$iid";
    mysqli_query($conn,$sql);
  }
}