"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var Divider_1 = require("./Divider");
exports.default = {
    title: "Example/Divider",
    component: Divider_1.Divider,
    argTypes: {
        backgroundColor: { control: "color" },
        textColor: { control: "color" },
        lineColor: { control: "color" },
        lineThickness: { control: "text" },
        lineStyle: {
            control: {
                type: "select",
                options: [
                    "dotted",
                    "dashed",
                    "solid",
                    "double",
                    "groove",
                    "ridge",
                    "inset",
                    "outset",
                    "none",
                    "hidden",
                ],
                default: "solid",
            },
        },
    },
    args: {
        text: "Hello World",
        lineStyle: "solid",
    },
};
var Default = function (args) { return react_1.default.createElement(Divider_1.Divider, __assign({}, args)); };
exports.Default = Default;
