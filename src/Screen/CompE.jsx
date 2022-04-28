import { useStarknetBlock } from "@starknet-react/core";
import { useEffect, useRef, useState } from "react";

export default function CompE() {
    const renderCount = useRef(0);
    renderCount.current += 1;
    const [blockChangeCount, setBlockChangeCount] = useState(0);

    const { data: blockData} = useStarknetBlock()

    useEffect(() => {
        if (!blockData) {
            return;
        }

        const eventTransaction = blockData.transaction_receipts;

        if (!eventTransaction) {
            return;
        }

    }, [blockData?.transaction_receipts]);
    


    useEffect(() => {
        setBlockChangeCount(count => count +1);
    }, [blockData?.block_hash])

    return (
        <div style={{marginTop: "3rem"}}>
            <h3>Component with event subscription</h3>
            <div>Component render count : {renderCount.current}</div>
            <div>Block changes count count : {blockChangeCount}</div>
            <pre>{blockData?.block_hash} ({blockData?.block_number})</pre>
        </div>
    );
}