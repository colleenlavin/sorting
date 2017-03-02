function swap(a, b) {
    return a > b ? true : false;
}

function bubbleSort(arr) {
    // var result = [];
    var temp;
    if (arr.length <= 1) {
        return arr;
    }
    else {
        for (var j = arr.length; j > 0; j--) {
            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i]);
                if (swap(arr[i], arr[i + 1])) {
                    temp = arr[i];
                    console.log(temp);
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    console.log(arr);
                }
            }
        }
        //take the first two consecutive elements

        //pass these to swop
        //return true or false if they need to swap
        //if they don't push each one in order to the result
        //otherwise swap them over and then push

    }
    return arr;
}

// var swapped = false;
    // var sorted = false;
    // while(sorted == false){
    //     for(var i = 0; i < arr.length; i++){
    //         if(arr[i]> arr[i+1]){
    //             var temp = arr[i];
    //             console.log('temp: ' + temp);
    //             arr[i] = arr[i+1];
    //             arr[i+1]= temp;
    //             console.log('new temp: ' + arr[i+ 1]);
    //             swapped = true;
    //             console.log(arr);
    //         }
    //     }
    //     sorted = true;
    // }