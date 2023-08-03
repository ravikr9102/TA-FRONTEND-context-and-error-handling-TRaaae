import React from 'react';
import Header from './Header';
import Main from './Main';
import ErrorBoundary from '../ErrorBoundary';

class App extends React.Component {
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <Header isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
