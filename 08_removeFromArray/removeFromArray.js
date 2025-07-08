//CREATE AND RETURN A NEW ARRAY
// const removeFromArray = function(arr, ...nums) {
//     let arrayToModify = [...arr];
//     nums.forEach(element => {
//         while (arrayToModify.includes(element)) {
//             arrayToModify.splice(arrayToModify.indexOf(element), 1);
//         }
//     });
//     return arrayToModify;
// };

//RETURN THE ORIGINAL ARRAY (Due to the way the testing system is implemented).
const removeFromArray = function(arr, ...nums) {
    nums.forEach(element => {
        while (arr.includes(element)) {
            arr.splice(arr.indexOf(element), 1);
        }
    });
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;