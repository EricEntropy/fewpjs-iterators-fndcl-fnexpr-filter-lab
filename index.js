function findMatching(array, string) {
    const match = array.filter(n =>
        n.toUpperCase() === string.toUpperCase());

    if( match !== undefined){
        return match;
    }

    return [];
};

function fuzzyMatch (drivers, string) {
    const match = drivers.filter(driver =>
        driver.substring(0,2) === string);

    if( match !== undefined){
        return match;
    }

    return [];
};

function matchName(drivers, string) {
    const match = drivers.filter(driver =>
        driver.name === string);
    
    if( match !== undefined){
        return match;
    }

    return [];
}