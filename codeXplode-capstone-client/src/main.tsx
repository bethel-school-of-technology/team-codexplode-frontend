import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { EventProvider } from "./contexts/EventContext";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
	<React.StrictMode>
		<EventProvider>
			<App />
		</EventProvider>
	</React.StrictMode>
);
// Calling the element loader after the app has been rendered the first time
defineCustomElements(window);
