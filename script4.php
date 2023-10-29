<?php
    if (array_key_exists('calculate', $_POST)) {
        if (isset($_POST['number'])) {
            multiplicationTable($_POST['number']);
        }
    }

    function multiplicationTable($number) {
        echo '<table>';

        echo '<tr><td></td>';
        for ($topRow = 1; $topRow <= $number; $topRow++) {
            echo '<td><strong>';
            echo $topRow;
            echo '</strong></td>';
        }
        echo '</tr>';

        for ($row = 1; $row <= $number; $row++){
            echo '<tr><td><strong>'.$row.'</strong></td>';
            for ($col = 1; $col <= $number; $col++) {
                echo '<td>'.$row * $col.' <sub>'.$row.', '.$col.'</sub></td>';
            }
            echo '</tr>';
        }

        echo '</table>';
    }
?>