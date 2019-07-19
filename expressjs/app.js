var express = require('express');
var app = express();

app.get('/', function (req, res) {
  const leftText = req.query.left ? req.query.left : "left";
  const leftTextLength = leftText.length*10;
  const rightText = req.query.right ? req.query.right : "right";
  const rightTextLength = rightText.length*10;
  const margin = 10;
  const svgData = 
  `<svg xmlns="http://www.w3.org/2000/svg" width="${leftTextLength+rightTextLength+4*margin}" height="30">
    <rect x="0" y="0" width="${leftTextLength+2*margin}" height="30" style="fill:gray"/>
    <text x="${margin}" y="${margin*2}" textLength="${leftTextLength}" fill="white">${leftText}</text>
    <rect x="${leftTextLength+2*margin}" y="0" width="${rightTextLength+margin*2}" height="30" style="fill:orange"/>
    <text x="${leftTextLength+3*margin}" y="${margin*2}" textLength="${rightTextLength}" fill="white">${rightText}</text>
  </svg>`
  res.setHeader('content-type', 'image/svg+xml')
  res.send(svgData);
});

app.listen(3000, function () {
  console.log('Run in http://127.0.0.1:3000');
});