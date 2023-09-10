/*

万源阅读：https://apps.apple.com/app/id6446446808

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/zhengjianyang/SurgeRule/main/wanyuanyuedu.js

[MITM]
hostname = buy.itunes.apple.com

*/
var result = JSON.parse(typeof $response != "undefined" && $response.body || null);
for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
  }
}
var UA = $request.headers['user-agent'];
var receipt = {
  "quantity": "1",
  "purchase_date_ms": "1686002766000",
  "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
  "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
  "is_in_intro_offer_period": "false",
  "transaction_id": "666666666666666",
  "is_trial_period": "false",
  "original_transaction_id": "666666666666666",
  "purchase_date": "2023-06-06 06:06:06 Etc\/GMT",
  "product_id": "vip",
  "original_purchase_date_pst": "2023-06-06 06:06:06 America\/Los_Angeles",
  "in_app_ownership_type": "PURCHASED",
  "subscription_group_identifier": "20877951",
  "original_purchase_date_ms": "1686002766000",
  "web_order_line_item_id": "666666666666666",
  "expires_date_ms": "148204937166000",
  "purchase_date_pst": "2023-06-06 06:06:06 America\/Los_Angeles",
  "original_purchase_date": "2023-06-06 06:06:06 Etc\/GMT"
}
var renewal = {
  "expiration_intent": "1",
  "product_id": "vip",
  "is_in_billing_retry_period": "0",
  "auto_renew_product_id": "vip",
  "original_transaction_id": "666666666666666",
  "auto_renew_status": "0"
}
if (UA && UA.includes('Wext/1 CFNetwork/')) {
  var product_id = 'com.lmf.wext.year';
  receipt.product_id = product_id;
  renewal.product_id = product_id;
  renewal.auto_renew_product_id = product_id;
  result.receipt.in_app = [receipt];
  result.latest_receipt_info = [receipt];
  result.pending_renewal_info = [renewal];
  $done({ body: JSON.stringify(result) });
} else {
  $done({});
}
