function calculate() {
   binary = document.getElementById("binary").value;
   binary = parseInt(binary, 2);
   document.getElementById("decimal").value = binary;
  
   


   //variable.toString(2);    // Binary
   //variable.toString(8);   // Octal
   //variable.toString(16);  // Hex

   //parseInt(variable, 2);  // Binary to Decimal
   //parseInt(variable, 8);  // Octal to Decimal
   //parseInt(variable, 16); // Hex to Decimal
}