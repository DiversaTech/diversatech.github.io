$(function(){

    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        contentType: 'html'
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }
