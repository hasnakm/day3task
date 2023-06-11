$(document).ready(function() {

    var value1 = $("#phonenum").val();

    var value = $("#pswrd").val();

    var value2 = $("#age").val();

    $.validator.addMethod("checkage", function(value2) {
        return /[0-9]{2}/.test(value2);
      });

    $.validator.addMethod("checknum", function(value1) {
        return /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/.test(value1);
      });

      
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
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:1
            },
            dob:{
                required: true
            },
            age:{
                required: true,
                checkage: true
            },
            gender:{
                required:true
            },
            phonenum:{
                required: true,
                checknum: true,
                maxlength:10,
                minlength:10
            },
            emailaddress:{
                required:true,
                email: true
            },
            address:{
                required: true
            },
            stateSelect:{
                required: true
            },
            citySelect:{
                required: true
            },
            user:{
                required: true
            },
            pswrd:{
                required:true,
                minlength: 8,
                
                checklower : true,
                checkupper : true,
                checkdigit : true,
                checkspecial : true,
                maxlength: 15
            },
            confirm: {
                required: true,
                equalTo: "#pswrd"
            }

            
            
            
            
            
            
            
           
        },
        messages:{
            
            fname:{
                
                required:"This field is required",
                minlength:"Enter valid name"
            },
            emailaddress:{
                required:"This field is required",
                email: "Email not valid"
            },
            pswrd:{
                required:"This field is required",
                minlength: "Atleast 8 character required",
                checklower : "Atleast 1 lowercase letter",
                checkupper : "Atleast 1 uppercase letter",
                checkdigit : "Atleast 1 Digit",
                checkspecial : "Atleast 1 special character",
                maxlength: "Maximum length 15"
            },
            confirm:{
                required:"This field is required",
                equalTo: "Password does not match"
            },
            stateSelect:{
                required: "This field is required"
            },
            citySelect:{
                required: "This field is required"
            },
            gender:"This field is required",
            age:{
                required:"This field is required",
                checkage:"Age not valid"
            },    
            dob:"This field is required",
            address:"This field is required",
            user:"This field is required",
            phonenum:{
                checknum: "Phone number is not valid",
                maxlength: "Phone number is not valid",
                minlength: "Phone number is not valid"
            }

        }
        
    })
    
})    