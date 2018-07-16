function leap_year(given_year) {
    if (given_year % 4 == 0) {
        if (given_year % 100 == 0) {
            if (given_year % 400) {
                return true;
            } else{
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}