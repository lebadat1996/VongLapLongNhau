let table1= document.getElementById("index");
let resule = "";
 for (i=1;i<=10;i++) {
     resule += "<tr>";
     for (j=1;j<=10;j++){
         resule += "<td>" + i*j+ "</td>";
     }
     resule +="</tr>";
 }
 table1.innerHTML = resule;