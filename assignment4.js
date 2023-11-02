// ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
// তি নটি property থাকবে ।
// Task:
// 1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
// 2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
// দি য়ে replace হবে । (২য় output এর format এ )

function findAddress(ob) {
    if(typeof ob !== "object"){
        return "enter an object";
    }
    else{
        const street = ob.street || "__";
        const house = ob.house || "__";
        const society = ob.society || "__";
        const all = street + "," + house + "," + society;
        return all;
    }
}
const object = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};
const inputValue = findAddress(object);
console.log(inputValue);