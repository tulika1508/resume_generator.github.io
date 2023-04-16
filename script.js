function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("rows",3);
    newNode.classList.add("my-2");
    newNode.setAttribute('placeholder','Enter your work experience');
    
    let workOb=document.getElementById("work");
    let weAddButtonob =document.getElementById("weAddButton");
    
    workOb.insertBefore(newNode,weAddButtonob);
}

function addNewEDField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eduField");
    newNode.setAttribute("rows",3);
    newNode.classList.add("my-2");
    newNode.setAttribute('placeholder','Enter your education');
    
    let eduOb=document.getElementById("edu");
    let eduAddButtonob =document.getElementById("eduAddButton");
    
    eduOb.insertBefore(newNode,eduAddButtonob);
}

function generateCV(){
    
    document.getElementById("nameT").innerHTML=document.getElementById("nameField").value;
    document.getElementById("nameT2").innerHTML=document.getElementById("nameField").value;
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("twitterT").innerHTML=document.getElementById("twitterField").value;
    document.getElementById("profileT").innerHTML=document.getElementById("profileField").value;
    
    //education
    let edu=document.getElementsByClassName("eduField");
    let str="";
    for(let e of edu){
        str=str+`<li> ${e.value}</li>`;
    }

    document.getElementById("eduT").innerHTML=str;

    //work experience
    let wes=document.getElementsByClassName("weField");
    let str2="";
    for(let e of wes){
        str2=str2+`<li> ${e.value}</li>`;
    }

    document.getElementById("weT").innerHTML=str2;

    //image
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();//help in reading files
    reader.readAsDataURL(file);

    reader.onloadend=function(){
        document.getElementById("img").src=reader.result;
    }

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';
    
}

//printing resume
function printCV(){
    window.print();
}