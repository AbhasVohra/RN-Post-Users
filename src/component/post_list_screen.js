import React, { useState, useEffect }  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { useSelector } from 'react-redux';

const PostScreen = ({navigation}) => {

    const [post, setPost] = useState([]);
    const privatePosts = useSelector(state => state)
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const Card = ({ item }) => {
      console.log("ITEM: " + item.body);
      const isAlreadyPrivate = privatePosts.find(post => post.id === item.userId);
      return (
          <TouchableOpacity onPress={() => {
            navigation.navigate('Post Details', {
              item: item,
            });
          }}>
          <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.ids}>{"ID: " + item.id}</Text>
              <Text style={styles.ids}>{"User ID: " + item.userId}</Text>
              {isAlreadyPrivate?<Image style = {styles.tinyLogo} source={require("../../assets/private.png")}/>:null}
          </View>
          </TouchableOpacity>
              
          
      );
  };
  
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPost(data);
      console.log("Data: " + post);
    };
  
    return (
        
        
      <SafeAreaView style={{flex: 1, backgroundColor: '#292a32'}}>
          <FlatList
          data={post}
          renderItem={(item) => Card(item)}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
  
    card: {
      margin:'2%',
      width:'96%',
      borderRadius:15,
      padding: 20,
      backgroundColor:'#F4F5FB',
    },
    title: {
      padding: 8,
      fontSize: 16,
      color:'#292a32',
      fontWeight:'600'
    }, 
    ids: {
      textAlign:'left',
      position:'relative',
      padding: 8,
      color:'#292a32',
      fontSize: 12,
      fontWeight:'600',
      bottom:0,
      marginLeft: 8
    },
    tinyLogo:{
        width:20,
        height:20,
        right:26,
        bottom:26,
        position:'absolute',
    }
  });
  
  export default PostScreen;