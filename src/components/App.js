import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from 'jdb-components';
import { Routes, RoutesWithTransitions } from './Routes';
import { Header } from './Nav';
function App() {
  const [hasTransition, setHasTransition] = useState(false);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Header />
          {hasTransition ? (
            <RoutesWithTransitions
              hasTransition={hasTransition}
              setHasTransition={() => setHasTransition(!hasTransition)}
            />
          ) : (
            <Routes
              hasTransition={hasTransition}
              setHasTransition={() => setHasTransition(!hasTransition)}
            />
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
