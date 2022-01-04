<?php
session_start();
require('db.php');

  if (isset($_POST["login"]) and isset($_POST["pass"])) {
    $login_input = $_POST["login"];
    $pass_input = $_POST["pass"];
    $log = mysqli_query($link, "SELECT login, pass FROM users WHERE login = '$login_input'");
    while ($row = mysqli_fetch_array($log)) {
      $login_db = $row['login'];
      $pass_db = $row['pass'];
    }
  }
  if($login_db == $login_input and $pass_db == $pass_input){
    $_SESSION["login"]="yes";
    $_SESSION["name"]=$login_input;
    $_SESSION["passs"]=$pass_input;
    header('Location: index.php');
  }
?>
