/**
 * 咪咕音乐解锁部分功能
[rewrite_local]
^https://app\.(c\.nf|pd)\.migu\.cn/(\w+)/(listen-url|batchQueryMusicPolicy.do|download-url) url script-request-header https://raw.githubusercontent.com/zhengjianyang/SurgeRule/main/miguMusic.js
^https://app\.c\.nf\.migu\.cn/member/api/marketing/text url reject
^https://app\.pd\.nf\.migu.cn/bmw/marketing-popup url reject
^https://app\.c\.nf\.migu\.cn/column/startup-pic-with-ad url reject
^https://app\.u\.nf\.migu\.cn/bmw/pay/reminder url reject

[MITM]
hostname = *.migu.cn

*/

if ($request.url.indexOf('/strategy/listen-url/') != -1) {
    let headers = $request.headers;
    headers.uid = '15659432583520401615740';
    headers.Cookie = '';
    headers.ce = '';
    headers.bversionid = '';
    $done({ headers });
}

if ($request.url.indexOf('/music/batchQueryMusicPolicy.do') != -1) {
    let headers = $request.headers;
    headers.uid = '15659432583520401615740';
    headers.Cookie = '';
    headers.ce = '';
    headers.bversionid = '';
    $done({ headers });
}

if ($request.url.indexOf('/strategy/download-url/') != -1) {
    let headers = $request.headers;
    headers.uid = '15659432583520401615740';
    headers.Cookie = '';
    headers.ce = '';
    headers.bversionid = '';
    $done({ headers });
}

if ($request.url.indexOf('/column/startup-pic-with-ad') != -1) {
    $done({ body: '"code": "000000","info": "操作成功","data": null' });
}

$done({});
