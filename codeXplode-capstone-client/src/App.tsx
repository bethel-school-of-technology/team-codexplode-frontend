import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
	ellipse,
	square,
	triangle,
	listOutline,
	mapOutline
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Tabs from './pages/Tabs';
import Events from './pages/Events';
import EditForm from './pages/EditForm';
// import Profile from './pages/Profile';
// import Recipes from './pages/Recipes';
// import Restaurants from './pages/Restaurants';
// import Reviews from './pages/Reviews';
// import Social from './pages/Social';
// import { Icon } from 'ionicons/dist/types/components/icon/icon';
// import Menu from './pages/Menu';
// import About from './pages/About';
// import EventForm from './pages/EventForm';
// import EventList from './components/EventList';
// import Events from './pages/Events';
import SignUp from './pages/SignUp';
import EventForm from './pages/EventForm';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path='/' component={Login} />
				<Route path='/app' component={Tabs} />
				<Route path='/signup' component={SignUp} /> 
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
