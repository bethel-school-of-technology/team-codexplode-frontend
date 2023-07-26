import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Social.css';
import LocationModal from '../components/LocationModal';
import { caretBackCircleOutline } from 'ionicons/icons';

const Social: React.FC = () => (
	<IonPage>
		<IonHeader>
			<IonToolbar color={'primary'}>
				<IonButtons slot='start'>
					<IonButton routerLink='/app/events' routerDirection='root'>
						<IonIcon icon={caretBackCircleOutline}></IonIcon>
						events
					</IonButton>
				</IonButtons>
				<IonTitle>Discover</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent className='ion-padding'>
			<LocationModal
				onDismiss={function (
					data?: string | number | null | undefined,
					role?: string | undefined
				): void {
					throw new Error('Function not implemented.');
				}}
			/>
		</IonContent>
	</IonPage>
);

export default Social;
