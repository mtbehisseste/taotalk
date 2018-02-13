<?php
require("phpsqlajax_dbinfo.php");

// Start XML file, create parent node
$dom = new DOMDocument();
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

    $newnode->setAttribute("address", $row['address']);
    $newnode->setAttribute("lat", $row['lat']);
    $newnode->setAttribute("lng", $row['lng']);
}

$dom->save("pinned.xml");
echo $dom->saveXML();

?>