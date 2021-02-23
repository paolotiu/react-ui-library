var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
import { CircleProgress } from "../CircleProgress/CircleProgress";
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: grid;\n  grid-auto-columns: min-content;\n  grid-auto-flow: column;\n"], ["\n  position: relative;\n  display: grid;\n  grid-auto-columns: min-content;\n  grid-auto-flow: column;\n"])));
var ProgressTrack = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  width: 100%;\n  height: 5px;\n  background-color: grey;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  width: 100%;\n  height: 5px;\n  background-color: grey;\n"])));
export var StepProgress = function (_a) {
    var steps = _a.steps, progress = _a.progress;
    return (<>
      <Wrapper>
        {Array.from(Array(steps).keys()).map(function (x, i, arr) {
        return i === arr.length - 1 ? (<CircleProgress progress={progress[i]} key={i}/>) : (<CircleProgress progress={progress[i]} key={i}/>);
    })}
      </Wrapper>
    </>);
};
var templateObject_1, templateObject_2;
