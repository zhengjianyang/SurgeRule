/*

万源阅读：https://apps.apple.com/app/id6446446808

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/zhengjianyang/SurgeRule/main/wanyuanyuedu.js

[MITM]
hostname = buy.itunes.apple.com

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
if (result.receipt.bundle_id != "com.lmf.wext") {
  $done({});
}
let receipt = {
  "receipt_type": "Production",
  "quantity": "1",
  "app_item_id": 6446446808,
  "adam_id": 6446446808,
  "receipt_creation_date": "2023-09-19 07:10:41 Etc\/GMT",
  "receipt_creation_date_pst": "2023-09-19 00:10:41 America\/Los_Angeles",
  "purchase_date_ms": "1686002766000",
  "expires_date": "2099-06-06 06:06:06 Etc\/GMT",
  "expires_date_pst": "2099-06-06 06:06:06 America\/Los_Angeles",
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
  "expires_date_ms": "408438036600000",
  "purchase_date_pst": "2023-06-06 06:06:06 America\/Los_Angeles",
  "original_purchase_date": "2023-09-09 10:04:20 Etc\/GMT"
}
let renewal = {
  "expiration_intent": "1",
  "product_id": "vip",
  "is_in_billing_retry_period": "0",
  "auto_renew_product_id": "vip",
  "original_transaction_id": "666666666666666",
  "auto_renew_status": "0"
}
let product_id = 'com.lmf.wext.year';
receipt.product_id = product_id;
renewal.product_id = product_id;
renewal.auto_renew_product_id = product_id;
result.receipt.in_app = [receipt];
result.latest_receipt_info = [receipt];
result.pending_renewal_info = [renewal];
$done({ body: JSON.stringify(result) });
