<?php
header("content-type:text/html;charset=utf-8");
$link = mysqli_connect("localhost","root","","gree");
mysqli_set_charset($link,"utf8");
//热销推荐模块
$sql="select * from floor,goods where f_goods_id=goods_id";
$res=mysqli_query($link,$sql);
$arr=[];
while($row=mysqli_fetch_assoc($res)){
    array_push($arr,$row);
}
echo json_encode($arr);