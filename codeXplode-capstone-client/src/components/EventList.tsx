import {
	IonList,
	IonListHeader,
	IonLabel,
	IonItemSliding,
	IonItem,
	IonCheckbox,
	IonItemOptions,
	IonItemOption,
	IonIcon
} from '@ionic/react';
import { useContext } from 'react';
import EventContext from '../contexts/EventContext';
//import { deleteEvent } from '../contexts/EventProvider'
import { trash } from 'ionicons/icons';
import './EventList.css';

interface ContainerProps {}

const EventList: React.FC<ContainerProps> = () => {
	let { deleteEvent, editEvent } = useContext(EventContext);

	const eventComplete = (event: any) => {
		editEvent(event.id, { title: event.title, completed: true })
			.then(() => {})
			.catch((error: any) => {
				console.log(error);
			});
	};
	const eventIncomplete = (event: any) => {
		editEvent(event.id, { title: event.title, completed: false })
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
					{({ event }) => {
						return (
							<IonList>
								<IonListHeader color={'warning'}>
									<IonLabel>Incomplete</IonLabel>
								</IonListHeader>
								{events.map((event: any) => {
									if (event.eventComplete === false) {
										return (
											<div>
												<IonItemSliding>
													<IonList>
														<IonItem>
															<IonLabel>{event.title}</IonLabel>
															<IonCheckbox
																onIonChange={() => eventIncomplete(event)}
																slot={'end'}
															></IonCheckbox>
														</IonItem>
														<IonItemOptions side={'end'}>
															<IonItemOption
																onClick={() => slideToDelete(event.id)}
																color={'danger'}
															>
																<IonIcon
																	slot={'icon-only'}
																	icon={trash}
																></IonIcon>
															</IonItemOption>
														</IonItemOptions>
													</IonList>
												</IonItemSliding>
											</div>
										);
									}
								})}
							</IonList>
						);
					}}
				</EventContext.Consumer>
			</div>
			<div>
				<EventContext.Consumer>
					{({ events }) => {
						return (
							<IonList>
								<IonListHeader color={'success'}>
									<IonLabel color={'light'} className={'ion-margin'}>
										Complete
									</IonLabel>
								</IonListHeader>
								{events.map((event: any) => {
									if (event.eventComplete === true) {
										return (
											<IonItemSliding>
												<IonItem>
													<IonLabel>{event.title}</IonLabel>
													<IonCheckbox
														onIonChange={() => eventComplete(Event)}
														slot={'end'}
													></IonCheckbox>
												</IonItem>
												<IonItemOptions side={'end'}>
													<IonItemOption
														onClick={() => slideToDelete(event.id)}
														color={'danger'}
													>
														<IonIcon slot={'icon-only'} icon={trash}></IonIcon>
													</IonItemOption>
												</IonItemOptions>
											</IonItemSliding>
										);
									}
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
