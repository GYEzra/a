import { FunctionComponent } from "react";
import { ChildrenProps } from "@/common/children-props.interface";
import Navbar from "../navbar";

const BaseLayout: FunctionComponent<ChildrenProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="base-layout">
                {children}
            </div>
        </>

    );
}

export default BaseLayout;
