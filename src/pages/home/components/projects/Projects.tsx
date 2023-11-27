import React from "react";

class Projects extends React.Component {
    render() {
        return <div className={"flex flex-col w-6/12 md:w-3/12"}>
            <h3>Projets</h3>
            <div>
                <div className={"flex justify-between"}>
                    <h4>LetsGetRich</h4>
                    <h4>PlusDeThunes</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4>TaskManager</h4>
                    <h4>LetsGetTipsy</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4>Count</h4>
                    <h4>...</h4>
                </div>
            </div>
        </div>;
    }
}

export default Projects