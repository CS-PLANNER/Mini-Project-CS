<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "miniProject"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Debugging: Print received POST data
echo "<pre>";
print_r($_POST);
echo "</pre>";

// Handling Student Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['regNo'])) {
    $department = $_POST['department']; 
    $year = $_POST['year'];
    $regNo = $_POST['regNo'];
    $name = $_POST['name'];

    $sql = "SELECT dept_id FROM department WHERE dept_name=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $department);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();

    if ($row) {
        $department_id = $row['dept_id'];

        $stmt = $conn->prepare("INSERT INTO students (reg_no, name, dept_id, year) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssii", $regNo, $name, $department_id, $year);

        if ($stmt->execute()) {
            echo "Student added successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Invalid Department!";
    }
}

// Handling Faculty Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['facId'])) {
    $facId = $_POST['facId'];
    $name = $_POST['name'];
    $email = $_POST['emailId'];
    $phone = $_POST['phNo'];

    $stmt = $conn->prepare("INSERT INTO faculty (faculty_id, name, email, phone) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $facId, $name, $email, $phone);

    if ($stmt->execute()) {
        echo "Faculty added successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}

$conn->close();
?>
