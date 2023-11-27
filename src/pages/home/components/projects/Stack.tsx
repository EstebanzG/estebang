import React from "react";

class Stack extends React.Component {
    render() {
        return <div className={"flex flex-col w-6/12 md:w-3/12"}>
            <h3>Stack</h3>
            <div>
                <div className={"flex justify-between"}>
                    <h4>React</h4>
                    <h4>Symfony</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4>Typescript</h4>
                    <h4>Tailwind</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4>Flutter</h4>
                    <h4>...</h4>
                </div>
            </div>
        </div>;
    }
}

export default Stack