import {item} from "../../../common/database.type";
import React from "react";

interface props {
    item: item;
}

function YearBox({item}: props) {

    return (
        <div className="w-4/12 flex justify-center italic md:w-3/12">
            {
                item.name !== '' ?
                    <h5>{item.firstYear} - {item.lastYear}</h5> : ''
            }
        </div>
    );
}

export default YearBox;