// called by body onload, sets initial image for opponent
function initPick() {
    let init = "img/";
    document.getElementById('oppResult').src = init;
}
// called by onclick when rock button is clicked
function rockPick() {
    // generates a random pick for opponent
    function genPick() { 
        let pick = "img/";
        if (Math.floor(Math.random() * 3) == 2) {
            pick = "img/";
        } else if (Math.floor(Math.random() * 3) == 1) {
            pick = "img/";
        } else {
            pick = "img/";
        }
        // comparison logic
        if (pick == "img/rock.svg") {
            document.getElementById('result').innerHTML = "It's a Tie";
        } else if (pick == "img/") {
            document.getElementById('result').innerHTML = "You Lose";
        } else {
            document.getElementById('result').innerHTML = "You Win!";
        }
    }
    // runs the function
    genPick();
}
// called by onclick when paper button is clicked
function paperPick() {
    // generates a random pick for opponent
    function genPick () {
        let pick = "img/";
        if (Math.floor(Math.random() * 3) == 2) {
            pick = "img/";
        } else if (Math.floor(Math.random() * 3) == 1) {
            pick = "img/";
        } else {
            pick = "img/";
        }
        // sets the opponent's image for the generated pick
        document.getElementById('oppResult').src = pick;
        // comparison logic
        if (pick == "img/") {
            document.getElementById('result').innerHTML = "It's a Tie";
        } else if (pick == "img/") {
            document.getElementById('result').innerHTML = "You Lose";
        } else {
            document.getElementById('result').innerHTML = "You Win!";
        }
    }
    // runs the function
    genPick();
}
// called by onclick when scissors button is clicked
function scissorsPick() {
    // generates a random pick for opponent
    function genPick() {
        let pick = "img/";
        if (Math.floor(Math.random() * 3) == 2) {
            pick = "img/";
        } else if (Math.floor(Math.random() * 3) == 1) {
            pick = "img/";
        } else {
            pick = "img/";
        }
        // sets the opponent's image for the generated pick
        document.getElementById('oppResult').src = pick;
        // comparison logic
        if (pick == "img/") {
            document.getElementById('result').innerHTML = "It's a Tie";
        } else if (pick == "img/") {
            document.getElementById('result').innerHTML = "You Lose";
        } else {
            document.getElementById('result').innerHTML = "You Win!";
        }
    }
    // runs the function
    genPick();
}