let a = [ 1, 2, 7, 6, 4, 9, 12 ];

for (let k = 0; k < a.length; k++) {

    for (let l = 0; l < a.length - l - 1; l++) {

        if (a[l] > a[l + 1]) {

            let t = a[l];

            a[l] = a[l + 1];

            a[l + 1] = t;

        }

    }

}

console.log(a)