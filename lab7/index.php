<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" type="text/css">
    <title>Railway</title>
    <style><?php include 'style.css'; ?></style>
</head>
<body>
    <form action="" method="post">

        <div class="fields_block">
            <div>
                <h2>Mісто відправлення </h2>
                <input type="text" name="depature_field">
            </div>
            <div>
                <h2>Mісто призначення </h2>
                <input type="text" name="arrive_field">
            </div>
        </div>
        <div class="submit_block">
            <input type="submit" value="Пошук">
        </div>
       
    </form>
    <?php    
        if(isset($_POST["arrive_field"]) && isset($_POST["depature_field"]))
        {
            include 'select.php';
        }
    ?>
</body>
</html>