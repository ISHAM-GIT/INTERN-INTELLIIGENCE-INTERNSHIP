<?php
session_start();
require 'database.php';

header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

if ($action === 'login') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['error' => 'Username and password are required']);
        exit;
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        echo json_encode(['message' => 'Login successful']);
    } else {
        echo json_encode(['error' => 'Invalid credentials']);
    }
    exit;
}

if ($action === 'register') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['error' => 'Username and password are required']);
        exit;
    }

    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
        $stmt->execute(['username' => $username, 'password' => $hashedPassword]);
        echo json_encode(['message' => 'Registration successful']);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Username already exists']);
    }
    exit;
}

if ($action === 'logout') {
    session_destroy();
    echo json_encode(['message' => 'Logout successful']);
    exit;
}

echo json_encode(['error' => 'Invalid action']);
?>
