<?php

  
  require('/Users/bohdankonopolskyi/Sites/restaurant/db.php');
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = ( $_POST['phone']);
  $date = ( $_POST['date']);
  $time = ( $_POST['time']);
  $people = ( $_POST['people']);
  $book_message =  $_POST['message'];
  $sql = "INSERT INTO booking_table (client_name, email, phone, date, time, people, message) VALUES ('$name', '$email', '$phone', '$date', '$time', '$people', '$book_message' )";
    mysqli_query($link, $sql);
  
    $receiving_email_address = 'contact@example.com';
  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $book_a_table = new PHP_Email_Form;
  $book_a_table->ajax = true;
  
  $book_a_table->to = $receiving_email_address;
  $book_a_table->from_name = $_POST['name'];
  $book_a_table->from_email = $_POST['email'];
  $book_a_table->subject = "New table booking request from the website";


  $book_a_table->add_message( $_POST['name'], 'Name');
  $book_a_table->add_message( $_POST['email'], 'Email');
  $book_a_table->add_message( $_POST['phone'], 'Phone', 4);
  $book_a_table->add_message( $_POST['date'], 'Date', 4);
  $book_a_table->add_message( $_POST['time'], 'Time', 4);
  $book_a_table->add_message( $_POST['people'], '# of people', 1);
  $book_a_table->add_message( $_POST['message'], 'Message');

  echo $book_a_table->send();
  
?>
