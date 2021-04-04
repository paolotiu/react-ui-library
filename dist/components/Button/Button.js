"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledButton = styled_components_1.default.button(function (props) { return ({
    fontFamily: "\"Nunito Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
    color: props.primary ? "white" : "#333",
    backgroundColor: props.backgroundColor || props.primary ? "#1ea7fd" : "transparent",
    fontSize: props.size && Sizes[props.size].fontSize,
    boxShadow: props.primary ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
    padding: props.size && Sizes[props.size].padding,
}); });
var Sizes = {
    small: {
        fontSize: "12px",
        padding: "10px 16px",
    },
    medium: {
        fontSize: "14px",
        padding: "11px 20px",
    },
    large: {
        fontSize: "16px",
        padding: "12px 24px",
    },
};
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? true : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? null : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, _e = _a.label, label = _e === void 0 ? "Button" : _e, onClick = _a.onClick;
    return (react_1.default.createElement(StyledButton, { onClick: onClick, type: "button", size: size, primary: primary, backgroundColor: backgroundColor, style: backgroundColor ? { backgroundColor: backgroundColor } : undefined }, label));
};
exports.Button = Button;
