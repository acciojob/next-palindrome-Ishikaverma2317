function nextPalindrome(num) {
    function isPalindrome(n) {
        let s = n.toString();
        return s === s.split("").reverse().join("");
    }

    num++; // next number se start
    while (!isPalindrome(num)) {
        num++;
    }
    return num;
}

const input = parseInt(prompt("Enter a number:"));
alert(nextPalindrome(input));
