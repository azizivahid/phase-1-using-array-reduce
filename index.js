const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0 
// Code your solution here
function totalB (strArray) {
    
    for (const el of strArray){
         totalBatteries += el
    }
    console.log( totalBatteries)
}

totalB (batteryBatches)
