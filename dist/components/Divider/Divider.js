"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var Line = styled_components_1.default.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  text-align: center;\n  border-bottom: ", " solid\n    ", ";\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n"], ["\n  width: 100%;\n  text-align: center;\n  border-bottom: ", " solid\n    ", ";\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n"])), function (props) { return props.lineThickness; }, function (props) { return props.lineColor; });
var Text = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  padding: 0 10px;\n"], ["\n  background: ", ";\n  color: ", ";\n  padding: 0 10px;\n"])), function (props) { return props.backgroundColor; }, function (props) { return props.textColor; });
var Divider = function (_a) {
    var text = _a.text, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? "white" : _b, _c = _a.textColor, textColor = _c === void 0 ? "black" : _c, _d = _a.lineColor, lineColor = _d === void 0 ? "black" : _d, _e = _a.lineThickness, lineThickness = _e === void 0 ? "1px" : _e;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Line, { lineColor: lineColor, lineThickness: lineThickness },
            react_1.default.createElement(Text, { backgroundColor: backgroundColor, textColor: textColor }, text))));
};
exports.Divider = Divider;
var templateObject_1, templateObject_2;
