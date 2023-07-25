import {
	IonList,
	IonListHeader,
	IonLabel,
	IonItemSliding,
	IonItem,
	IonCheckbox,
	IonItemOptions,
	IonItemOption,
	IonIcon,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonButton,
	IonPage,
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonSearchbar
} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { caretBackCircleOutline, trash } from 'ionicons/icons';
import { RestaurantContext, SearchType } from '../contexts/RestaurantContext';

interface ContainerProps {}
// const Restaurants: React.FC = () => {
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
const RestaurantList: React.FC<ContainerProps> = () => {
	let { results, getAllResults } = useContext(RestaurantContext);
	const [result, setResult] = useState([]);
	const [type, setType] = useState<SearchType>(SearchType.all);

	// useEffect(() => {
	// 	if getAllResults === () => {
	// 		setResults([]);
	// 		return;
	// 	}
	// })

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer t4t89UCiSnjKrLL_D7-ljoHxfD_iOnmqW3JSYZpsN5lT6Kvuhsys0Vq_7FGQpr-prilXt1VwXI8HN-tBazqFIkkUhvo5u73w3y8YYQWU29oVnt6l_zmUmMK3uZS9ZHYx'
		}
	};

	fetch(
		'https://api.yelp.com/v3/businesses/search?location=Cleveland%2C%20Ohio&radius=20&categories=&locale=en_US&sort_by=rating&offset=15',
		options
	)
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));

	// const decodeJWT = (token: any) => {
	// 	try {
	// 		return JSON.parse(atob(token.split('.')[1]));
	// 	} catch (e) {
	// 		return null;
	// 	}
	// };

	// useEffect(() => {
	// 	console.log(results);
	// 	async function fetch() {
	// 		const token = localStorage.getItem('token');
	// 		let user = await decodeJWT(token);
	// 		setLocalUser(user.userId);
	// 	}
	// 	fetch();
	// }, []);

	// const eventComplete = (event: any) => {
	// 	editEvent({ ...event, completed: true })
	// 		.then(() => {})
	// 		.catch((error: any) => {
	// 			console.log(error);
	// 		});
	// };

	// <IonList></IonList>;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={'primary'}>
					<IonButtons slot='start'>
						<IonButton routerLink='/app/events' routerDirection='root'>
							<IonIcon icon={caretBackCircleOutline}></IonIcon>
							events
						</IonButton>
					</IonButtons>
					<IonTitle>Restaurants</IonTitle>
				</IonToolbar>
			</IonHeader>
			{/* <IonSearchbar
				results={getAllResults}
				debounce={300}
				onIonChange={(e) => setResults(e.result.value!)}></IonSearchbar> */}
			<IonItem>
				{/* <IonLabel>Select Search Type</IonLabel>
				<IonSelect value={type} onIonChange={(e) => setType(e.detail.value!)}>
					<IonSelectOption value=''>All</IonSelectOption>
					<IonSelectOption value='categories'>Cuisine</IonSelectOption>
					<IonSelectOption value='rating'>Ratings</IonSelectOption>
					<IonSelectOption value='distance'>Distance</IonSelectOption>
				</IonSelect> */}
			</IonItem>
			<IonContent className='ion-padding'>
				<IonList>
					{results.map((result: any) => {
						return (
							<IonCard key={result._id}>
								<img
									alt='Silhouette of mountains'
									src='https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Layered-Tortilla-Pie_exps5947_BS2282136A04_15_2b_RMS.jpg'
								/>
								<IonCardHeader>
									<IonCardTitle>{result.title}</IonCardTitle>
									<IonCardSubtitle>{result.cuisine}</IonCardSubtitle>
								</IonCardHeader>

								<IonCardContent>
									<p>{result.description}</p>
									<p>Meal: {result.meal}</p>
									<hr />
								</IonCardContent>
							</IonCard>
						);
					})}
					;
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default RestaurantList;

{
	/* / 		<IonPage>
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
// 		</IonPage>*/
}
