$(document).ready(function() {
    $('#onerm-submit').click(function() {
        var weight = $('#weight').val();
        var reps = $('#reps').val();
        var eMax = weight * (1 + (reps/30));
        var bMax = weight / (1.0278 - (0.0278 * reps));
        /* Percentages of 1RM for Epley Formula */
        var eMax95 = eMax * 0.95;
        var eMax90 = eMax * 0.90;
        var eMax85 = eMax * 0.85;
        var eMax80 = eMax * 0.80;
        var eMax75 = eMax * 0.75;
        var eMax70 = eMax * 0.70;
        var eMax65 = eMax * 0.65;
        var eMax60 = eMax * 0.60;
        var eMax55 = eMax * 0.55;
        var eMax50 = eMax * 0.50;
        /* Percentages of 1RM for Brzycki Formula */
        var bMax95 = bMax * 0.95;
        var bMax90 = bMax * 0.90;
        var bMax85 = bMax * 0.85;
        var bMax80 = bMax * 0.80;
        var bMax75 = bMax * 0.75;
        var bMax70 = bMax * 0.70;
        var bMax65 = bMax * 0.65;
        var bMax60 = bMax * 0.60;
        var bMax55 = bMax * 0.55;
        var bMax50 = bMax * 0.50;

        $('#output1-container').show(); /* Shows output when calculate button is clicked  */
        /*function onerepMax(weight, reps) {
            return weight * (1 + (reps/30))
        };*/

        /* Epley Formula Output */
        $('#output').html('1 RM: ' + eMax.toFixed(1));
        $('#e-output-95').html('95%: ' + eMax95.toFixed(1));
        $('#e-output-90').html('90%: ' + eMax90.toFixed(1));
        $('#e-output-85').html('85%: ' + eMax85.toFixed(1));
        $('#e-output-80').html('80%: ' + eMax80.toFixed(1));
        $('#e-output-75').html('75%: ' + eMax75.toFixed(1));
        $('#e-output-70').html('70%: ' + eMax70.toFixed(1));
        $('#e-output-65').html('65%: ' + eMax65.toFixed(1));
        $('#e-output-60').html('60%: ' + eMax60.toFixed(1));
        $('#e-output-55').html('55%: ' + eMax55.toFixed(1));
        $('#e-output-50').html('50%: ' + eMax50.toFixed(1));

        /* Brzycki Formula Output */
        $('#output2').html('1 RM: ' + bMax.toFixed(1));
        $('#b-output-95').html('95%: ' + bMax95.toFixed(1));
        $('#b-output-90').html('90%: ' + bMax90.toFixed(1));
        $('#b-output-85').html('85%: ' + bMax85.toFixed(1));
        $('#b-output-80').html('80%: ' + bMax80.toFixed(1));
        $('#b-output-75').html('75%: ' + bMax75.toFixed(1));
        $('#b-output-70').html('70%: ' + bMax70.toFixed(1));
        $('#b-output-65').html('65%: ' + bMax65.toFixed(1));
        $('#b-output-60').html('60%: ' + bMax60.toFixed(1));
        $('#b-output-55').html('55%: ' + bMax55.toFixed(1));
        $('#b-output-50').html('50%: ' + bMax50.toFixed(1));
    })
});