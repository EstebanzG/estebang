import React from "react";

class Projects extends React.Component {
    render() {
        return <div className={"w-10/12 md:w-3/12"}>
            <h3 className={"font-montserrat mb-2"}>Projets</h3>
            <div>
                <div className={"flex justify-between mb-1"}>
                    <h4 className={"font-montserrat text-gray-500"}>LetsGetRich</h4>
                    <h4 className={"font-montserrat text-gray-500"}>PlusDeThunes</h4>
                </div>
                <div className={"flex justify-between mb-1"}>
                    <h4 className={"font-montserrat text-gray-500"}>TaskManager</h4>
                    <h4 className={"font-montserrat text-gray-500"}>LetsGetTipsy</h4>
                </div>
                <div className={"flex justify-between mb-1"}>
                    <h4 className={"font-montserrat text-gray-500"}>Count</h4>
                    <h4 className={"font-montserrat text-gray-500"}>...</h4>
                </div>
            </div>
        </div>;
    }
}

export default Projects