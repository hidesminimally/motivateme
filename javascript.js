var background = [ "http://i.imgur.com/BpB3EEn.gif", "http://i.imgur.com/TVgJyk4.jpg",  "http://i.imgur.com/b9jYBWV.jpg" ];

var quote = [ "This is the First quote", "This is the Second quote", "Hello hello", "perhaps this is another one" , "and once again, another one!" ];

var getRandom  = function(array){
     return array[Math.floor(Math.random() * array.length)];   
}

$("#getnew").click(function(){
    $("#quote").html(getRandom(quote));
    $("body").css("background-image", "url("+ getRandom(background) +")");
});