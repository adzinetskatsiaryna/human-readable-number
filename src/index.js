module.exports = function toReadable (number) {
    const onesText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensText = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    if (number === 0) return "zero";
    const hundreds = Math.floor(number / 100);
    //console.log(hundreds)
    let tens = Math.floor((number - hundreds * 100) / 10);
    //console.log(tens)
    let ones = number - hundreds * 100 - tens * 10;
    //console.log(ones)
    if(tens===1){
        tens=0;
        ones= number - hundreds*100;
    }
    const hundredText = hundreds ? onesText[hundreds] +' hundred ' : ' ';
    let result = hundredText + tensText[tens] + onesText[ones];
    return result.trim();

}
