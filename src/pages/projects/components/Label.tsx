import React from "react";

interface props {
    text: string;
}

function Label({text} : props) {
    return (
        <li className={"border pl-1 pr-1 rounded-full text-xs h-fit mr-2 w-fit"}>{ text }</li>
    );
}

export default Label