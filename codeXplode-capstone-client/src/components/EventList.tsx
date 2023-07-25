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
	IonContent
} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { trash } from 'ionicons/icons';
import './EventList.css';
import { EventContext } from '../contexts/EventContext';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

interface ContainerProps {}

const EventList: React.FC<ContainerProps> = () => {
	let { deleteEvent, editEvent, events } = useContext(EventContext);
	const [localUser, setLocalUser] = useState();

	const decodeJWT = (token: any) => {
		try {
			return JSON.parse(atob(token.split('.')[1]));
		} catch (e) {
			return null;
		}
	};

	useEffect(() => {
		console.log(events);
		async function fetch() {
			const token = localStorage.getItem('token');
			let user = await decodeJWT(token);
			setLocalUser(user.userId);
		}
		fetch();
	}, []);

	const eventComplete = (event: any) => {
		editEvent({ ...event, completed: true })
			.then(() => {})
			.catch((error: any) => {
				console.log(error);
			});
	};
	const eventIncomplete = (event: any) => {
		editEvent({ ...event, completed: false })
			.then(() => {})
			.catch((error: any) => {
				console.log(error);
			});
	};
	const slideToDelete = (id: number) => {
		deleteEvent(id)
			.then(() => {})
			.catch((error: any) => {
				console.log(error);
			});
	};

	const checkUser = (event: any) => {
		if (localUser === event.host?._id) {
			return (
				<div>
					<EditButton eventId={event._id} />
					<DeleteButton eventId={event._id} />
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<IonList>
			<IonCard>
				<img
					alt='BBQ Ribs'
					src='https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-4.jpg'
				/>
				<IonCardHeader>
					<IonCardTitle>Barbecue Ribs</IonCardTitle>
					<IonCardSubtitle>American Cuisine</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					Cooked long, slow, and at a low temperature. This American classic plate is a must.
				</IonCardContent>
			</IonCard>
			<IonCard>
				<img
					alt='Masala Dosa'
					src='https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg?w=1280&q=75'
				/>
				<IonCardHeader>
					<IonCardTitle>Masala Dosa</IonCardTitle>
					<IonCardSubtitle>Indian Cuisine</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					Crispy rice and lentil crepes stuffed with spiced and savory potato filling. This is a
					popular breakfast snack.
				</IonCardContent>
			</IonCard>
			<IonCard>
				<img
					alt='Esquite'
					src='https://lilluna.com/wp-content/uploads/2020/12/esquites-resize-13.jpg'
				/>
				<IonCardHeader>
					<IonCardTitle>Esquites</IonCardTitle>
					<IonCardSubtitle>Mexican Cuisine</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					Corn served in a cup with chili powder, mayonnaise, cilantro, and queso fresco. A fun
					snack to share.
				</IonCardContent>
			</IonCard>
			<IonCard>
				<img
					alt='Cassava Cake'
					src='https://simplybakings.com/wp-content/uploads/2019/12/Cassava-Cake-3-1.jpg'
				/>
				<IonCardHeader>
					<IonCardTitle>Cassava Cake</IonCardTitle>
					<IonCardSubtitle>Filipino Cuisine</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					A popular dessert crafted from freshly grated cassava flour and coconut milk baked on
					coals. A traditional cake to share during gatherings.{' '}
				</IonCardContent>
			</IonCard>
			<IonCard>
				<img
					alt='Pani Popo'
					src='https://i0.wp.com/tarasmulticulturaltable.com/wp-content/uploads/2013/03/Pani-Popo-Samoan-Sweet-Coconut-Buns-9-of-9.jpg?resize=768%2C512&ssl=1'
				/>
				<IonCardHeader>
					<IonCardTitle>Pani Popo</IonCardTitle>
					<IonCardSubtitle>Samoan Cuisine</IonCardSubtitle>
				</IonCardHeader>
				<IonCardContent>
					Coconut buns that are light, fluffy yeast rolls soaked in a sweet coconut syrup. A
					delicious treat!
				</IonCardContent>
			</IonCard>
			{events.map((event: any) => {
				return (
					<IonCard key={event._id}>
						<img
							alt='Silhouette of mountains'
							src={
								event.mediaCardUrl ||
								'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Layered-Tortilla-Pie_exps5947_BS2282136A04_15_2b_RMS.jpg'
							}
						/>
						<IonCardHeader>
							<IonCardTitle>{event.title}</IonCardTitle>
							<IonCardSubtitle>{event.cuisine}</IonCardSubtitle>
						</IonCardHeader>

						<IonCardContent>
							<p>{event.description}</p>
							<p>Location: {event.location}</p>
							<p>Meal: {event.meal}</p>
							<hr />
							{checkUser(event)}
						</IonCardContent>
					</IonCard>
				);
			})}
		</IonList>
	);
};

export default EventList;
