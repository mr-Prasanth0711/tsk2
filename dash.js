


const xhttp=new XMLHttpRequest();
xhttp.onload=function(){
    var Arr=JSON.parse(this.response);
    if(Arr!=null){
    for(let i=0;i<Arr.length;i++)
    {
        var table=document.getElementById('tbl');
        var row=table.insertRow(1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);
        var cell6=row.insertCell(5);
        var cell7=row.insertCell(6);
        var cell8=row.insertCell(7);
        var cell9=row.insertCell(8);
        var cell10=row.insertCell(9);
        var cell11=row.insertCell(10);
        var cell12=row.insertCell(11);
        var cell13=row.insertCell(12);
        var cell14=row.insertCell(13);
        var cell15=row.insertCell(14);
        cell1.innerHTML=Arr[i].id;
        cell2.innerHTML=Arr[i].name;
        cell3.innerHTML=Arr[i].username;
        cell4.innerHTML=Arr[i].email;
        cell5.innerHTML=Arr[i].address.street;
        cell6.innerHTML=Arr[i].address.suite;
        cell7.innerHTML=Arr[i].address.city;
        cell8.innerHTML=Arr[i].address.zipcode;
        cell9.innerHTML=Arr[i].address.geo.lat;
        cell10.innerHTML=Arr[i].address.geo.lng;
        cell11.innerHTML=Arr[i].phone;
        cell12.innerHTML=Arr[i].website;
        cell13.innerHTML=Arr[i].company.name;
        cell14.innerHTML=Arr[i].company.catchPhrase;
        cell15.innerHTML='<button class="btn1" onclick="edit(this)">Edit</button>&nbsp&nbsp<button class="btn2" id="del" onclick="dele(this)">Delete</button>';
    }
}


}
xhttp.open('Get','https://jsonplaceholder.typicode.com/users');
xhttp.send();



//  myFunction=() =>{
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("input1");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("tbl");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }




 edit=(r)=>{
    
  row=r.parentNode.parentNode.rowIndex;
 var name=document.getElementById('tbl').rows[row].cells[1].innerHTML;
 var usename=document.getElementById('tbl').rows[row].cells[2].innerHTML;
 var mail=document.getElementById('tbl').rows[row].cells[3].innerHTML;
 var Phone=document.getElementById('tbl').rows[row].cells[10].innerHTML;

 document.getElementById('name').value=name;
 document.getElementById('uname').value=usename;
 document.getElementById('email').value=mail;
 document.getElementById('num').value=Phone;

 
}




const submit=()=>{
  
     var Name=document.getElementById('name').value;
     var uName=document.getElementById('uname').value;
     var mail=document.getElementById('email').value;
     var Mobile=document.getElementById('num').value;
     
     document.getElementById('tbl').rows[row].cells[1].innerHTML=Name;
     document.getElementById('tbl').rows[row].cells[2].innerHTML=uName;
     document.getElementById('tbl').rows[row].cells[3].innerHTML=mail;
     document.getElementById('tbl').rows[row].cells[10].innerHTML=Mobile;
   
  }

  const dele=(k)=>{
    var value=k.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(value);
} 