<?php
require_once 'includes/database.php';
/** @var $db */
$query = 'SELECT 
id,
name,
description,
price,
image

FROM `products`
';

$result = mysqli_query($db, $query);
$products = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Convert binary to Base64
$base64 = base64_encode($products[0]['image']);

// Optionally store it in the DB or display

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Products</title>
    <link rel="stylesheet" href="includes/style.css">
</head>
<body>
<nav>
    <p>Caribinoo Latino</p>

    <div>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Reserve table</a>
        <a href="#">Contact</a>
    </div>
</nav>
<header>
    <h1></h1>
</header>
<main>
    <?php foreach ($products as $i => $product) { ?>
        <?php $base64 = base64_encode($product['image']); ?>
        <?= '<br><img class="image" src="data:' . ';base64,' . $base64 . '" alt="My Image">' ?>
        <h2><?= $product["name"] ?></h2>
        <p><?= $product["description"] ?></p>
    <?php } ?>>

</main>
</body>
</html>
