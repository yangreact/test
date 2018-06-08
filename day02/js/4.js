var sheet=document.styleSheets[1];
var ruleS=sheet.cssRules[4];//keyframes
var ruleM=sheet.cssRules[5];//keyframes
var ruleH=sheet.cssRules[6];//keyframes

var ruleS0=ruleS.cssRules[0];//keyframes 0%{}
var ruleS100=ruleS.cssRules[1];//keyframes 100%{}
var ruleM0=ruleM.cssRules[0];//keyframes 0%{}
var ruleM100=ruleM.cssRules[1];//keyframes 100%{}
var ruleH0=ruleH.cssRules[0];//keyframes 0%{}
var ruleH100=ruleH.cssRules[1];//keyframes 100%{}

var now=new Date();
var s1=now.getSeconds();
var m1=now.getMinutes();
var h1=now.getHours();
//都换算成秒/转一圈的总秒数*360
var s=s1/60*360;
var m=(m1*60+s1)/3600*360;
var h=(h1*3600+m1*60+s1)/(3600*12)*360;

ruleS0.style.transform=`rotate(${s}deg)`;
ruleS100.style.transform=`rotate(${s+360}deg)`;
ruleM0.style.transform=`rotate(${m}deg)`;
ruleM100.style.transform=`rotate(${m+360}deg)`;
ruleH0.style.transform=`rotate(${h}deg)`;
ruleH100.style.transform=`rotate(${h+360}deg)`;