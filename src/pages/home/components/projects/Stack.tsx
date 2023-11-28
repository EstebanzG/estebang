import React from "react";

class Stack extends React.Component {
    render() {
        return <div className={"w-10/12 mt-3 md:w-3/12 md:mt-0"}>
            <h3 className={"font-montserrat mb-1"}>Stack</h3>
            <div>
                <div className={"flex justify-between mb-1"}>
                    <h4 className={"font-montserrat text-gray-500"}>React</h4>
                    <h4 className={"font-montserrat text-gray-500"}>Symfony</h4>
                </div>
                <div className={"flex justify-between mb-1"}>
                    <h4 className={"font-montserrat text-gray-500"}>Typescript</h4>
                    <h4 className={"font-montserrat text-gray-500"}>Tailwind</h4>
                </div>
                <div className={"flex justify-between mb-1"}>
                    <h4 className={"font-montserrat text-gray-500"}>Flutter</h4>
                    <h4 className={"font-montserrat text-gray-500"}>...</h4>
                </div>
            </div>
        </div>;
    }
}

export default Stack