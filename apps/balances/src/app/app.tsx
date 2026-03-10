import classes from './app.module.scss';

export function App() {
  return (
    <div className={classes['generic-page']}>
      <h1>Balances App</h1>
      <p>This is the Balances App application loaded via Module Federation</p>
    </div>
  );
}

export default App;
