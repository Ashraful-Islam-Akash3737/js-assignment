// problem 1
// ত োমাকে cubeNumber() নামে একটা function দেওয়া হয়েছে । functionটা একটা input নাম্বার নিবে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে ।
// 2. Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিন ংফুল মেসেজ রিটার্ন
// করে দিবে ফাংশন থেকে ।

function cubeNumber(number) {
    
    if ( typeof number !== "number"){
        
        return("enter a number");
    }
    
    else{
        const cube = Math.pow(number,3);
        return cube;
    }
   

}
const input =100;
const inputValue = cubeNumber(input);
console.log(inputValue);

 



