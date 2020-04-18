import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import axios from 'axios';

const Post = ({route: { params: { id } } })=> {
    const [post, setPost] = useState({})
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result) => {
        setPost(result.data)
    }).catch((err) =>{
        console.log(err)
    })
})

    return(
            <View style={styles.container}>
                <Text style={styles.title}>{post.title}</Text>
                <Image
                    source={{uri: "https://source.unsplash.com/random"}}
                    style={styles.image}
                />
                <Text>{post.body}</Text>
            </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      padding:10
    },
    image: {
        width:250,
        height: 250,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 15
        },
    title: {
        fontWeight: 'bold',
        fontSize:25,
        marginTop: 7,
        marginBottom:1,

    }

  });
  

export default Post;