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
	IonCardSubtitle
} from '@ionic/react';
import { useContext } from 'react';
import { trash } from 'ionicons/icons';
import './EventList.css';
import { EventContext } from '../contexts/EventContext';

interface ContainerProps {}

const EventList: React.FC<ContainerProps> = () => {
	let { deleteEvent, editEvent } = useContext(EventContext);

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

	return (
		<div>
			<div>
				<EventContext.Consumer>
					{({ events }) => {
						console.log(events);
						return (
							<IonList>
								{events.map((event: any) => {
									return (
										<div>
											<IonCard>
												<img
													alt='Silhouette of mountains'
													src='https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Layered-Tortilla-Pie_exps5947_BS2282136A04_15_2b_RMS.jpg'
												/>
												<IonCardHeader>
													<IonCardTitle>{event.title}</IonCardTitle>
													<IonCardSubtitle>{event.cuisine}</IonCardSubtitle>
												</IonCardHeader>

												<IonCardContent>
													<p>{event.description}</p>
													<p>Meal: {event.meal}</p>
												</IonCardContent>
											</IonCard>
										</div>
									);
									// }
								})}
							</IonList>
						);
					}}
				</EventContext.Consumer>
			</div>
		</div>
	);
};

export default EventList;
