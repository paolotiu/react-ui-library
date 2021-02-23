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
import React, { useState } from "react";
import { StepProgress } from "./StepProgress";
export default {
    title: "Example/StepProgress",
    component: StepProgress,
};
export var Default = function () {
    var _a = useState({
        0: 30,
        1: 10,
        2: 70,
    }), prog = _a[0], setProg = _a[1];
    return (<>
      <StepProgress steps={3} progress={{
        0: prog[0],
        1: prog[1],
        2: prog[2],
    }}/>
      {[0, 1, 2].map(function (x, i) { return (<input type="range" min={0} max={100} value={prog[i]} onChange={function (e) {
        setProg(function (prev) {
            var _a;
            return __assign(__assign({}, prev), (_a = {}, _a[i] = parseInt(e.target.value), _a));
        });
    }}/>); })}
    </>);
};
