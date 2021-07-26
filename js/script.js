// business logic
$(document).ready(function(){
    $("#design-img").click(function(){
        $("#design").toggle();
        $("#design").css("background-color","green")
        
    })
    $("#dev-img").click(function(){
        $("#dev").toggle();
        $("#dev").css("background-color","blue")
    });
    $("#product-img").click(function(){
        $("#product").toggle();
        $("#product").css("background-color","grey")
    })

// form validation
 




//   jquery(function(){
//     $("#work-4-img").mouseover(function(){
//         $("#work4-txt").show();
//         $("#work4-txt").mouseover();
// })
// $("#work8-img").mouseover(function(){
//     ("#work8-text").show();
//     ("#work8-text").mouseover();
// })
// })
})
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
})
function validate(){
var name=document.getElementById("name").val();
var email=document.getElementById("email").val();
var message=document.getElementById("message").val();


 if(name!=="" && name!=="" && message!==""){
    alert("hello" + name + "" + "thank you contacting us")
 }
  else if(email=="" || email!=="" || message!==""){
      alert("please enter valid details");
  }
  
}