import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import './Social.css';
import {
	colorFillOutline,
	fastFoodOutline,
	homeOutline,
	informationCircle,
	informationCircleOutline,
	logOutOutline,
	logoWechat,
	newspaperOutline,
	peopleCircleOutline,
	starHalfOutline
} from 'ionicons/icons';
import About from './About';
import Events from './Events';
import Recipes from './Recipes';
import Restaurants from './Restaurants';
import Reviews from './Reviews';
import Profile from './Profile';
import Social from './Social';
import { Redirect, Route } from 'react-router';
import SignUp from './SignUp';
import EditForm from './EditForm';

const Tabs: React.FC = () => {
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route exact path='/app/events' component={Events} />
				<Route exact path='/app/events/about' component={About} />
				<Route exact path='/app/events/:eventId' component={EditForm} />
				<Route exact path='/app/recipes' component={Recipes} />
				<Route exact path='/app/restaurants' component={Restaurants} />
				<Route exact path='/app/reviews' component={Reviews} />
				<Route exact path='/app/about' component={About} />
				{/* <Route exact path='/app/profile' component={Profile} /> */}
				<Route exact path='/app/social' component={Social} />
				<Route exact path='/app/signup' component={SignUp} />
				<Route exact path='/app'>
					<Redirect to='/app/events' />
				</Route>
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
