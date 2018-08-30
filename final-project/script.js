function idCard(){
    let firstName = getElementById("fName").value;
    let lastName = getElementById("lName").value;
    let address = getElementById("address").value;
    let fullName = fName + lName;
    let age = parseInt(document.getElementById("years").value);
    let phoneN = parseInt(document.getElementById("phone").value);
    

    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;
    

    let numberArray = [];
    numberArray.push(age, phoneN)

    for (i = 0; i < numberArray; i++) {
        if (numberArray <= 100) {
            document.getElementById("postAge").innerHTML = age;
        }
    }
    for (i = 0; i < numberArray; i++) {
        if (numberArray <= 100) {
            ddocument.getElementById("postPhoneNumber").innerHTML = phoneN;
    
}

