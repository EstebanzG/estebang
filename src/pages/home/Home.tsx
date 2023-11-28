import React from 'react';
import estebanImage from './asset/esteban.png'; // Tell webpack this JS file uses this image
import Projects from "./components/projects/Projects";
import Stack from "./components/projects/Stack";
import Studies from "./components/projects/Studies";



class Home extends React.Component {
    render() {
        return (
            <div className={"flex flex-col items-end mt-8 md:items-center"}>
                <header className={"w-11/12 mb-6"}>
                    <img src={estebanImage} className={'object-cover w-full h-96 md:h-auto'} alt={'esteban'} />
                </header>
                <div className={"flex flex-col w-11/12 mb-4 md:flex-row md:justify-between"}>
                    <h1 className={"font-montserrat text-2xl text-black"}>Esteban GOMEZ</h1>
                    <h2 className={"font-montserrat text-2xl text-gray-500"}>Développeur web</h2>
                </div>
                <div className={"flex flex-col w-11/12 md:flex-row md:justify-between"}>
                    <Projects/>
                    <Stack/>
                    <Studies/>
                </div>
            </div>
        );
    }
}

export default Home;