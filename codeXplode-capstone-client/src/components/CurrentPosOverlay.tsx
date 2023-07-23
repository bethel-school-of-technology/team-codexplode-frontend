import { IonCardSubtitle, IonNote } from '@ionic/react';
import styles from '../mstylesheets/MapOverlay.module.scss';

export const CurrentPosOverlay = () => (
	<div className={styles.overlaycontainer}>
		<IonCardSubtitle>Current Location</IonCardSubtitle>
		<IonNote color='medium'>
			Click on the button then pick a new point on the map to find new places to
			eat!
		</IonNote>
	</div>
);
