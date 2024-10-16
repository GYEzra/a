import { ChildrenProps } from "@/common/children-props.interface";
import { createContext, FunctionComponent, useContext, useState } from "react";



const Web3Context = createContext<any>(null);

const Web3Provider: FunctionComponent<ChildrenProps> = ({ children }) => {
    const [web3, setWeb3] = useState('Welcome to Web3 Provider');


    return <Web3Context.Provider value={web3}></Web3Context.Provider>;
}

export function useWeb3() {
    return useContext(Web3Context);
}






export default Web3Provider;