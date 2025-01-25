import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';
import {Colorfilter} from 'iconsax-react-native';

export const CharacterStyle = StyleSheet.create({
  imgcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  imgOne: {
    width: 160,
    height: 160,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.GREEN,
  },
  nameOne: {
    marginVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alivesStatusContainer: {
    backgroundColor: Colors.GREEN,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  deadStatusContainer: {
    backgroundColor: Colors.RED,
    marginVertical: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  status: {
    color: Colors.WHITE,
    margin: 5,
    fontWeight: 'bold',
  },
  statusAliveContainer: {
    borderColor: Colors.GREEN,
  },
  statusDeadContainer: {
    borderColor: Colors.RED,
  },
  sectionTitle: {
    color: Colors.BROWN,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  sectionContainer: {
    margin: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  infContainer: {
    backgroundColor: '#e5ded1',
    padding: 10,
    flex: 1,
  },
  infoBox: {
    backgroundColor: '#e5ded1',
    padding: 10,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});
