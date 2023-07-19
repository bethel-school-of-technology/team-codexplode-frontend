import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { EventProvider } from './contexts/EventContext';
import { UserProvider } from './contexts/UserContext';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <UserProvider>
      <EventProvider>
        <App />
      </EventProvider>
    </UserProvider>
  </React.StrictMode>
);
// Calling the element loader after the app has been rendered the first time
defineCustomElements(window);
