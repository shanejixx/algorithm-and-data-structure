// 题目描述
// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100", "5e2", "-123", "3.1416"和"-1E-16"都表示数值。
// 但是"12e", "1a3.14", "1.2.3", "+-5"和"12e+4.3"都不是。


//s字符串
function isNumeric(s)
{
    //负面测试
    //str == null || str.length == 0  undefine
    if(!s){
        return "";
    }
    //功能代码-正则表达式
    return s.match(/[\+\-]?[0-9]*(\.[0-9]*)?([eE][\+\-]?\d+)?/g)[0] === s;
}