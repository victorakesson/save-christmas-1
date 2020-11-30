const all = [5, 7, 9, 12, 15, 18];
function max() {
    let arr = Math.max(...all);
    console.log(arr)
}

max();
function min() {
    let arr = Math.min(...all);
    console.log(arr)
}

min();
function mean() {
    let arr = (all[0] + all[1] + all[2] + all[3] + all[4] + all[5]) / 6
    console.log(Math.round(arr))
}


