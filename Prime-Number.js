function checkPrimeNumber(n) {
    let check = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            //False: not prime number
            check = false;
            //break để giảm tải việc xét điều kiện
            break;
        }
    }
    //Lệnh 1: function = check (True/False)
    //Lệnh 2: Trả về giá trị check ban đầu
    return check;
}

const N = 20;
let x = 2;
let cnt = 0;

function displayPrimeNumber() {
    while (x > 0) {
        if (checkPrimeNumber(x)) {
            document.write(x + "<br>");
            cnt++;
        }
        x++;
        if (cnt == N) {
            break;
        }
    }
}

displayPrimeNumber();