console.log("hi icet.........");
var name="uasindu";
console.log(name+"is my name ");

function print(){
    console.log("print called....");
}
print();


function getData(){
    var email=document.getElementById('email').value;
    document.getElementById('result').innerHTML=email;
    console.log(email);

  
}

function pass(){
    var m1=parseInt(document.getElementById('m1').value);
    var m2=parseInt(document.getElementById('m2').value);
    var m3=parseInt(document.getElementById('m3').value);
    var m4=parseInt(document.getElementById('m4').value);
    var m5=parseInt(document.getElementById('m5').value);

var sum=m1+m2+m3+m4+m5;
var avg=sum/5;
if(avg>50){
    document.getElementById('pof').innerHTML='pass';
    alert("you passed the exam");
}else{
    document.getElementById('pof').innerHTML='fails';
    alert("|you failed the exam");
}
}


function login(){
    var dbUserName="vikumsandeepa17@gmail.com";
    var dbPassWord="vikum1234";

    
    var userName=document.getElementById('user').value;
    var passWord=document.getElementById('passWord').value;
    if(userName ==dbUserName && passWord==dbPassWord){
        alert("login succes");
    }else{
        alert("login failed...");
    }
   
}

function grade(){
    var s1=parseInt(document.getElementById('s1').value);
    var s2= parseInt(document.getElementById('s2').value);
    var s3= parseInt(document.getElementById('s3').value);
     
    var avg=(s1+s2+s3)/3;

    if(avg>=75){
        document.getElementById('grade').innerHTML='A';
    }else if(avg>=65){
        document.getElementById('grade').innerHTML='B';
    } else if(avg>=55){
document.getElementById('grade').innerHTML='C';
    }
    else if(avg>=45){
        document.getElementById('grade').innerHTML='s';

    }
    else{
        document.getElementById('grade').innerHTML='f';
    }
}


function get(){
var month="january";
 switch(month){
    case"january":
       document.getElementById('month').innerHTML='janawari';

       break;

    case "februrary":
        document.getElementById('month').innerHTML='pebarawari';


 
 }
}



for (var i=0;i<10;i++){
    console.log("hiiiiiiiii");
}


function multiply(){
    var number=parseInt(document.getElementById('n1').value);

    for(var i=1;i<=5;i++){
        number *=i;
    }

    document.getElementById('m').innerHTML=number;
}

function mt(){
 var rc= parseInt(document.getElementById('rc').value);
 var cc=parseInt(document.getElementById('cc').value);

for(var j=1;j<=rc;j++){

 for(var i=1;i<=cc;i++){
    document.getElementById('column').innerHTML=i*j+"";

 }
}

}