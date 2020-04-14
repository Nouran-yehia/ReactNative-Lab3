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
      backgroundColor: 'white',
    },
    image: {
        width:"250px",
        height: "250px",
        },
    title: {
        fontWeight: 'bold',

    }

  });
  

export default Post;