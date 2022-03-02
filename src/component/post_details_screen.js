import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import useApi from '../hooks/useApi';
import UserInfo from './user_info';

const PostDetailsScreen = ({route, navigation}) => {
  const {userId, id, title, body} = route.params.item;

  const {loading, data} = useApi(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  console.log("DATA DETAILS: " + JSON.stringify(data));

  const navigateToPrivateUsers = () => {
    navigation.navigate('Private Users');
  };

  return (
    <View style={styles.detailScreen}>
      <View style={{flex: 8}}>
        {(loading || data == undefined)?(<Text>{"Loading.."}</Text>):(<UserInfo item={data}/>)}
        <View style={styles.post}>
          <Text style={styles.title_}>{'Post'}</Text>
        </View>
        <View style={styles.card}>
          {/* <Button title="Private Users" onPress={navigateToPrivateUsers} /> */}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.ids}>{body}</Text>
        </View>
      </View>
      {/* <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            isAlreadyPrivate ? removeFromPrivate(data) : addToPrivate(data)
          }>
          <Text style={styles.buttonText}>
            {isAlreadyPrivate
              ? 'Remove User from Favorite'
              : 'Add User as Favorite'}
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  detailScreen: {
    backgroundColor: '#292a32',
    flex: 1,
  },

  bottomBar: {
    flex: 2,

    justifyContent: 'center',
    alignItem: 'center',
  },
  button: {
    backgroundColor: '#FFCC1D',
    justifyContent: 'center',
    alignItem: 'center',
    height: 50,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: '#111',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    margin: '2%',
    width: '96%',
    alignItem: 'center',
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#F4F5FB',
  },
  post: {
    width: '100%',
    alignItem: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#171B1C',
  },
  title: {
    padding: 4,
    fontSize: 16,
    color: '#292a32',
    fontWeight: '600',
  },
  title_: {
    padding: 4,
    fontSize: 20,
    color: '#F4F5FB',
    fontWeight: '600',
  },
  ids: {
    textAlign: 'left',
    position: 'relative',
    padding: 4,
    color: '#292a32',
    fontSize: 12,
    fontWeight: '600',
    bottom: 0,
    marginLeft: 8,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  tinyLogo_: {
    width: 30,
    height: 30,
  },
});

export default PostDetailsScreen;
