import classes from './app.module.scss';
export function App() {
  return (
    <div className={classes['generic-page']}>
      <h1>Remote 1</h1>
      <p>This is the Remote 1 application loaded via Module Federation</p>
    
      <div className="container mt-3">
        <p>A small paragraph here.</p>
      </div>
    </div>
  );
}

export default App;
