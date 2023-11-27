import React from 'react';
import estebanImage from './asset/esteban.png'; // Tell webpack this JS file uses this image
import Projects from "./components/projects/Projects";
import Stack from "./components/projects/Stack";
import Studies from "./components/projects/Studies";



class Home extends React.Component {
    render() {
        return (
            <div className={"h-screen w-full flex justify-center"}>
                <div className={"h-full w-10/12 flex flex-col justify-center items-center"}>
                    <header>
                        <img src={estebanImage} alt={'esteban'}/>
                    </header>
                    <div className={"flex justify-between w-full"}>
                        <h1>Esteban GOMEZ</h1>
                        <h2>Développeur web</h2>
                    </div>
                    <div className={"w-full flex flex-col items-center md:flex-row md:justify-between"}>
                        <Projects/>
                        <Stack/>
                        <Studies/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;