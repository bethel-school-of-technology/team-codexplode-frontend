import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
// import UserList from ',,/components/UserList';

const Users: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Events</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<BlankPage />
				{/* <UserList /> */}
			</IonContent>
		</IonPage>
	);
};

export default Users;
