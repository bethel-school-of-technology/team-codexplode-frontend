import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  const navigation = useIonRouter();

  const userLogin = () => {
    navigation.push("/app", "forward", "replace");
  };

  return (
    <IonContent>
      <IonToolbar color="light">
        <IonButtons>
          <IonIcon slot="icon-only" />
        </IonButtons>
        <img src="" />
        <IonTitle className="title">we_Licious</IonTitle>
      </IonToolbar>
      <div className="login">
        <IonList>
          <IonItem>
            <IonInput labelPlacement="floating" type="email" value="">
              <div slot="label">
                Email <IonText color="danger">(Required)</IonText>
              </div>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput labelPlacement="floating" type="password" value="">
              <div slot="label">
                Password <IonText color="danger">(Required)</IonText>
              </div>
            </IonInput>
          </IonItem>
        </IonList>
        <IonButton className="button" onClick={() => userLogin()}>
          login
        </IonButton>
        <p>Don't have an account?</p>
        <p>Click here to create one!</p>
      </div>
    </IonContent>
  );
};

export default Login;
