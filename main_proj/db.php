<?php
$link = mysqli_connect("127.0.0.1", "root", "MySQLPass3165", "Restaurant");
    mysqli_query($link, "SET NAMES utf8");
if (!$link) {
      die("Connection failed: " . mysqli_connect_error());
}
?>
