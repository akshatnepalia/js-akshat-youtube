let myDate = new Date();
console.log(myDate); 
console.log(myDate.toString()); // Convert to string
console.log(myDate.toDateString()); // Convert to date string
console.log(myDate.toLocaleString());
console.log(typeof myDate); // Check type

let myCreatedDate = new Date(2025, 0, 9)
console.log(myCreatedDate.toString()); 

let myCreatedDate2 = new Date("-01-14-2025");
console.log(myCreatedDate2.toString()); // Invalid date, will show NaN for month

let myTimestamp = Date.now(); // Get current timestamp
console.log(myTimestamp); // Print timestamp    
console.log(myCreatedDate.getTime());
 // Get timestamp from date object
 let newDate=new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1);