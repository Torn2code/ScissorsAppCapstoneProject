import React, { useState } from 'react';
import Routes from './Routes';
import PasteUrl from '../src/components/PasteUrl';
import Analytics from '../src/Pages/Analytics';

const App: React.FC = () => {
  const [shortUrls, setShortUrls] = useState<string[]>([]);

  const handleUrlShortened = (shortUrl: string) => {
    setShortUrls([...shortUrls, shortUrl]);
  };

  return (
    <div className="app">
      <Routes />
      <PasteUrl onUrlShortened={handleUrlShortened} /> {/* Pass onUrlShortened prop */}
      <Analytics />
    </div>
  );
};

export default App;
