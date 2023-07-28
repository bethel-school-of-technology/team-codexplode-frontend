import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import './Social.css';
import {
	colorFillOutline,
	fastFoodOutline,
	homeOutline,
	informationCircle,
	informationCircleOutline,
	logOutOutline,
	logoWechat
} from 'ionicons/icons';
import About from './About';
import Events from './Events';
import Recipes from './Recipes';
import Restaurants from './Restaurants';
import Reviews from './Reviews';
import { Redirect, Route, Switch } from 'react-router';
import SignUp from './SignUp';
import EditForm from './EditForm';
import EventForm from './EventForm';

const Tabs: React.FC = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Switch>
					<Route exact path='/app/events' component={Events} />
					<Route path='/app/events/about' component={About} />
					<Route path='/app/events/new' component={EventForm} />
					<Route path='/app/events/:eventId' component={EditForm} />
					<Route path='/app/recipes' component={Recipes} />
					<Route path='/app/restaurants' component={Restaurants} />
					<Route path='/app/reviews' component={Reviews} />
					<Route path='/app/about' component={About} />
					{/* <Route exact path='/app/profile' component={Profile} /> */}
					{/* <Route exact path='/app/social' component={Social} /> */}
					<Route path='/app/signup' component={SignUp} />
					<Route path='/app'>
						<Redirect to='/app/events' />
					</Route>
				</Switch>
			</IonRouterOutlet>

			<IonTabBar slot='bottom'>
				<IonTabButton tab='Recipes' href='/app/recipes'>
					<IonIcon icon={colorFillOutline}></IonIcon>
					<IonLabel>Recipes</IonLabel>
				</IonTabButton>
				<IonTabButton tab='Restaurants' href='/app/restaurants'>
					<IonIcon icon={fastFoodOutline}></IonIcon>
					<IonLabel>Restaurants</IonLabel>
				</IonTabButton>
				<IonTabButton tab='Reviews' href='/app/reviews'>
					<IonIcon icon={logoWechat}></IonIcon>
					<IonLabel>Reviews</IonLabel>
				</IonTabButton>
				<IonTabButton tab='About' href='/app/About'>
					<IonIcon icon={informationCircleOutline}></IonIcon>
					<IonLabel>About</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default Tabs;
