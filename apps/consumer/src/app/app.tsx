import { Suspense, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
const FederatedTransfersPage = lazy(() => import('transfers/Module'));
const FederatedBalancesPage = lazy(() => import('balances/Module'));
const FederatedLedgerPage = lazy(() => import('ledger/Module'));
const FederatedReportsPage = lazy(() => import('reportss/Module'));
// const FederatedSettingsPage = lazy(() => import('settings/Module'));


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
            <Route path="/reports" element={<FederatedReportsPage />} />
            <Route path="/ledger" element={<FederatedLedgerPage />} />
            <Route path="/settings" element={<FederatedLedgerPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
