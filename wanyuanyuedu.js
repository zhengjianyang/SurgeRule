/*

万源阅读：https://apps.apple.com/app/id6446446808

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/zhengjianyang/ADRule/main/wanyuanyuedu.js

[MITM]
hostname = buy.itunes.apple.com

*/
console.log($environment.system);
