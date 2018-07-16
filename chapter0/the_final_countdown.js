function the_final_countdown(param1, param2, param3, param4) {
    var start = param1
    var stop = param3;
    var mult = param2;
    var skip = param4;
    
    var i = start;
    if (mult > 0) {
        while (i <= stop) {
            if (i != skip) {
                console.log(i);
            }
            i += mult;
        }
    } else if (i < 0) {
        while (i >= stop) {
            if (i != skip) {
                console.log(i);
            }
            i += mult;
        }
    }
}