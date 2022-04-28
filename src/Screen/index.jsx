import { useRef } from 'react';

import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';
import CompD from './CompD';
import CompE from './CompE';

export default function Screen() {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div>
            <h1>Too many useless rerender + last block</h1>
            <div>Page render count : {renderCount.current}</div>
            <CompA />
            <CompB />
            <CompC />
            <CompD />
            <CompE />
        </div>
    )
}