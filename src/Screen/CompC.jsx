import { useContract, useStarknet, useStarknetCall } from "@starknet-react/core";
import { useRef } from "react";
import { uint256ToBN } from "starknet/dist/utils/uint256";

import Erc20Abi from '../abi/erc20.json'

export default function CompC() {
    const renderCount = useRef(0);
    renderCount.current += 1;

    const { contract: tokenContract } = useContract({
        abi: Erc20Abi,
        address: '0x07394cbe418daa16e42b87ba67372d4ab4a5df0b05c6e554d158458ce245bc10',
    })

    const { data: balanceData } = useStarknetCall({
        contract: tokenContract,
        method: 'balanceOf',
        args: "0x0000d54bd22ee12363676caefd9cfa6a7a8acb3045f8eeb90392873762555ca3",
    })

    return (
        <div style={{marginTop: "3rem"}}>
            <h3>Component reading account balance</h3>
            <div>Component render count : {renderCount.current}</div>
            <div>Balance : {balanceData ? uint256ToBN(balanceData).toString(10) : ""}</div>
        </div>
    );
}