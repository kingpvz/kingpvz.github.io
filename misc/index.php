<!DOCTYPE html>
<head>
    <?php
    $sec = (int)date('s', time());
    if ($sec < 10) {
        $phr = 'The amount of seconds that passed since the beginning of this minute: '.$sec;
    } else if ($sec < 30) {
        $phr = 'This is the amount of seconds passed since'. date('h:m a', time()) . ': '. $sec;
    } else {
        $phr = $sec . " seconds passed since the beginning of this minute.";
    }
    ?>
</head>
<body>
    <?php echo '<h1>'.$phr.'</h1>'; ?>
</body>