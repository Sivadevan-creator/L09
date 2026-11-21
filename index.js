import { registerRootComponent } from 'expo';

import Exercise2 from './Exercise2';

// registerRootComponent calls AppRegistry.registerComponent('main', () => Exercise2);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Exercise2);
