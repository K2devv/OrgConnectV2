<?php
session_start();

// Database connection
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'orgconnect';

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request is a POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $role = $_POST['role']; // Get the role from the form submission

    if ($role === 'guest') {
        // Guest login: no authentication required
        $_SESSION['username'] = 'Guest';
        $_SESSION['role'] = 'guest';
        header("Location: mainpage.html"); // Redirect guest to the main page
        exit();
    }

    // Validate login for users and org admins
    if ($role === 'user' || $role === 'orgAdmin') {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Check if username and password are set
        if (empty($username) || empty($password)) {
            echo "Username and password are required.";
            exit();
        }

        // Query the database for the user
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();

            // Verify the password
            if (password_verify($password, $user['password'])) {
                $_SESSION['username'] = $user['username'];
                $_SESSION['role'] = $user['role'];

                // Redirect based on role
                if ($user['role'] === 'orgAdmin') {
                    header("Location: admin_dashboard.html"); // Org admin page
                } else {
                    header("Location: mainpage.html"); // User main page
                }
                exit();
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "User not found.";
        }
    } else {
        echo "Invalid role selected.";
    }
} else {
    echo "Invalid request.";
}
?>
