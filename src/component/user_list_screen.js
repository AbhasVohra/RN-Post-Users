import React, { useState, useEffect }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import useApi from '../hooks/useApi';
import { ADD_TO_PRIVATE, REMOVE_FROM_PRIVATE } from '../redux/post_actions';
import UserInfo from '../component/user_info';

const UserScreen = ({navigation}) => {

    const [post, setPost] = useState([]);
    const privatePosts = useSelector(state => state)

    const {loading, data} = useApi(`https://jsonplaceholder.typicode.com/users`);
    console.log("DATA: " + data);

    const dispatch = useDispatch();
  const addToPrivate = item => {
    console.log('ADD_TO_PRIVATE: ' + item.id);
    dispatch({type: ADD_TO_PRIVATE, payload: item});
    // setIsAlreadyPrivate(true);
  };
  const removeFromPrivate = item => {
    dispatch({type: REMOVE_FROM_PRIVATE, payload: item});
    // setIsAlreadyPrivate(false);
  };

  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    const Card = ({data}) => {
      return <UserInfo item={data} />;
    //   console.log('DATA ITEM: ' + JSON.stringify(data));
    //   const isAlreadyPrivate = privatePosts.find(post => post.id === data.id);
    // //   const isAlreadyPrivate = false;
    //   return data == undefined ? (
    //     <Text>{'Not Found'}</Text>
    //   ) : (
    //     <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
    //       <View style={{justifyContent: 'center', width: 60}}>
    //         <Image
    //           style={styles.tinyLogo}
    //           source={require('../../assets/private.png')}
    //         />
    //       </View>
    //       <View style={{flexDirection: 'column', flex: 1}}>
    //         <Text style={styles.title}>{data.name}</Text>
    //         <Text style={styles.ids}>{data.email}</Text>
    //         {/* <Text style={styles.ids}>{data.address.city}</Text> */}
    //       </View>
    //       <View style={{justifyContent: 'flex-end'}}>
    //         <TouchableOpacity
    //           style={{right: 10}}
    //           onPress={() =>
    //             isAlreadyPrivate ? removeFromPrivate(data) : addToPrivate(data)
    //           }>
    //           {isAlreadyPrivate ? (
    //             <Image
    //               style={styles.tinyLogo_}
    //               source={require('../../assets/liked.png')}
    //             />
    //           ) : (
    //             <Image
    //               style={styles.tinyLogo_}
    //               source={require('../../assets/like.png')}
    //             />
    //           )}
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   );
    };
    
    // const fetchData = async () => {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data = await response.json();
    //   setPost(data);
    //   console.log("Data: " + post);
    // };
  
    return (
        <SafeAreaView style={{...styles.detailScreen, flex: 1}}>
            <FlatList
            data={data}
            renderItem={(data) => <UserInfo item={data.item}/>}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
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

  export default UserScreen;