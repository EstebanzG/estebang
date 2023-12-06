import React from "react";
import Label from "./Label";

interface props {
    projectName: string;
    technologies: string[];
    description: string;
    imageName: string;
    gitUrl: string;
}

function Project({projectName, technologies, description, imageName, gitUrl}: props) {

    const imgPath = require(`../asset/img/projects/${imageName}`)

    return (
        <div className={"flex flex-col justify-between items-center"}>
            <h3 className={"w-full mb-2 font-montserrat font-semibold"}>{ projectName }</h3>
            <div className={"md:flex md:justify-between"}>
                <div className={"md:w-5/12"}>
                    <ul className={"w-full mb-2 flex justify-between flex-wrap font-montserrat text-gray-300 md:w-fit md:mb-5"}>
                        {technologies.map((technology, index) => (
                            <Label key={index} text={technology} />
                        ))}
                    </ul>
                    <p className={"w-full text-justify font-montserrat mb-2"}>
                        { description }
                    </p>
                </div>
                <a href={ gitUrl } className={"md:w-5/12 overflow-hidden"}>
                    <img src={imgPath}
                         className={"md:w-full transition duration-500 ease-in-out hover:scale-105"}
                         alt={"Screenshot of the project homePage"}/>
                </a>
            </div>
        </div>
    );
}

export default Project