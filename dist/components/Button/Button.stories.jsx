import React from "react";
import { Button } from "./Button";
export default {
    title: "Example/Button",
    component: Button,
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
export var Primary = function (args) { return <Button {...args}/>; };
export var Secondary = function () { return <Button primary={false}/>; };
export var Large = function () { return <Button size="large"/>; };
export var Small = function () { return <Button size="small"/>; };
