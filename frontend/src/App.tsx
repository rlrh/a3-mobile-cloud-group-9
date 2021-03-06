import React from 'react';
import { Route } from 'react-router-dom';
import { setupConfig, IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Authentication context */
import { AuthProvider } from './state/useAuth';

/* Pages */
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Room from './pages/Room';
import RoomNotFound from './pages/RoomNotFound';
import AddRoom from './pages/AddRoom';
import SignInCallback from './pages/SignInCallback';

/* Google Analytics higher order component */
import withTracker from './withTracker';

const App = () => {
  setupConfig({
    mode: 'ios',
  });

  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/" component={withTracker(Home)} />
            {/*<Route exact path="/rooms" component={withTracker(Rooms)} />*/}
            <Route exact path="/host" component={withTracker(AddRoom)} />
            <Route exact path="/signin" component={withTracker(SignIn)} />
            <Route
              exact
              path="/signin/callback"
              component={withTracker(SignInCallback)}
            />
            <Route exact path="/signout" component={withTracker(SignOut)} />
            <Route exact path="/room/:roomId" component={withTracker(Room)} />
            <Route
              exact
              path="/roomNotFound"
              component={withTracker(RoomNotFound)}
            />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  );
};

export default App;
