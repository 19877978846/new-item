<?php
header("content-type:text/html,charset=utf-8");
$p1 = $_GET["phone"];
$u = $_GET["uname"];
$p2 = $_GET["pwd"];
$link = mysqli_connect("localhost","root","","gree");
mysqli_set_charset($link,"utf8");
$sql1 = "select phone from user where phone='$p1'";
$sql2 = "select name from user where name='$u'";
$res1 = mysqli_query($link,$sql1);
$res2 = mysqli_query($link,$sql2);
if(mysqli_fetch_assoc($res1)){
    echo 1;
}else if(mysqli_fetch_assoc($res2)){
    echo 2;
}else {
    $sql3 = "insert into user values ('$p1','$u','$p2')";
    $res3 = mysqli_query($link,$sql3);
    echo 0;
}