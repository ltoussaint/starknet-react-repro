import { Provider } from 'starknet';
import { InjectedConnector, StarknetProvider } from '@starknet-react/core';
import Screen from './Screen';

function App() {

  const connectors = [new InjectedConnector()];
  const defaultProvider = new Provider({ baseUrl: "https://hackathon-0.starknet.io" });

  return (
    <StarknetProvider connectors={connectors} defaultProvider={defaultProvider} autoConnect>
      <Screen />
    </StarknetProvider>
  );
}

export default App
