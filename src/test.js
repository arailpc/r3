let str = "ksjFlasfljssldfj sa";
let subStr = "fl";
let r = new RegExp(subStr, "ig");
let str2 = str.replace(r, "<span>$&</span>");
console.log(str2);
