import React from 'react';
import {genderTypes} from '../../utils/constant';
import {Command, Man, Woman} from 'iconsax-react-native';
import Colors from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.UNKOWN) {
    return <Command size={size} color={Colors.BLACK} />;
  }
};

export default GenderIcon;
