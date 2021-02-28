"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleProgress = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: center;\n  display: inline-block;\n  position: relative;\n  span {\n    font-size: 1.8em;\n  }\n  circle {\n    transition: fill 0.2s ease-in;\n  }\n  z-index: 1;\n"], ["\n  text-align: center;\n  display: inline-block;\n  position: relative;\n  span {\n    font-size: 1.8em;\n  }\n  circle {\n    transition: fill 0.2s ease-in;\n  }\n  z-index: 1;\n"])));
var Path = styled_components_1.default.path(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: ", ";\n  stroke-dasharray: ", ";\n  stroke-linecap: ", ";\n  transition: stroke\n    ", ";\n"], ["\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: ", ";\n  stroke-dasharray: ", ";\n  stroke-linecap: ", ";\n  transition: stroke\n    ", ";\n"])), function (props) { return props.strokeWidth; }, function (props) { return props.strokeDasharray + ", 251.2"; }, function (props) { return props.strokeLinecap || "round"; }, function (props) { return props.transitionDuration + " " + props.transitionEase; });
var StepMarker = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ::after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(13%, -50%);\n    width: 100%;\n    height: 3px;\n    background: linear-gradient(to right, red 50%, blue 50%);\n    background-position: ", "\n      bottom;\n    transition: all ", " ease\n      ", ";\n    background-size: 200% 100%;\n    border-radius: 20px;\n  }\n"], ["\n  ::after {\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(13%, -50%);\n    width: 100%;\n    height: 3px;\n    background: linear-gradient(to right, red 50%, blue 50%);\n    background-position: ", "\n      bottom;\n    transition: all ", " ease\n      ", ";\n    background-size: 200% 100%;\n    border-radius: 20px;\n  }\n"])), function (props) { return (props.completed ? "left" : "right"); }, function (props) { return props.duration + "ms"; }, function (props) { return props.delay + "ms"; });
var CircleProgress = function (_a) {
    var _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "#ffffff" : _b, _c = _a.progressBarColor, progressBarColor = _c === void 0 ? "#D7EBFD" : _c, completedBackgroundColor = _a.completedBackgroundColor, completedProgressBarColor = _a.completedProgressBarColor, label = _a.label, progress = _a.progress, _d = _a.progressBarStyle, progressBarStyle = _d === void 0 ? "round" : _d, _e = _a.progressBarTransitionDuration, progressBarTransitionDuration = _e === void 0 ? 300 : _e, _f = _a.progressBarTransitionEase, progressBarTransitionEase = _f === void 0 ? "ease-in" : _f, _g = _a.progressBarWidth, progressBarWidth = _g === void 0 ? 3 : _g, textColor = _a.textColor, _h = _a.stepDuration, stepDuration = _h === void 0 ? 500 : _h, _j = _a.stepDelay, stepDelay = _j === void 0 ? 200 : _j, _k = _a.withStep, withStep = _k === void 0 ? false : _k, props = __rest(_a, ["backgroundColor", "progressBarColor", "completedBackgroundColor", "completedProgressBarColor", "label", "progress", "progressBarStyle", "progressBarTransitionDuration", "progressBarTransitionEase", "progressBarWidth", "textColor", "stepDuration", "stepDelay", "withStep"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Wrapper, __assign({}, props, { id: "__circle_progress" }),
            withStep && (react_1.default.createElement(StepMarker, { completed: progress === 100, duration: stepDuration, delay: stepDelay })),
            react_1.default.createElement("svg", { id: "svg", viewBox: "0 0 100 100", width: "100", height: "100" },
                react_1.default.createElement("circle", { cx: "50", cy: "50", r: "40", fill: progress === 100
                        ? completedBackgroundColor || backgroundColor
                        : backgroundColor }),
                react_1.default.createElement("path", { stroke: "gray", opacity: 0.2, fill: "none", strokeWidth: progressBarWidth - 1, d: "M50 10\n              a 40 40 0 0 1 0 80\n              a 40 40 0 0 1 0 -80" }),
                react_1.default.createElement(Path, { transitionDuration: progressBarTransitionDuration + "ms", transitionEase: progressBarTransitionEase, strokeWidth: progressBarWidth, strokeLinecap: progressBarStyle, stroke: progress === 100
                        ? completedProgressBarColor || progressBarColor
                        : progressBarColor, strokeDasharray: getProgressStrokeValue(progress), d: "M50 10\n            a 40 40 0 0 1 0 80\n            a 40 40 0 0 1 0 -80" }),
                react_1.default.createElement("text", { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "central", fontSize: ".8m", fontWeight: "200", fill: textColor }, label || progress + "%")))));
};
exports.CircleProgress = CircleProgress;
function getProgressStrokeValue(num) {
    return ((num - 0) / (100 - 0)) * (251.2 - 0) + 0;
}
var templateObject_1, templateObject_2, templateObject_3;
