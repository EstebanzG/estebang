import React from "react";

class Studies extends React.Component {
    render() {
        return <div className={"flex flex-col w-6/12 md:w-3/12"}>
            <h3>Formation</h3>
            <div>
                <div className={"flex justify-between"}>
                    <h4>IMT Atlantique</h4>
                    <h4>2022 - 2025</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4>IUT Informatique</h4>
                    <h4>2020 - 2022</h4>
                </div>
            </div>
        </div>;
    }
}

export default Studies