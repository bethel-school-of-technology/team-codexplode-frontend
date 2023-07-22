import * as react from 'react';
import BlankPage from '../components/BlankPage';
import './Login.css';
import {
	colorFillOutline,
	fastFoodOutline,
	homeOutline,
	logOutOutline,
	logoWechat,
	newspaperOutline,
	peopleCircleOutline,
	starHalfOutline
} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import About from './About';
import Events from './Events';
import Recipes from './Recipes';
import Restaurants from './Restaurants';
import Reviews from './Reviews';
import Profile from './Profile';
import Social from './Social';
import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonRouterOutlet,
	IonSplitPane,
	IonTitle,
	IonToolbar
} from '@ionic/react';

const Menu: React.FC = () => {
	const paths = [
		{ name: 'Events', url: '/app/events', icon: homeOutline },
		{ name: 'About', url: '/app/about', icon: newspaperOutline },
		{ name: 'Recipes', url: '/app/recipes', icon: colorFillOutline },
		{ name: 'Restaurants', url: '/app/restaurants', icon: fastFoodOutline },
		{ name: 'Reviews', url: '/app/reviews', icon: starHalfOutline },
		{ name: 'Social', url: '/app/social', icon: logoWechat },
		{ name: 'Profile', url: '/app/profile', icon: peopleCircleOutline }
	];

	return (
		<IonPage>
			<IonSplitPane contentId='main'>
				<IonMenu contentId='main'>
					<IonHeader>
						<IonToolbar>
							<IonTitle>Hello!</IonTitle>
						</IonToolbar>
					</IonHeader>

					<IonContent>
						{paths.map((item, index) => (
							<IonMenuToggle key={index}>
								<IonItem routerLink={item.url} routerDirection='forward'>
									<IonIcon icon={item.icon} slot='start'></IonIcon>
									{item.name}
								</IonItem>
							</IonMenuToggle>
						))}
						<IonButton routerLink='/' routerDirection='back' expand='full'>
							<IonIcon icon={logOutOutline} slot='start'></IonIcon>
							Logout
						</IonButton>
					</IonContent>
				</IonMenu>

				<IonRouterOutlet id='main'>
					<Route path='/app/about' component={About} />
					<Route path='/app/events' component={Events} />
					<Route path='/app/recipes' component={Recipes} />
					<Route path='/app/restaurants' component={Restaurants} />
					<Route path='/app/reviews' component={Reviews} />
					<Route path='/app/profile' component={Profile} />
					<Route path='/app/social' component={Social} />
					<Route path='/app'>
						<Redirect to='/app/events' />
					</Route>
				</IonRouterOutlet>
			</IonSplitPane>
		</IonPage>
	);
};

export default Menu;
