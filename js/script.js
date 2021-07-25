alert(hello)
$(document).ready(function(){
     $("#design-img").click(function(){
         $("#design").show();
     })
   
      $("#dev-img").click(function(){
          $("#dev").show();
          
      });
      $("#product-img").click(function(){
          $("#product").show();

      })
      $("#work-4-img").mouseOver(function(){
        ("#mouse").mouseOver();
      })
    })

    // $("#form").submit(function(event){
    //     event.preventDefault();
    //     console.log("form has been submitted!");
    //     var nameInput =$("inputed#name").val();
    //     var emailInput =$("inputed#mail").val();
    //     var textareaInput =$("inputed#message").val();
    //     $("inputed#name").text
    // })

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const form = document.getElementById("form");
// const message = document.getElementById("message");
// const errorElement=document.getElementById("erro");

//   function validate()
// form.addEventListener("submit"); (e)=>{
//     e.preventDefault(); 
//     let messages= [];
//     if(name.value==="" || name.value===null){
//         message.push("name is required")  
//     }
//    const mailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//    if(inputText.value.match(mailFormat)){
//        Document.form.text.focus();
//        return true;
//    }
//    else
//    {
//        alert("You have entered an invalid email address")
//        document.form.text.focus();
//        return false
//    }
   

  
// }
 