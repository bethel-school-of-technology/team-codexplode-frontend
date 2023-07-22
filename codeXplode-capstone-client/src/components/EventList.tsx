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
} from "@ionic/react";
import { useContext } from "react";
import { trash } from "ionicons/icons";
import "./EventList.css";
import { EventContext } from "../contexts/EventContext";

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
                {/* <IonListHeader color={'warning'}>
									<IonLabel>Incomplete</IonLabel>
								</IonListHeader> */}
                {events.map((event: any) => {
                  // if (event.eventComplete === false) {
                  return (
                    <div>
                      <IonCard>
                        <img
                          alt="Silhouette of mountains"
                          src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Layered-Tortilla-Pie_exps5947_BS2282136A04_15_2b_RMS.jpg"
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
                      {/* <IonItemSliding>
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
												</IonItemSliding> */}
                    </div>
                  );
                  // }
                })}
              </IonList>
            );
          }}
        </EventContext.Consumer>
      </div>
      {/* <div>
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
									// if (event.eventComplete === true) {
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
									//}
								})}
							</IonList>
						);
					}}
				</EventContext.Consumer>
			</div> */}
    </div>
  );
};

export default EventList;
