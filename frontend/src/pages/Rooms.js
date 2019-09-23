import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
  IonButton,
  IonFooter,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonAlert,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { useAuth } from '../state/useAuth';

const Rooms = props => {
  const { user } = useAuth();
  const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${user}`,
  };

  const [showAlertCreateRoom, setShowAlertCreateRoom] = useState(false);

  const handleCreateRoom = async () => {
    if (user) {
      const res = await fetch(`https://api.spotify.com/v1/me`, {
        method: 'GET',
        headers: headers,
      });
      const hasPremium = false; //remove hardcode to use above response
      if (!hasPremium) {
        setShowAlertCreateRoom(true);
      } else {
        props.history.push(`${props.match.url}/addRoom`);
      }
    } else {
      setShowAlertCreateRoom(true);
    }
  };

  const setDevice = async id => {};

  //backend api call to get rooms
  const rooms = [
    {
      id: 81124,
      name: 'Sunday nightz >_<',
      location: 'Downtown east',
      playing: 'Chasing the Sun ~The Wanted',
      active: true,
    },
    {
      id: 81114,
      name: 'K popz :)',
      location: 'Utown residences',
      playing: 'Gangnam Style ~PSY',
      active: true,
    },
    {
      id: 82124,
      name: 'Let the bass drop !.!.!',
      location: 'Marina barrage',
      playing: 'Tremor ~Martin Garrix',
      active: false,
    },
    {
      id: 8124,
      name: 'Sunday nightz >_<',
      location: 'Downtown east',
      playing: 'Chasing the Sun ~The Wanted',
      active: true,
    },
    {
      id: 1114,
      name: 'K popz :)',
      location: 'Utown residences',
      playing: 'Gangnam Style ~PSY',
      active: true,
    },
    {
      id: 8214,
      name: 'Let the bass drop !.!.!',
      location: 'Marina barrage',
      playing: 'Tremor ~Martin Garrix',
      active: false,
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Rooms</IonTitle>
          <IonButtons slot="primary">
            {user ? (
              <IonButton href="/signout">Sign Out</IonButton>
            ) : (
              <IonButton href="/signin">Sign In</IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {rooms.map(item => {
          return (
            <IonCard key={item.id} href={`/room/${item.id}`}>
              <IonCardHeader>
                <IonCardSubtitle>{item.location}</IonCardSubtitle>
                <IonCardTitle>{item.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{item.playing}</IonCardContent>
            </IonCard>
          );
        })}
        <IonList></IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={handleCreateRoom}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonAlert
          isOpen={showAlertCreateRoom}
          onDidDismiss={() => setShowAlertCreateRoom(false)}
          header={'You need to sign in with'}
          message={'a <strong>premium</strong> spotify account'}
          buttons={
            !user
              ? [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {},
                  },
                  {
                    text: 'Sign in',
                    handler: () => {
                      props.history.push(`/signin`);
                    },
                  },
                ]
              : [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {},
                  },
                ]
          }
        />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>
            {user
              ? `Your Spotify token is: ${user}`
              : 'Sign in to provide a Spotify token'}
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Rooms;
