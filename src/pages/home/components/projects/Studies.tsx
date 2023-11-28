import React from "react";

class Studies extends React.Component {
    render() {
        return <div className={"w-10/12 mt-3 md:w-3/12 md:mt-0"}>
            <h3 className={"font-montserrat mb-2"}>Formation</h3>
            <div>
                <div className={"flex justify-between"}>
                    <h4 className={"font-montserrat text-gray-500 mb-1"}>IMT Atlantique</h4>
                    <h4 className={"font-montserrat text-gray-500 mb-1"}>2022 - 2025</h4>
                </div>
                <div className={"flex justify-between"}>
                    <h4 className={"font-montserrat text-gray-500 mb-1"}>IUT Informatique</h4>
                    <h4 className={"font-montserrat text-gray-500 mb-1"}>2020 - 2022</h4>
                </div>
            </div>
        </div>;
    }
}

export default Studies