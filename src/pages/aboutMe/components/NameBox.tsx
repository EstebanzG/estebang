import {item} from "../../../common/database.type";

interface props {
    item: item;
}

function NameBox({item}: props) {

    return (
        <div className="w-4/12 flex flex-col justify-center items-center p-1 md:w-3/12">
            {
                item.name !== '' ?
                    <>
                        <h3 className={"text-center font-semibold"}>{item.name}</h3>
                        <h4 className={"text-center"}>{item.where}</h4>
                    </> : ''
            }
        </div>
    );
}

export default NameBox;