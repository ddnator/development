<?php
$pokemonJson = file_get_contents("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0.");

$pokemon = json_decode($pokemonJson, true);


?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<header></header>

<main>

    <?php foreach ($pokemon["results"] as $i => $poke) { ?>
        <p><?= $poke["name"] ?></p>
        <?php $i = $i + 1 ?>
        <?php $singlePokemonJson = file_get_contents("https://pokeapi.co/api/v2/pokemon/$i");
        $singlePokemon = json_decode($singlePokemonJson, true); ?>
        
    <?php } ?>

</main>
</body>
</html>
