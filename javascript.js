
var quotes = ["first quote, "]
var background = [ "http://i.imgur.com/BpB3EEn.gif", "http://i.imgur.com/TVgJyk4.jpg", "http://i.imgur.com/b9jYBWV.jpg" ];

var quote = [ "What you do today is important. You are exchanging a day of your life for it.", 
"sometimes getting the wind knocked out of you reminds you how much you love the taste of air", 
"Hello hello", "You play the hand you're dealt and you play it to the best of your ability. The rest is irrelevant" , "and once again, another one!" ];

var getRandom  = function(array){
     return array[Math.floor(Math.random() * array.length)];   
}

$("#getnew").click(function(){
    $("#quote").html(getRandom(quote));
    $("body").css("background-image", "url("+ getRandom(background) +")");
});