import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonSearchbar,
	IonButtons,
	IonMenuButton
} from '@ionic/react';
import './Home.css';
import BlankPage from '../components/BlankPage';

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>we_Licious</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Home;
