const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const isRound = req.query.round ? "url(#round)" : "";

  const leftText = req.query.lt ? req.query.lt : "left";
  const leftBackColor = req.query.lbc ? req.query.lbc : "gray";
  const leftTextColor = req.query.ltc ? req.query.ltc : "white";
  const leftTextLength = leftText.length * 10;

  const rightText = req.query.rt ? req.query.rt : "right";
  const rightBackColor = req.query.rbc ? req.query.rbc : "orange";
  const rightTextColor = req.query.rtc ? req.query.rtc : "white";
  const rightTextLength = rightText.length * 10;

  const margin = 10;
  const svgData =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${leftTextLength + rightTextLength + 4 * margin}" height="30">
      <defs>
        <clipPath id="round">
          <rect x="0" y="0" rx="${margin}" ry="${margin}" width="${leftTextLength + rightTextLength + 4 * margin}" height="30" opacity="0"/>
        </clipPath>
      </defs>
      <g clip-path="${isRound}">
        <rect x="0" y="0" width="${leftTextLength + 2 * margin}" height="30" style="fill:${leftBackColor}"></rect>
        <text x="${margin}" y="${margin * 2}" textLength="${leftTextLength}" fill="${leftTextColor}">
          ${leftText}
        </text>
        <rect x="${leftTextLength + 2 * margin}" y="0" width="${rightTextLength + margin * 2}" height="30" style="fill:${rightBackColor}"></rect>
        <text x="${leftTextLength + 3 * margin}" y="${margin * 2}" textLength="${rightTextLength}" fill="${rightTextColor}">
          ${rightText}
        </text>
      </g>
    </svg>`;
  res.setHeader('content-type', 'image/svg+xml');
  res.send(svgData);
});

app.listen(3000, function () {
  console.log('Run in http://127.0.0.1:3000');
});