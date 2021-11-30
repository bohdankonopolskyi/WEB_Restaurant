<?php

$arrive = $_POST["arrive_field"];
$depature = $_POST["depature_field"];
$dbhost     = "localhost";
$dbname     = "Railway";
$dbuser     = "root";
$dbpass     = "MySQLPass3165";
try {


$conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT (SELECT Name FROM Cities WHERE Trips.DepatureCityId = Cities.CityId) AS DepatureCity,
    (SELECT Name FROM Cities WHERE Trips.ArriveCityId = Cities.CityId) AS ArriveCity,
    (SELECT Number FROM Trains WHERE Trips.TrainId = Trains.id) AS Train, 
    Date
    FROM Trips 
    WHERE :depature = (SELECT Name FROM Cities WHERE Trips.DepatureCityId = Cities.CityId) AND
    :arrive = (SELECT Name FROM Cities WHERE Trips.ArriveCityId = Cities.CityId)";

    $stmt = $conn->prepare($sql);
    $stmt->bindValue(":depature", $_POST["depature_field"]);
    $stmt->bindValue(":arrive", $_POST["arrive_field"]);

    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if($stmt->rowCount() == 1)
    {
        $depatureCity = $result["DepatureCity"];
        $arriveCity = $result["ArriveCity"];
        $train = $result["Train"];
        $date = $result["Date"];

        echo  "<div class='cities_block'>
        <div> Depature city: $depatureCity </div>
        <div>Arrive City: $arriveCity</div>
     </div>
     <div class='data'>Train number: $train</div>
     <div class='data'>Date of trip: $date</div>";
    }
    else 
    {
        echo "<div>Record not found.</div>";
    }
}
catch(PDOException $e)
{
    echo "DataBase error: " . $e->getMessage();
}
?>
