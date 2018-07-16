function whoa_that_suckers_huge(min, max) {
    var from_zero_to_upper_bound = max * (max+1) /2
    var from_lower_bound_to_zero = -(min * (min + 1)/2)
    return from_lower_bound_to_zero + from_zero_to_upper_bound;
}
min = -300000
max = 300000
console.log(whoa_that_suckers_huge(min, max));