import React from "react";
import styled from "styled-components";
var StyledButton = styled.button(function (props) { return ({
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
export var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? true : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? null : _c, _d = _a.size, size = _d === void 0 ? "medium" : _d, _e = _a.label, label = _e === void 0 ? "Button" : _e, onClick = _a.onClick;
    return (<StyledButton onClick={onClick} type="button" size={size} primary={primary} backgroundColor={backgroundColor} style={backgroundColor ? { backgroundColor: backgroundColor } : undefined}>
      {label}
    </StyledButton>);
};
