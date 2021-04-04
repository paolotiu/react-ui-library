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
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("./Button");
exports.default = {
    title: "Example/Button",
    component: Button_1.Button,
    argTypes: {
        backgroundColor: { control: "color" },
        primary: { control: "boolean" },
        size: {
            control: { type: "select", options: ["small", "medium", "large"] },
        },
        label: { control: "text" },
        onClick: {
            table: {
                disable: true,
            },
        },
    },
};
var Primary = function (args) { return react_1.default.createElement(Button_1.Button, __assign({}, args)); };
exports.Primary = Primary;
var Secondary = function () { return react_1.default.createElement(Button_1.Button, { primary: false }); };
exports.Secondary = Secondary;
var Large = function () { return react_1.default.createElement(Button_1.Button, { size: "large" }); };
exports.Large = Large;
var Small = function () { return react_1.default.createElement(Button_1.Button, { size: "small" }); };
exports.Small = Small;
