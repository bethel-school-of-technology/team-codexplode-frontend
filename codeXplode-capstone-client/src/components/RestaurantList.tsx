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
import { RestaurantContext } from '../contexts/RestaurantContext';

interface ContainerProps {}

const RestaurantList: React.FC<ContainerProps> = () => {
	const { results, getAllResults } = useContext(RestaurantContext);
	const [result, setResults] = useState();

	useEffect(() => {
		console.log(results);
		async function fetch() {
			console.log(results);
			setResults(result);
		}
		fetch();
	}, []);

	return (
		<IonList>
			{results.map((result: any) => {
				return (
					<IonCard key={result.id}>
						<img src={result.image_url} />
						<IonCardHeader>
							<IonCardTitle>{result.name}</IonCardTitle>
							<IonCardSubtitle>{result.rating}</IonCardSubtitle>
						</IonCardHeader>

						<IonCardContent>
							<p>{result.review_count}</p>
							<p>Hours: {result.is_closed}</p>
							<hr />
						</IonCardContent>
					</IonCard>
				);
			})}
		</IonList>
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
