import {
	IonButton,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonMenu,
	IonMenuToggle,
	IonPage,
	IonRedirect,
	IonRouterOutlet,
	IonSplitPane,
	IonTitle,
	IonToolbar
} from '@ionic/react';
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
import { Navigate, Route } from 'react-router-dom';
import About from './About';
import Events from './Events';
import Recipes from './Recipes';
import Restaurants from './Restaurants';
import Reviews from './Reviews';
import Profile from './Profile';
import Social from './Social';

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
					<Route path='/app/about' element={<About />} />
					<Route path='/app/events' element={<Events />} />
					<Route path='/app/recipes' element={<Recipes />} />
					<Route path='/app/restaurants' element={<Restaurants />} />
					<Route path='/app/reviews' element={<Reviews />} />
					<Route path='/app/profile' element={<Profile />} />
					<Route path='/app/social' element={<Social />} />
					<Route path='/app'>
						<Navigate to='/app/events' />
					</Route>
				</IonRouterOutlet>
			</IonSplitPane>
		</IonPage>
	);
};

export default Menu;
