<?php
header("content-type:text/html;charset=uft-8");
$category=$_GET["category"];
$link=mysqli_connect("localhost","root","","gree");
mysqli_set_charset($link,"utf8");
$sql="select * from goods where cart_id='$category'";
$res=mysqli_query($link,$sql);
if (!$res) {
    echo "[]";
    exit();
}
$arr = [];
while($row=mysqli_fetch_assoc($res)){
    array_push($arr,$row);
}
if($arr){
    echo json_encode($arr);
}
?>