<?php
header("content-type:text/html;charset=utf-8");
$link = mysqli_connect("localhost","root","","gree");
mysqli_set_charset($link,"utf8");
//搜索栏
$kw = $_GET["kw"];
if($kw){
    $sql1 = "select * from goods where goods_name like '%$kw%'";
    $res1 = mysqli_query($link,$sql1);
    if (!$res1) {
        echo "[]";
        exit();
    }
    $ar1=[];
    while($row1=mysqli_fetch_assoc($res1)){
        array_push($ar1,$row1);
    }
    if(is_array($ar1)){
        echo json_encode($ar1);
    }
}
?>