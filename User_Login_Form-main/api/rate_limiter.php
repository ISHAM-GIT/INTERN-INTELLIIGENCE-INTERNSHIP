<?php
// Basic rate-limiting logic
session_start();

$maxRequests = 5;
$timeWindow = 60; // seconds

if (!isset($_SESSION['rate_limit'])) {
    $_SESSION['rate_limit'] = [];
}

$currentTime = time();
$_SESSION['rate_limit'] = array_filter($_SESSION['rate_limit'], function ($timestamp) use ($currentTime, $timeWindow) {
    return ($currentTime - $timestamp) < $timeWindow;
});

if (count($_SESSION['rate_limit']) >= $maxRequests) {
    die(json_encode(['error' => 'Too many requests. Please try again later.']));
}

$_SESSION['rate_limit'][] = $currentTime;
?>

