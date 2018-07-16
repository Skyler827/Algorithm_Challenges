function flexible_countdown(lownum, highnum, mult) {
    var i = highnum;
    while (i > lownum) {
        console.log(i);
        i -= mult;
    }
}