<?php
$basePath = '/airbnb';
if (!isset($pageTitle)) {
    $pageTitle = 'Airbnb Clone';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle) ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= $basePath ?>/assets/css/styles.css">
</head>
<body>
    <header class="site-header">
        <div class="container nav-wrap">
            <a href="<?= $basePath ?>" class="brand" aria-label="Airbnb home">
                <span class="brand-mark">air</span>
                <span class="brand-text">bnb</span>
            </a>

            <nav class="main-nav">
                <a href="<?= $basePath ?>">Stays</a>
                <a href="<?= $basePath ?>/listings.php">Experiences</a>
                <a href="<?= $basePath ?>/listings.php">Online Experiences</a>
            </nav>

            <div class="nav-actions">
                <a href="<?= $basePath ?>/listings.php">Become a host</a>
                <button class="ghost-btn" type="button">☰</button>
                <button class="profile-btn" type="button">A</button>
            </div>
        </div>
    </header>
