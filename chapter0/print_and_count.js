function print_and_count(start, stop, step) {    
    var count = 0;
    var i = start;
    while (i % step != 0 && i < stop) {
        i++;
    }
    while (i <= stop) {
        console.log(i);
        count += 1;
        i += step;
    }
    return count;
}

start = Math.pow(2,9);
stop = Math.pow(2,12);
step = 5
c = print_and_count(start, stop, step);
console.log(c);