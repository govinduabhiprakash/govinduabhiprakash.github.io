var data1={image : "abc.jpeg",name : "Govindu Abhiprakash", designation:"Student & Data Analyst"};
var data2={image : "abhi1.jpg",name : "ABHI", designation:"Software Devoloper"};
var isdata1 = true;
var displaydata;
var changemypic = function(){
    if(isdata1){
        displaydata= data2;
        isdata1 = false;
    }
    else{
        displaydata = data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydesig").innerHTML=displaydata.designation;
}