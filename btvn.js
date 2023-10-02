alert("btvn");

var a = 0;
var b = 4;
var c = 2;
if (a == 0) {
    //bx+c=0
    if (b == 0 && c == 0) {
        console.log("p trinh co vo so no");
    } else {
        console.log("p trinh co no");
    }
} else {
    var delta = (b * b) - 4 * a * c;
    if (delta == 0) {
        console.log("phg trinh co 1 no duy nhat");
    } else if (delta < 0) {
        console.log(" phg trinh vo no");
    } else {
        console.log(" phg trinh co 2 no");
    }
}
var arrayNumber2 = [1, '2', 3, 5, '9', '4', 3];
let tich = 1;
let cong = 0;
let tich1 =1;
for (let x of arrayNumber2) {
    tich *= x;
    cong += parseInt(x);
}
console.log(tich);
console.log(cong);
for(var i =0; i < arrayNumber2.length; i++){
    if(i % 2 == 0){
        console.log();
        }
    }

var date = 30;

switch (date) {
    case 31:
        console.log('January ');
        console.log('March');
        console.log('May');
        console.log('July');
        console.log('August');
        console.log('Octorber');
        console.log('December');
        break;
    case 30:
        console.log('April');
        console.log('June');
        console.log('September');
        console.log('November');

        break;
    case 29:
        console.log('February');
        break;
}


// function showvalueInput(){
//     var y = document.getElementById('password').value;
//     console.log ("demo password :" , y);
// }

// var listPassword = [
// {
//     id :1,
    
//     password :123456
    
// },
// {
//     id :2,
    
//     password : 313131
    
// },
// {
//     id :3,
    
//     password : 121212,
    
// }
// ];
// function searchPassword(){
//     var password = document.getElementById('password').value;
//     if(password==''){
//         alert('giá trị tìm kiếm k đc để trống');
//         return;
//     }
//     var tempPassword =false;
//     for( var l =0 ; l< listPassword.length; l++){
        
//         if (listPassword[l].password == password){
//             console.log("tồn tại phần tửu trùng tên ",password);
//             tempPassword= true;
//         }
//     }
//     if(!tempPassword)
//     console.log("no data");
// }
function showvalueInput(){
    var y = document.getElementById('email').value;
    console.log ("demo email :" , y);
}

var listEmail = [
{
    id :1,
    email : "abc@gmail.com",
    password :123456
    
},
{
    id :2,
    email : "cde@gmail.com",
    password : 313131
    
},
{
    id :3,
    email : "efg@gmail.com",
    password : 121212,
    
}
];
function searchEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email==''){
        alert('giá trị tìm kiếm k đc để trống');
        return;
    }
    if(password==''){
        alert('giá trị tìm kiếm k đc để trống');
        return;
    }
    var tempEmail =false;
    var tempPassword=false;
    for( var l =0 ; l< listEmail.length; l++){
        
        if (listEmail[l].email == email, listEmail[l].password==password){
            console.log("đăng nhập thành công ");
            tempEmail= true;
            tempPassword= true;
        }
    }
    if(!tempEmail)
    if(!tempPassword)
    console.log("sai tk hoặc mk");
}


