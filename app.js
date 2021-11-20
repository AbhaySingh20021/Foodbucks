
var matrix = [[]];   //Variables declaration
var waste = [];
var discarded = []; //Arrays
var used =[];
var uneaten = [];
var t=0;
var tDis= 0;
var tused = 0;  //Ints
var tunused = 0;
var allItems =[];




function listToMatrix(list, elementsPerSubArray) { // Function for converting array to double array
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

  
function push1() {    //  pushing values obtained from web to arrays using jquery
    $(".count").each(function(){
        waste.push($(this).val());
        
       });
       $(".input1").each(function(){
        allItems.push($(this).val());
        
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



     matrix = listToMatrix(allItems, 4);  // array to double array with 4 as a elements per array
     
       
}




$(".xl1").click(function(){  // adding event listener to xl1 button 
    var wb = XLSX.utils.book_new(); // Creating new xl workspace 
wb.Props = {   // storing details of workspace in document
    Title: "SheetJS Tutorial",
    Subject: "Inventory",
    Author: "FOODBUCKS",
    CreatedDate: new Date()
};
wb.SheetNames.push("Food Inventory"); // sheet name

var ws_data = matrix; 
var ws = XLSX.utils.aoa_to_sheet(ws_data); 
wb.Sheets["Food Inventory"] = ws;

var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'}); // writing doc in excel 
function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}


    saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx'); // Saving the sheet with new information
    
    
});


 
$(".submit").click(function name(params) { //  
    push1();
    console.log(uneaten);
    
    waste.forEach( function (items) { // getting information from array and computing them.
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
 
    $(".date").val("");    // Clearing up the input fields
    alert("Items added to database"); // code for alret dialog box
   
    
    $(".unused").text(tunused);  // sending info back to page
    $(".used").text(tused);
    $(".dis").text(tDis);
    $(".waste1").text(t-tused); 
    var element = document.getElementById("div3"); // Adding CSS class to div3 div
        element.classList.add("summary");
});


    // document.getElementById("div5").innerHTML += 
    //  " <tr> <td><input type=\"text\" class=\"form-control date \" ></td> <td><input type=\"text\" class=\"form-control date \" ></td> <td><input type=\"text\" class=\"form-control date \" ></td> <td><input type=\"text\" class=\"form-control date \" ></td> </tr> ";
    //  console.log(t);
    
    
    // var t= 0;

    //  waste.forEach( function (items) {
    //      t+= Number(items);
        // console.log(waste);

        
        
         
        // function totals( arrayname , tname ) {
        //     arrayname.forEach( function (items) { // getting information from array and computing them.
        //         tname+= Number(items);
        //         arrayname =[];
           
        //     });
        
    
            
        // }
    
        // totals(waste , t);
        // console.log(t);
        // totals(used , tused);
        // totals(discarded , tDis);
        // totals(uneaten , tuneaten);



     
     

     











     
    

   
    







//a row with 2 columns


// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const element = document.getElementById("div1");
// element.appendChild(para);


