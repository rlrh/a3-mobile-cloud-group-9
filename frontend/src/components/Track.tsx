import React, { Fragment } from 'react';
import { IonBadge, IonLabel } from '@ionic/react';
import { Track as TrackType } from '../hooks/useRoomState/types';

const Track: React.FC<Partial<TrackType>> = ({
  name,
  artists,
  album,
  isExplicit,
  imageSource,
}) => {
  return (
    <Fragment>
      <IonLabel>
        <h2>{name}</h2>
        <h3>{`${artists.join(', ')} • ${album}`}</h3>
        {isExplicit ? <IonBadge color="medium">Explicit</IonBadge> : null}
      </IonLabel>
    </Fragment>
  );
};

export default Track;