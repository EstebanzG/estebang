import React, {useEffect, useState} from 'react';
import NameBox from "./NameBox";
import {item} from "../../../common/database.type";
import YearBox from "./YearBox";


interface props {
    items: item[];
}

function Timeline({items}: props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 5)

    })

    return (
        <div className={"relative w-full h-64 md:h-48"}>
            <div className={"absolute w-full h-full flex flex-col justify-center"}>
                <div className={"w-full flex justify-between pb-2 md:w-11/12"}>
                    {items.map((item) => {
                        return (
                            <NameBox
                                item={item}
                            />
                        )
                    })}
                </div>
                <div className={"w-full h-2 bg-black"}></div>
                <div className={"w-full flex justify-between pb-2 pt-2 md:w-11/12"}>
                    {items.map((item) => {
                        return (
                            <YearBox
                                item={item}
                            />
                        )
                    })}
                </div>
            </div>
            <div className={"absolute w-full h-full flex justify-end group"}>
                <div
                    className={`h-full bg-white transition-all duration-2000 ease-out ${loaded ? 'w-0' : 'w-full'}`}></div>
            </div>
        </div>

    );
}

export default Timeline;