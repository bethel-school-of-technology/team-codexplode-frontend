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
import Home from './pages/Home';
import { ellipse, square, triangle } from 'ionicons/icons';

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
import Profile from './pages/Profile';
import Recipes from './pages/Recipes';
import Restaurants from './pages/Restaurants';
import Reviews from './pages/Reviews';
import Social from './pages/Social';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route exact path='/home'>
						<Home />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/profile'>
						<Profile />
					</Route>
					<Route exact path='/recipes'>
						<Recipes />
					</Route>
					<Route exact path='/restaurants'>
						<Restaurants />
					</Route>
					<Route exact path='/reviews'>
						<Reviews />
					</Route>
					<Route exact path='/social'>
						<Social />
					</Route>
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>
				</IonRouterOutlet>
				<IonTabBar slot='bottom'>
					<IonTabButton tab='home' href='/hme'>
						<IonIcon icon='home-outline' />
						<IonLabel>HOME</IonLabel>
					</IonTabButton>
					<IonTabButton tab='recipes' href='/recipes'>
						<IonIcon icon='receipt-outline' />
						<IonLabel>RECIPES</IonLabel>
					</IonTabButton>
					<IonTabButton tab='restaurants' href='/restaurants'>
						<IonIcon icon='fast-food-outline' />
						<IonLabel>RESTAURANTS</IonLabel>
					</IonTabButton>
					<IonTabButton tab='reviews' href='/reviews'>
						<IonIcon icon='star-half-outline' />
						<IonLabel>REVIEWS</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
		</IonReactRouter>
	</IonApp>
);

export default App;
