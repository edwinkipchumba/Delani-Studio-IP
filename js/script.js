// // business logic
$(document).ready(function(){
    $(".design1").click(function(){
        $("#design-img").toggle();
        $("#design").toggle();
        
    })
    $(".development2").click(function(){
        $("#dev-img").toggle();
        $("#dev").toggle();
    });
    $(".product3").click(function(){
        $("#product-img").toggle();
        $("#product").toggle();
       
    });
});
// user interface

$(document).ready(function(){
    $("#work1-img").mouseover(function(){
        $("#work1-text").show();
    })
    $("#work1-img").mouseout(function(){
        $("#work1-text").hide();
        
    });
    $("#work2-img").mouseover(function(){
        $("#work2-text").show();
    })
    $("#work2-img").mouseout(function(){
        $("#work2-text").hide();
        
    });
    $("#work3-img").mouseover(function(){
        $("#work3-text").show();
    })
    $("#work3-img").mouseout(function(){
        $("#work3-text").hide();
        
    });
    $("#work4-img").mouseover(function(){
        $("#work4-text").show();
    })
    $("#work4-img").mouseout(function(){
        $("#work4-text").hide();
        
    });
    $("#work5-img").mouseover(function(){
        $("#work5-text").show();
    })
    $("#work5-img").mouseout(function(){
        $("#work5-text").hide();
        
    });
    $("#work6-img").mouseover(function(){
        $("#work6-text").show();
    })
    $("#work6-img").mouseout(function(){
        $("#work6-text").hide();
        
    });
    $("#work7-img").mouseover(function(){
        $("#work7-text").show();
    })
    $("work7-img").mouseout(function(){
        $("#work7-text").hide();
    })

    $("#work8-img").mouseover(function(){
        $("#work8-text").show();
    })
    $("#work8-img").mouseout(function(){
        $("#work8-text").hide();
        
    });
});


function mainer(){
var name=document.getElementById('name').value;
var email=document.getElementById('email').value;
var message=document.getElementById('message').value;


 if(name!=="" && email!=="" && message!==""){
    alert("hello"  +name + " " + "thank you for contacting us")
 } else if(name!=="" || email!=="" || message!==""){
      alert("please enter valid details");
  }
  
}

