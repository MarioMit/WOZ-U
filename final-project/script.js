function idCard(){
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let address = document.getElementById("address").value;
    let fullName = firstName + " " +lastName;
    let age = parseInt(document.getElementById('years').value);
    let phoneN = parseInt(document.getElementById('phone').value);
    

    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;
    

    
    let numberArray = [];
    numberArray.push(age, phoneN);

    for (i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
        document.getElementById("postAge").innerHTML = age;
        }else if (numberArray[i] > 100){ 
        document.getElementById("postPhoneNumber").innerHTML = phoneN;
    }
}
    
    
}