import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonIcon,
	IonItem,
	IonLabel,
	IonMenuButton,
	IonPage,
	IonSearchbar,
	IonSelect,
	IonSelectOption,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import './Restaurants.css';
// import { caretBackCircleOutline, logOutOutline } from 'ionicons/icons';
// import YelpApi from '../hooks/YelpAPi';
// import { useEffect, useState } from 'react';
// import { SearchType } from '../hooks/YelpAPi';
import { starOutline } from 'ionicons/icons';

import { IonList } from '@ionic/react';

const Restaurants: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color='primary'>
					<IonButtons color='start'>
						<IonBackButton defaultHref='/app/events' />
					</IonButtons>
					<IonTitle>Restaurant Reviews</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList>
					<IonCard>
						<img
							alt='BBQ Ribs Restaurant'
							src='https://www.texasmonthly.com/wp-content/uploads/2016/05/Intrinsic-07.jpg'
						/>
						<IonCardHeader>
							<IonCardTitle>Intrinsic Smokehouse Brewery + BBQ Catering</IonCardTitle>
							<IonCardSubtitle>4.5 Stars </IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent>
							Adrian <br />
							5 out of 5 Stars <br />
							This place has the best ribs ever!
						</IonCardContent>
					</IonCard>
					<IonCard>
						<img
							alt='Masala Dosa'
							src='data:image/jpeg;base64,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'
						/>
						<IonCardHeader>
							<IonCardTitle>Kalachandji's</IonCardTitle>
							<IonCardSubtitle>4.7 Stars</IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent>
							Robert <br />
							5 out of 5 Stars <br />
							This place has the best Masala Dosa!
						</IonCardContent>
					</IonCard>
					<IonCard>
						<img
							alt='Esquite'
							src='https://lh3.googleusercontent.com/p/AF1QipMxQuJR5dFv6ZEWw81wljPJBaifAd-Oq9zdZg4q=s680-w680-h510'
						/>
						<IonCardHeader>
							<IonCardTitle>Paleteria ( La Super ) Ice Cream</IonCardTitle>
							<IonCardSubtitle>4.6 Stars</IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent>
							Adrian <br />
							5 out of 5 Stars <br />
							This place has the best esquites. Lots of customizations available to adjust to your
							liking.
						</IonCardContent>
					</IonCard>
					<IonCard>
						<img
							alt='Cassava Cake'
							src='https://images.squarespace-cdn.com/content/v1/5e3c567dae1d31749684e273/1590373870728-773DUD2TF0SWLGTZ223M/Taste%25252BOf%25252BPhilippines%25252BBlack.jpg?format=1500w'
						/>
						<IonCardHeader>
							<IonCardTitle>Taste of Philippines</IonCardTitle>
							<IonCardSubtitle>4.6 Stars</IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent>
							Catherine <br />
							5 out of 5 Stars <br />
							This place has lots of desserts to choose from. My favorite is the homemade cassava
							cake!
						</IonCardContent>
					</IonCard>
					<IonCard>
						<img
							alt='Pani Popo'
							src='https://lh3.googleusercontent.com/p/AF1QipNGFwNM2KzoSDVYxVPAv0J619y0HO6tmltct8RW=s680-w680-h510'
						/>
						<IonCardHeader>
							<IonCardTitle>Hawaiian Bros Island Grill</IonCardTitle>
							<IonCardSubtitle>4.8 Stars</IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent>
							Landis <br />
							5 out of 5 Stars <br />
							Large variety of great food. Highly recommend!
						</IonCardContent>
					</IonCard>
				</IonList>
			</IonContent>
		</IonPage>
	);
};
export default Restaurants;

{
	/* // const Restaurants: React.FC = () => {
// 	const { searchData } = YelpApi();

// 	const [yelpSearch, setYelpSearch] = useState('');
// 	const [type, setType] = useState<SearchType>(SearchType.all);
// 	const [results, setResults] = useState([]);

// 	useEffect(() => {
// 		if (yelpSearch === '') {
// 			setResults([]);
// 			return;
// 		}
// 		const loadResults = async () => {
// 			const result = await searchData(yelpSearch, type);
// 			setResults(result);
// 		};
// 	}, [yelpSearch]);

// 	return (
// 		<IonPage>
// 			<IonHeader>
// 				<IonToolbar color={'primary'}>
// 					<IonButtons slot='start'>
// 						<IonButton routerLink='/app/events' routerDirection='root'>
// 							<IonIcon icon={caretBackCircleOutline}></IonIcon>
// 							events
// 						</IonButton>
// 					</IonButtons>
// 					<IonTitle>Restaurants</IonTitle>
// 				</IonToolbar>
// 			</IonHeader>
// 			<IonSearchbar
// 				value={yelpSearch}
// 				debounce={300}
// 				onIonChange={(e) => setYelpSearch(e.detail.value!)}></IonSearchbar>
// 			<IonItem>
// 				<IonLabel>Select Search Type</IonLabel>
// 				<IonSelect value={type} onIonChange={(e) => setType(e.detail.value!)}>
// 					<IonSelectOption value=''>All</IonSelectOption>
// 					<IonSelectOption value='categories'>Cuisine</IonSelectOption>
// 					<IonSelectOption value='rating'>Ratings</IonSelectOption>
// 					<IonSelectOption value='distance'>Distance</IonSelectOption>
// 				</IonSelect>
// 			</IonItem>
// 			<IonContent className='ion-padding'>
// 				<IonTitle>Yelp Reviews coming!</IonTitle>
// 			</IonContent>
// 		</IonPage>
// 	);
// };

// export default Restaurants; */
}
