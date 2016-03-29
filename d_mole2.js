window.onload = function () {
    document.getElementById("music").play();
}


//What is the simplest logic to generate your game board?

// It might take more lines of code but it's easier to understand.

function shuffle() {

    //first let's draw the board with all moles
    for (var i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = '<a onclick=testHit(' + i + ')><img src="mole.jpg" alt="Bad Leroy" height=140 width=140></a>';
    }

    //Since only 1 square needs to be Evil Leroy let's decide which square that is.
    // cl-this generates our number which actually our square between 1-9
    var wack = Math.floor(Math.random() * 9) + 1;


    var evil = 'evil';
    //now that we know what square Evil Leroy is in let's put him there.
    document.getElementById(wack).innerHTML = '<a  onclick=testHit("evil")><img src="evil_leroy.jpg" alt="Bad Leroy" height=140 width=140></a>';

}


//This checks if the image was clicked whether it was a mole or evil leroy
function testHit(x) {

    if (x == 'evil') {
        document.getElementById('display').innerHTML = "OUCH!";
    } else {
        document.getElementById('display').innerHTML = "MISS!";
    }
    if (x == 'evil'){
        count++
        document.getElementById('score').innerHTML = "count";
    }
    
}
    
    
    
//
//if(x == 'evil')
//{
//    count++
//    document.getElementById('score').innerHTML = score;
//}



////This checks if the image was clicked whether it was a mole or evil leroy
//function testHit(x){
//
//if(x == 'evil'){
//document.getElementById('display').innerHTML = "OUCH!";     
// count++;    
// document.getElementById('score').innerHTML = count;            
//









//That should get you started...