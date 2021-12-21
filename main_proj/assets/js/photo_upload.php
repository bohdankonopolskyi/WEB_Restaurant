
<?php

require('/Users/bohdankonopolskyi/Sites/restaurant/db.php');

if($_FILES['file']['name'] != '')
{ 
    $test = explode('.', $_FILES['file']['name']);
    $extension = end($test);    
    $name = rand(100,999).'.'.$extension;

    $location = '/Users/bohdankonopolskyi/Sites/restaurant/assets/img/gallery/'.$name;
    move_uploaded_file($_FILES['file']['tmp_name'], $location);
    //echo '<img src="'.$location.' />';
    //echo "$name";
    

}

?>