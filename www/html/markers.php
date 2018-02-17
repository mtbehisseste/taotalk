<?php
require("phpsqlajax_dbinfo.php");

// Start XML file, create parent node
$dom = new DOMDocument("1.0", "utf-8");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

// open connection to mysql
$connection = mysqli_connect('localhost', $username, $password);
if(!$connection) {
    die('Not connected : ' . mysqli_error($connection));
}

$db_selected = mysqli_select_db($connection, $database);
if(!$db_selected) {
    die('Can\'t use db : ' . mysqli_error($connection));
}

mysqli_query($connection, "set characcter_set_client=utf8");
mysqli_query($connection, "set character_set_result=utf8");
mysqli_query($connection, "set names utf8");
$query = "SELECT * FROM `markers` WHERE 1";
$result = mysqli_query($connection, $query);
if(!$result) {
    die('Invalid query: ' . mysqli_error($connection));
}

header("Content-type: text/xml");

// add xml node for each row
while($row = mysqli_fetch_assoc($result)) {
    $node = $dom->createElement("marker");
    $newnode = $parnode->appendChild($node);

    $newnode->setAttribute("address", $row['ADDRESS']);
    $newnode->setAttribute("lat", $row['LAT']);
    $newnode->setAttribute("lng", $row['LNG']);
}

$dom->save("pinned.xml");
echo $dom->saveXML();

?>