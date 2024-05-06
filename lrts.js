/*

懒人听书
2024年5月6日

[rewrite_local]
^https?:\/\/\w+api\.mting\.info\/yyting\/userclient\/ClientGetUserInfo\.action url script-response-body https://raw.githubusercontent.com/zhengjianyang/SurgeRule/main/lrts.js

[MITM]
hostname = gzapi.mting.info,shapi.mting.info

*/

let result = null;
try {
  result = JSON.parse(typeof $response != "undefined" && $response.body || null);
} catch (error) {
  $done({});
}
if (result === null) {
  $done({});
}
result.feeType = 3;
result.subscribe = 1;
result.vipType = 0;
result.timeRemaining = 9999999999999;
result.vipBuyExpireTime = 9999999999999;
result.vipExpireTime = 9999999999999;
result.vipExpireTimeNonExperience = 9999999999999;
result.purchaseTime = "2066-06-06 06:06:06";
result.userState = 16512;
$done({ body: JSON.stringify(result) });
