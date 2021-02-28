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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepProgress = exports.Anim = exports.WithLabel = exports.Default = void 0;
var react_1 = __importStar(require("react"));
var CircleProgress_1 = require("./CircleProgress");
exports.default = {
    title: "Example/CircleProgress",
    component: CircleProgress_1.CircleProgress,
    argTypes: {
        progress: {
            control: {
                type: "range",
                options: {
                    min: 0,
                    max: 100,
                },
            },
        },
        backgroundColor: {
            control: "color",
            table: {
                category: "color",
            },
        },
        textColor: {
            control: "color",
            table: {
                category: "color",
            },
        },
        progressBarColor: {
            control: "color",
            table: {
                category: "color",
            },
        },
        completedBackgroundColor: {
            control: "color",
            table: {
                category: "color",
            },
        },
        completedProgressBarColor: {
            control: "color",
            table: {
                category: "color",
            },
        },
        label: { control: "text" },
        progressBarWidth: {
            control: {
                type: "range",
                max: 30,
            },
        },
        progressBarStyle: {
            control: {
                type: "select",
                options: ["round", "butt", "square"],
                default: "round",
            },
        },
        progressBarTransitionDuration: {
            table: {
                category: "animation",
            },
            control: {
                type: "number",
                step: 100,
            },
        },
        progressBarTransitionEase: {
            table: {
                category: "animation",
            },
        },
        className: {
            table: {
                category: "misc",
            },
            control: {
                disable: true,
            },
        },
        style: {
            table: {
                category: "misc",
            },
            control: {
                disable: true,
            },
        },
    },
    args: {
        progress: 0,
    },
};
var Default = function (args) { return (react_1.default.createElement("div", null,
    react_1.default.createElement(CircleProgress_1.CircleProgress, __assign({}, args)))); };
exports.Default = Default;
var WithLabel = function (args) { return (react_1.default.createElement("div", { style: { textAlign: "center" } },
    react_1.default.createElement(CircleProgress_1.CircleProgress, __assign({}, args, { style: { fontFamily: "monospace" } })),
    react_1.default.createElement("div", null, "Uploading..."))); };
exports.WithLabel = WithLabel;
var Anim = function (args) {
    var _a = react_1.useState(args.progress), progress = _a[0], setProgress = _a[1];
    react_1.useEffect(function () {
        setProgress(args.progress);
    }, [args.progress]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(CircleProgress_1.CircleProgress, { progress: progress, completedProgressBarColor: "#71d449" }),
        react_1.default.createElement("div", { style: { display: "grid", maxWidth: "100px", gap: "1em" } },
            react_1.default.createElement("button", { onClick: function () { return setProgress(100); } }, "100%"),
            react_1.default.createElement("button", { onClick: function () { return setProgress(50); } }, "50%"),
            react_1.default.createElement("button", { onClick: function () { return setProgress(0); } }, "0%"))));
};
exports.Anim = Anim;
var StepProgress = function (args) { return (react_1.default.createElement("div", { style: {
        display: "flex",
        alignItems: "center",
    } },
    react_1.default.createElement(CircleProgress_1.CircleProgress, { progress: 80 }),
    react_1.default.createElement(CircleProgress_1.CircleProgress, { progress: 80 }),
    react_1.default.createElement(CircleProgress_1.CircleProgress, { progress: 80 }))); };
exports.StepProgress = StepProgress;
