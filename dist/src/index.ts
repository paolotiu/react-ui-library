import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Path = styled.path(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: ", ";\n  stroke-dasharray: ", ";\n  stroke-linecap: ", ";\n"], ["\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: ", ";\n  stroke-dasharray: ", ";\n  stroke-linecap: ", ";\n"])), function (props) {
  return props.strokeWidth;
}, function (props) {
  return props.strokeDasharray + ", 251.2";
}, function (props) {
  return props.strokeLinecap || "round";
});
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: center;\n\n  span {\n    font-size: 1.8em;\n  }\n"], ["\n  text-align: center;\n\n  span {\n    font-size: 1.8em;\n  }\n"])));
var CircleProgress = function CircleProgress(_a) {
  var _b = _a.backgroundColor,
      backgroundColor = _b === void 0 ? "#ffffff" : _b,
      _c = _a.progressBarColor,
      progressBarColor = _c === void 0 ? "#3bb3f8" : _c,
      completedBackgroundColor = _a.completedBackgroundColor,
      completedProgressBarColor = _a.completedProgressBarColor,
      label = _a.label,
      progress = _a.progress,
      _d = _a.progressBarStyle,
      progressBarStyle = _d === void 0 ? "round" : _d,
      textColor = _a.textColor,
      props = __rest(_a, ["backgroundColor", "progressBarColor", "completedBackgroundColor", "completedProgressBarColor", "label", "progress", "progressBarStyle", "textColor"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper, props, /*#__PURE__*/React.createElement("svg", {
    id: "svg",
    viewBox: "0 0 100 100",
    width: "100",
    height: "100"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "40",
    fill: progress === 100 ? completedBackgroundColor || backgroundColor : backgroundColor
  }), /*#__PURE__*/React.createElement(Path, {
    fill: "none",
    strokeWidth: 3,
    strokeLinecap: progressBarStyle,
    stroke: progress === 100 ? completedProgressBarColor || progressBarColor : progressBarColor,
    strokeDasharray: getProgressStrokeValue(progress),
    d: "M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
  }), /*#__PURE__*/React.createElement("text", {
    x: "50%",
    y: "50%",
    "text-anchor": "middle",
    dominantBaseline: "central",
    "font-size": ".8m",
    fontWeight: "200",
    fill: textColor
  }, label || progress + "%"))));
};

function getProgressStrokeValue(num) {
  return (num - 0) / (100 - 0) * (251.2 - 0) + 0;
}

var templateObject_1, templateObject_2;

export { CircleProgress };
etProgressStrokeValue(progress),
    d: "M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
  }), /*#__PURE__*/React__default['default'].createElement("text", {
    x: "50%",
    y: "50%",
    "text-anchor": "middle",
    dominantBaseline: "central",
    "font-size": ".8m",
    fontWeight: "200",
    fill: textColor
  }, label || progress + "%"))));
};

function getProgressStrokeValue(num) {
  return (num - 0) / (100 - 0) * (251.2 - 0) + 0;
}

var templateObject_1, templateObject_2;

exports.CircleProgress = CircleProgress;
