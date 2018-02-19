<?php

echo "hi";
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "10wordstory";

    $uname = $_GET["uname"];
    $ustory = $_GET["ustory"];


    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $statement = $conn->prepare("INSERT INTO stories (user_story, user_name) VALUES ('$ustory', '$uname')");
        $statement->execute();
    } catch(PDOException $e) {
        echo "<p>" . $e->getMessage() . "</p>";
    }

?>