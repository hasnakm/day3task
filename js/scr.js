$(document).ready(function() {

    var value = $("#pswrd").val();

          
$.validator.addMethod("checklower", function(value) {
    return /[a-z]/.test(value);
  });
  $.validator.addMethod("checkupper", function(value) {
    return /[A-Z]/.test(value);
  });
  $.validator.addMethod("checkdigit", function(value) {
    return /[0-9]/.test(value);
  });
  $.validator.addMethod("checkspecial", function(value) {
      return /[!@#$%^&*]/.test(value);
  });
  $.validator.addMethod("pwcheck", function(value) {
    return /^[A-Za-z0-9\d=!\-@._]$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value);
  });

    //for login
    $("#loginform").validate({
        rules:{
            lemailaddress:{
                required:true,
                email: true
            },
            lpswrd:{
                required:true,
                minlength: 8,
                
                checklower : true,
                checkupper : true,
                checkdigit : true,
                checkspecial : true,
                maxlength: 15
            }     
           
        },
        messages:{
        
            lemailaddress:{
                required:"This field is required",
                email: "Email not valid"
            },
            lpswrd:{
                required:"Password is required",
                minlength: "Password not found",
                checklower : "Password not found",
                checkupper : "Password not found",
                checkdigit : "Password not found",
                checkspecial : "Password not found",
                maxlength: "Password not found"
            }
            

        }
        
    })


   


    
    
})    