import React from 'react';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';
import {
  BookSaved,
  LocationTick,
  PresentionChart,
  Setting2,
} from 'iconsax-react-native';

//* create ıcon and component

const TabIcon = ({screenName, focused, color, size}) => {
  if (screenName == CHARACTERS)
    return (
      <BookSaved
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == EPISODES)
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == LOCATIONS)
    return (
      <LocationTick
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  if (screenName == SETTINGS)
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
};

export default TabIcon;
