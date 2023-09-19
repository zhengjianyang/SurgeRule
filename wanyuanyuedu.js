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
  "quantity": "1",
  "product_id": "com.lmf.wext.month",
  "transaction_id": "70001829429789",
  "original_transaction_id": "70001829429789",
  "purchase_date": "2023-09-19 17:01:30 Etc/GMT",
  "purchase_date_ms": "1695142890000",
  "purchase_date_pst": "2023-09-19 10:01:30 America/Los_Angeles",
  "original_purchase_date": "2023-09-19 17:01:31 Etc/GMT",
  "original_purchase_date_ms": "1695142891000",
  "original_purchase_date_pst": "2023-09-19 10:01:31 America/Los_Angeles",
  "expires_date": "2023-09-22 17:01:30 Etc/GMT",
  "expires_date_ms": "1695402090000",
  "expires_date_pst": "2023-09-22 10:01:30 America/Los_Angeles",
  "web_order_line_item_id": "70000841283507",
  "is_trial_period": "true",
  "is_in_intro_offer_period": "false",
  "in_app_ownership_type": "PURCHASED",
  "subscription_group_identifier": "21355328"
}
let renewal = {
  "auto_renew_product_id": "com.lmf.wext.month",
  "product_id": "com.lmf.wext.month",
  "original_transaction_id": "70001829429789",
  "auto_renew_status": "1"
}
result.receipt.in_app = [receipt];
result.latest_receipt_info = [receipt];
result.pending_renewal_info = [renewal];
$done({ body: JSON.stringify(result) });
