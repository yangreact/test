<?php
header("Content-Type:application/json");
require_once("init.php");
@$fid=$_REQUEST["fid"];
if($fid){
  $sql="select lid,title from xz_laptop where family_id=$fid";
  $result=mysqli_query($conn,$sql);
  echo json_encode(mysqli_fetch_all($result,1));
}