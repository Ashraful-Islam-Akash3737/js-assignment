// ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
// এই array তে সবসময় দইুটি উপাদান থাকবে ।
// Task:
// 1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
// করবে ।
// 2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
// 3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
// Input”

function sortMaker(array) {
    
    let arr1 = array[0];
    // console.log(arr1);
    let arr2 = array[1];
    // console.log(arr2);
    
    if(typeof arr1 !== "number" || typeof arr2 !== "number"){
        return "enter a valid number";
    }
    if(arr1 < 0 || arr2 < 0){
        return"invailed input";
    }
    if(arr1 == arr2){
        return "equal";
    }
    
    else{
        const bigToSmall = [];
        if(arr1 > arr2){
            bigToSmall.push(arr1);
            bigToSmall.push(arr2);
            
        }
        else{
            bigToSmall.push(arr2);
            bigToSmall.push(arr1); 
        }
        return bigToSmall;
    }
    
    
    
}
const input = [2, 4];
const inputValue = sortMaker(input);
console.log(inputValue);