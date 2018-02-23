<?php

echo "hi";
    $servername = "localhost";
    $username = "savannag_alexis";
    $password = "grad2018";
    $dbname = "savannag_10words";

    $uName = $_GET["uName"];
    $sDesc = $_GET["sDesc"];



    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $statement = $conn->prepare("INSERT INTO Story (Story_Name, Story_Desc) VALUES ('$uName', '$sDesc')");
        $statement->execute();
    } catch(PDOException $e) {
        echo "<p>" . $e->getMessage() . "</p>";
    }

?>