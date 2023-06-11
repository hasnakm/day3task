$(document).ready(function() {

    var value1 = $("#phonenum").val();


   
    $.validator.addMethod("checknum", function(value1) {
        return /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/.test(value1);
      });

      


    


    $("#contactform").validate({
        rules:{
            fname:{
                required:true,
                minlength:1
            },
            
            phonenum:{
                required: true,
                checknum: true,
                maxlength:10,
                minlength:10
            },
            emailadd:{
                required:true,
                email: true
            },
            msg:{
                required: true
            },
            
        },
        messages:{
            
            fname:{
                
                required:"This field is required",
                minlength:"Enter valid name"
            },
            emailadd:{
                required:"This field is required",
                email: "Email not valid"
            },
            msg:"This field is required",
            phonenum:{
                checknum: "Phone number is not valid",
                maxlength: "Phone number is not valid",
                minlength: "Phone number is not valid"
            }

        }
        
    })



    
    
})    