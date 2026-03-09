import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const FederatedTransfers = React.lazy(() => import('transfers/Module'));
const FederatedBalances = React.lazy(() => import('balances/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Homee</Link>
        </li>

        <li>
          <Link to="/transfers">transferss</Link>
        </li>

        <li>
          <Link to="/balances">balancess</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="consumer" />} />

        <Route path="/transfers" element={<FederatedTransfers />} />

        <Route path="/balances" element={<FederatedBalances />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
