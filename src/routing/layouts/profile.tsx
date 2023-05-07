import { Outlet } from "react-router-dom";


export default function Root(){

    return(
        <div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}