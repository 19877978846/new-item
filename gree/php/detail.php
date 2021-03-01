<?php
header("content-type:text/html;charset=uft-8");
$id=$_GET["id"];
$link=mysqli_connect("localhost","root","","gree");
mysqli_set_charset($link,"utf8");
$sql="select * from goods where goods_id=$id";
$res=mysqli_query($link,$sql);
$row=mysqli_fetch_assoc($res);
echo json_encode($row);