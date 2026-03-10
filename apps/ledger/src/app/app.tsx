import classes from './app.module.scss';

/**
 * Imports from shared-ui don't work
 * @error 'rootDir' is expected to contain all source files.
 * @solution not solved
 */
// import { Button } from '@nx/shared-ui';
// import { Input } from '@nx/shared-ui';
// import { TextArea } from '@nx/shared-ui';

export function App() {
  return (
    <div className={classes['generic-page']}>
      <h1>Ledger App</h1>
      <p>This is the Ledger App application loaded via Module Federation</p>

      <div className="container mt-3">
        <p>A small paragraph here.</p>
      </div>

      {/*<Button
        text="Federate"
        type="button"
        variant="success"
        onClick={() => console.log('Clicked')}
      />*/}
    </div>
  );
}

export default App;
