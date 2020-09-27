<?php 
    $password='toto';
?>
<html>
    <head>
        <title>PHPTOP</title>
        <style>
        body {
            background: black;
            color: green;
            font-family: monospace;
        }
        input {
            background: darkgrey;
            color: green;
            border: none;
        }
        .error {
            color: red;
        }
        </style>
    </head>
 
    <body>
    <?php if ( isset($_GET['key']) && $_GET['key'] == $password ) { ?>
 
    <h1>ACCESS GRANTED</h1>
    <form>
        <input type="submit" value="Logout" />
    </form>
    <?php
    echo "<h2>TOP</h2>";
    $output = shell_exec('top -b -n 1 | head -5');
    echo "<pre>$output</pre>";
    echo "<h2>VMSTAT</h2>";
    $output = shell_exec('vmstat');
    echo "<pre>$output</pre>";
    echo "<h2>MEMORY</h2>";
    $output = shell_exec('free -h');
    echo "<pre>$output</pre>";
    echo "<h2>DISK</h2>";
    $output = shell_exec('df -h');
    echo "<pre>$output</pre>";
    echo "<h2>NETWORK</h2>";
    $output = shell_exec('/usr/sbin/ip -s -h -a link');
    echo "<pre>$output</pre>";
    ?>
    <?php } else { ?>
    <h1 class="error" >ACCESS DENIED</h1>
    <form method="get">
        <label>Access Key : </label>
        <input type="password" name="key" />
    </form>
    <?php } ?>
    </body>
</html>
