let arr = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31, 32,33,34,35,36, 37,38,39,40,42,43,44,45,46,47,48,49,50, 51,52, 53, 54, 55, 56, 57, 58, 59, 60];

console.log(check_missing(arr));
/**
* check_missing: check for missing element in first 45 array elements
* @arr: array to find missing element
* Return: returns missing element or null if no element is missing
*/
function check_missing(arr){
    var start = arr[0];
    for(var i = 0; i < 45; i++)
    {
        if(arr[i] != start)
            return start;
        start++;
        
    }
    return null;
}
