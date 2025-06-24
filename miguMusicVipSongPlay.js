let body = JSON.parse($response.body);
if (!body) $done({});
let playUrl = body.data && body.data.url;
if (!playUrl) $done({});
console.log("playUrl: " + playUrl);
const duration = body.data.song.duration;
playUrl = playUrl.replace("/MP3_128_16_Stero/","/MP3_320_16_Stero/");
//playUrl = playUrl.replace("/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/","/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/flac/")
//playUrl = playUrl.replace(".mp3",".flac")
body.data.url = playUrl;
body.data.audioFormatType = "HQ";
body.data.auditionsStartTime = 0;
body.data.auditionsLength = duration;
console.log("playUrl: " + playUrl);
console.log("duration: " + duration);
console.log("audioFormatType: " + body.data.audioFormatType);
console.log("auditionsStartTime: " + body.data.auditionsStartTime);
console.log("auditionsLength: " + body.data.auditionsLength);
$done({ body: JSON.stringify(body) });
