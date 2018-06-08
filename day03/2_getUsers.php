<?php
header("Content-Type:application/json");
require_once("init.php");
$sql="select uid, uname, email, phone from xz_user limit 10";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
