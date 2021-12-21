
<?php

$filename = "/Users/bohdankonopolskyi/Sites/restaurant";
if(!file_exists($filename))
{
    $dom = new domDocument("1.0", "utf-8");
    $root = $dom->createElement("image_files"); 
    $dom->appendChild($root);
    $i_file = $dom->createElement("imageFile");
    $image_Name = $dom->createElement("imageName"); // Создаём узел "imageName" с текстом внутри
    $i_file->appendChild($image_Name); // Добавляем в узел "i_file" узел "image_Name"
    
    $root->appendChild($i_file); // Добавляем в корневой узел "image_files" узел "i_file"

    $dom->save("data.xml"); // Сохраняем полученный XML-документ в файл
}
else
if($_FILES['file']['name'] != '')
{
    $test = explode('.', $_FILES['file']['name']);
    $extension = end($test);    
    $name = rand(100,999).'.'.$extension;

    $location = '/Users/bohdankonopolskyi/Sites/restaurant/'.$name;
    move_uploaded_file($_FILES['file']['tmp_name'], $location);

    echo '<img src="'.$location.' />';

    $sXML = new SimpleXMLElement($nXML2); // загрузка в XML
$newchild = $sXML->addChild("imageFile");
//Добавление параметров записи
$newchild->addChild("imageName", "$name");
}


?>