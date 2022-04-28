import { useRef } from "react";

export default function CompA() {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div style={{marginTop: "3rem"}}>
            <h3>Component reading block data</h3>
            <div>Component render count : {renderCount.current}</div>
        </div>
    );
}