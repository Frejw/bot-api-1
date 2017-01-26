<?php
header("Content-type: text/plain; charset=utf-8");
if ($_GET['meme'] == NULL) {
	echo "Hej!";
} else {
	$memes = ["Thanks Obama!","9+10=21","5/7 perfect score!"];
	echo $memes[random_int(0, count($memes) - 1)];
}