import React from 'react';
import { IonList, IonListHeader, IonLabel } from '@ionic/react';
import { useQueue } from '../state/useQueue';
import QueueTrack from './QueueTrack';

const Queue = () => {
  const { tracks, upvote, downvote } = useQueue();

  const renderQueueTracks = () => {
    const sortedTracks = [...tracks].sort((a, b) => b.votes - a.votes);
    return sortedTracks.map(track => {
      const { id, title, artist, votes } = track;
      const handleUpvote = () => upvote(id);
      const handleDownvote = () => downvote(id);
      return (
        <QueueTrack
          key={id}
          title={title}
          artist={artist}
          votes={votes}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
      );
    });
  };

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Queue</IonLabel>
      </IonListHeader>
      {renderQueueTracks()}
    </IonList>
  );
};

export default Queue;
