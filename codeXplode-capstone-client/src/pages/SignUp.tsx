import {
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonList,
	IonListHeader,
	IonMenuButton,
	IonPage,
	IonText,
	IonTitle,
	IonToolbar,
	useIonRouter,
	IonButton
} from '@ionic/react';
//import { Switch } from "react-router-dom";
import BlankPage from '../components/BlankPage';
import './SignUp.css';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const SignUp: React.FC = () => {
	const navigation = useIonRouter();
	let { addUser } = useContext(UserContext);

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	function handleSignUp() {
		const user = {
			username: username,
			password: password,
			firstName: firstName,
			lastName: lastName
		};

		addUser(user)
			.then((userData) => {
				//localStorage.setItem('token', token);
				navigation.push('/', 'forward', 'replace');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<IonPage>
			<IonContent>
				<IonToolbar color='light'>
					<img className='logo2' src='./weliciousicon.png' />
					<IonTitle className='title'>we_Licious</IonTitle>
				</IonToolbar>
				<h1 className='form'>Create your account</h1>
				<div className='signup'>
					<IonList>
						<IonItem>
							<IonInput
								labelPlacement='floating'
								value={firstName}
								onIonInput={(e) => setFirstName(e.detail.value!)}
							>
								<div slot='label'>
									{' '}
									First Name <IonText color='danger'>(Required)</IonText>{' '}
								</div>
							</IonInput>
						</IonItem>
						<IonItem>
							<IonInput
								labelPlacement='floating'
								value={lastName}
								onIonInput={(e) => setLastName(e.detail.value!)}
							>
								<div slot='label'>
									{' '}
									Last Name <IonText color='danger'>(Required)</IonText>{' '}
								</div>
							</IonInput>
						</IonItem>
						<IonItem>
							<IonInput
								labelPlacement='floating'
								value={username}
								onIonInput={(e) => setUsername(e.detail.value!)}
							>
								<div slot='label'>
									{' '}
									Username <IonText color='danger'>(Required)</IonText>{' '}
								</div>
							</IonInput>
						</IonItem>
						<IonItem>
							<IonInput
								labelPlacement='floating'
								type='password'
								value={password}
								onIonInput={(e) => setPassword(e.detail.value!)}
							>
								<div slot='label'>
									{' '}
									Password <IonText color='danger'>(Required)</IonText>{' '}
								</div>
							</IonInput>
						</IonItem>
					</IonList>
				</div>
				<br />

				<IonButton className='button' onClick={handleSignUp}>
					Create Account
				</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default SignUp;
