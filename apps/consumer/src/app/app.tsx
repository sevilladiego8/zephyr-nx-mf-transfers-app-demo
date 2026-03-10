import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
const FederatedTransfersPage = lazy(() => import('transfers/Module'));
const FederatedBalancesPage = lazy(() => import('balances/Module'));

const App = () => {
  const links = [
    { label: 'Transfers', href: '/' },
    { label: 'Balances', href: '/balances' },
    { label: 'Reports', href: '/reports' },
    { label: 'Ledger', href: '/ledger' },
    { label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      <Navbar links={links} />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<FederatedTransfersPage />} />
            <Route path="/balances" element={<FederatedBalancesPage />} />
            <Route path="/reports" element={<FederatedTransfersPage />} />
            <Route path="/ledger" element={<FederatedTransfersPage />} />
            <Route path="/settings" element={<FederatedTransfersPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
