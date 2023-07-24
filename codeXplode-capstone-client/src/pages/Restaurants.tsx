import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonSearchbar,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Restaurants.css';
import { caretBackCircleOutline, logOutOutline } from 'ionicons/icons';
import YelpApi from '../hooks/YelpAPi';
import { useEffect, useState } from 'react';
// import { searchData } from '../hooks/YelpAPi'

const Restaurants: React.FC = () => {
	const { searchData } = YelpApi;

	const [yelpSearch, setYelpSearch] = useState('');
	const [type, setType] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		console.log('SEARCH');
	}, [yelpSearch]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonButton routerLink='/app/events' routerDirection='root'>
							<IonIcon icon={caretBackCircleOutline}></IonIcon>
							events
						</IonButton>
					</IonButtons>
					<IonTitle>Restaurants</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonSearchbar></IonSearchbar>

			<IonContent className='ion-padding'>
				<IonTitle>Yelp Reviews coming!</IonTitle>
			</IonContent>
		</IonPage>
	);
};

export default Restaurants;
