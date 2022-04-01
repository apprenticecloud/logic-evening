
    function getFormInput() {

        var birthDate = document.getElementById('dateInput').value
        const male = document.getElementById('maleRadio')
        const female = document.getElementById('femaleRadio')
    
        if(male.checked){
            var gender = 'Male'
            
        }else if(female.checked){
            var gender = 'Female'
        }
    
        document.getElementById("displayName").innerHTML = 'Your date of birth is:'+birthDate+' and your gender is:'+gender;

     }







