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
  IonPage,
  IonNavLink,
  IonRouterLink,
} from "@ionic/react";
import "./Login.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, NavLink } from "react-router-dom";

const Login: React.FC = () => {
  const navigation = useIonRouter();
  let { loginUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const user = {
      username: username,
      password: password,
    };

    loginUser(user)
      .then((token) => {
        localStorage.setItem("token", token);
        navigation.push("/app", "forward", "replace");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <IonPage>
      <IonContent>
        <IonToolbar color="light">
          <IonButtons>
            <IonIcon slot="icon-only" />
          </IonButtons>
          <img className='logo' src="./weliciousicon.png"  />
          <IonTitle className="title">we_Licious</IonTitle>
        </IonToolbar>
        <div className="login">
          <IonList>
            <IonItem>
              <IonInput
                labelPlacement="floating"
                value={username}
                onIonChange={(e) => setUsername(e.detail.value!)}
              >
                <div slot="label">
                  Username <IonText color="danger">(Required)</IonText>
                </div>
              </IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                labelPlacement="floating"
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              >
                <div slot="label">
                  Password <IonText color="danger">(Required)</IonText>
                </div>
              </IonInput>
            </IonItem>
          </IonList>
          <IonButton className="button" onClick={handleLogin}>
            Login
          </IonButton>
        </div>
          <Link className="link" to="/signup">
            Don't have an account? Click here to create one!
          </Link>
      </IonContent>
    </IonPage>
  );
};

export default Login;
