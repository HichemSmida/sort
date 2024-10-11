

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        value = arr[i]
        let j = i - 1
        while (j >=0 && arr[j] > value) {
            arr[j + 1] = arr[j]
            j--
        }
  
        arr[j + 1] = value
    }
  
    return arr
}
var array = [95, 48, 77, 106, 15, 94, 3, 52, 11, 80]
console.log(insertion(array))