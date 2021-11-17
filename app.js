



 var matrix = [[]];

var waste = [];

var discarded = [];
var used =[];
var uneaten = [];

var t=0;
var tDis= 0;
var tused = 0;
var tunused = 0;

function listToMatrix(list, elementsPerSubArray) {
    var matrix1 = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix1[k] = [];
        }

        matrix1[k].push(list[i]);
    }


    return matrix1;
}

  
function push1() {
    $(".date").each(function(){
        waste.push($(this).val());
        
       });
       $(".text1").each(function(){
            
        used.push($(this).val());
        
       });
       $(".text2").each(function(){
    
        discarded.push($(this).val());
        
       });
       $(".text3").each(function(){
        
        uneaten.push($(this).val());
        
       });

     matrix = listToMatrix(waste, 4);
     
       
    
}



    



    






$(".xl1").click(function(){
    var wb = XLSX.utils.book_new();
wb.Props = {
    Title: "SheetJS Tutorial",
    Subject: "Test",
    Author: "Red Stapler",
    CreatedDate: new Date()
};
wb.SheetNames.push("Food Inventory");

var ws_data = matrix; 
var ws = XLSX.utils.aoa_to_sheet(ws_data); 
wb.Sheets["Food Inventory"] = ws;

var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}


    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    console.log(matrix);
    
    
});


 
$(".submit").click(function name(params) {
    push1();
    console.log(uneaten);



    waste.forEach( function (items) {
        t+= Number(items);
        waste =[];
   
    });

    used.forEach( function (items) {
       tused += Number(items);
       used =[];
       
   });
   discarded.forEach( function (items) {
       tDis += Number(items);
       discarded = [];
   });
   uneaten.forEach( function (items) {
       tunused += Number(items);
       uneaten = [];
      
   });

            $(".date").val("");
            alert("Items added to database");
   
    
    $(".unused").text(tunused);
    $(".used").text(tused);
    $(".dis").text(tDis);
    $(".waste1").text(t-tused); 
    var element = document.getElementById("div3");
element.classList.add("summary");
});
    // document.getElementById("div5").innerHTML += 
    //  " <tr> <td><input type=\"text\" class=\"form-control date \" ></td> <td><input type=\"text\" class=\"form-control date \" ></td> <td><input type=\"text\" class=\"form-control date \" ></td> <td><input type=\"text\" class=\"form-control date \" ></td> </tr> ";
    //  console.log(t);
    
    
    // var t= 0;

    //  waste.forEach( function (items) {
    //      t+= Number(items);
        // console.log(waste);
        
         
     



     
     

     











     
    

   
    







//a row with 2 columns


// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);


