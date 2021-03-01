<?php
error_reporting(E_ALL & ~E_NOTICE);
header('content-type:text/html;charset=utf-8');
//连接数据库
$link=mysqli_connect("localhost","root","","gree");
//设置编码
mysqli_set_charset($link,"utf8");
//sql语句
// $sql="select * from goods";
if($_GET['keyword']){
    $kw = $_GET["keyword"];
    if($_GET['sortkey']){
        $sortkey = $_GET['sortkey'];
        if($sortkey=="销售数量"){
            $sql5 = "select * from goods where goods_name like '%$kw%' order by buy_num desc";
        }else if($sortkey=='商品价格'){
            $sql5 = "select * from goods where goods_name like '%$kw%' order by goods_price desc";
        }
        $res5=mysqli_query($link,$sql5);
        if (!$res5) {
            echo "[]";
            exit();
        }
        $ar5=[];
        while($row5=mysqli_fetch_assoc($res5)){
            array_push($ar5,$row5);
        }
        if($ar5){
            echo json_encode($ar5);
        }
    }else{
        $sql1 = "select * from goods where goods_name like '%$kw%'";
        //执行SQL语句，并返回结果集
        $res1=mysqli_query($link,$sql1);
        if (!$res1) {
            echo "[]";
            exit();
        }
        //创建数组存储所有数据
        $ar1=[];
        //遍历结果集中所有数据
        while($row1=mysqli_fetch_assoc($res1)){
            array_push($ar1,$row1);
        }
        if($ar1){
            echo json_encode($ar1);
        }
    }
} else if($_GET['category_one']){
    $category_one = $_GET["category_one"];
    if($_GET['sortkey']){
        $sortkey = $_GET['sortkey'];
        if($sortkey=="销售数量"){
            $sql5 = "select * from goods where cart_id_one like '%$category_one%' order by buy_num desc";
        }else if($sortkey=='商品价格'){
            $sql5 = "select * from goods where cart_id_one like '%$category_one%' order by goods_price desc";
        }
        $res5=mysqli_query($link,$sql5);
        if (!$res5) {
            echo "[]";
            exit();
        }
        $ar5=[];
        while($row5=mysqli_fetch_assoc($res5)){
            array_push($ar5,$row5);
        }
        if($ar5){
            echo json_encode($ar5);
        }
    }else{
        $sql2 = "select * from goods where cart_id_one like '%$category_one%'";
        $res2=mysqli_query($link,$sql2);
        if (!$res2) {
            echo "[]";
            exit();
        }
        $ar2=[];
        while($row2=mysqli_fetch_assoc($res2)){
            array_push($ar2,$row2);
        }
        if($ar2){
            echo json_encode($ar2);
        }
    }
} else if($_GET['category_two']){
    $category_two = $_GET["category_two"];
    if($_GET['sortkey']){
        $sortkey = $_GET['sortkey'];
        if($sortkey=="销售数量"){
            $sql5 = "select * from goods where cart_id_two='$category_two' order by buy_num desc";
        }else if($sortkey=='商品价格'){
            $sql5 = "select * from goods where cart_id_two='$category_two' order by goods_price desc";
        }
        $res5=mysqli_query($link,$sql5);
        if (!$res5) {
            echo "[]";
            exit();
        }
        $ar5=[];
        while($row5=mysqli_fetch_assoc($res5)){
            array_push($ar5,$row5);
        }
        if($ar5){
            echo json_encode($ar5);
        }
    }else{
        $sql3 = "select * from goods where cart_id_two='$category_two'";
        $res3=mysqli_query($link,$sql3);
        if (!$res3) {
            echo "[]";
            exit();
        }
        $ar3=[];
        while($row3=mysqli_fetch_assoc($res3)){
            array_push($ar3,$row3);
        }
        if($ar3){
            echo json_encode($ar3);
        }
    }
} else if($_GET['category']){
    $category = $_GET["category"];
    if($_GET['sortkey']){
        $sortkey = $_GET['sortkey'];
        if($sortkey=="销售数量"){
            $sql5 = "select * from goods where cart_id='$category' order by buy_num desc";
        }else if($sortkey=='商品价格'){
            $sql5 = "select * from goods where cart_id='$category' order by goods_price desc";
        }
        $res5=mysqli_query($link,$sql5);
        if (!$res5) {
            echo "[]";
            exit();
        }
        $ar5=[];
        while($row5=mysqli_fetch_assoc($res5)){
            array_push($ar5,$row5);
        }
        if($ar5){
            echo json_encode($ar5);
        }
    }else{
        $sql4 = "select * from goods where cart_id='$category'";
        $res4=mysqli_query($link,$sql4);
        if (!$res4) {
            echo "[]";
            exit();
        }
        $ar4=[];
        while($row4=mysqli_fetch_assoc($res4)){
            array_push($ar4,$row4);
        }
        if($ar4){
            echo json_encode($ar4);
        }
    }
}
?>