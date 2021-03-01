<?php
header("content-type:text/html,charset=utf-8");
$u = $_GET["uname"];
$p = $_GET["password"];
$link = mysqli_connect("localhost","root","","gree");
mysqli_set_charset($link,"utf8");
$sql = "select * from user where name='$u' and password='$p'";
$res = mysqli_query($link,$sql);
if(mysqli_fetch_assoc($res)){
    echo 1;
}else{
    echo 0;
}