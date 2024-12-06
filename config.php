<?php
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'orgconnect';

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
$sql = "SELECT * FROM organizations";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<h3>" . $row['org_name'] . "</h3>";
        echo "<p>" . $row['org_description'] . "</p>";
    }
} else {
    echo "No organizations found.";
}
?>
