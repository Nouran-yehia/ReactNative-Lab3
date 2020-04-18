import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Profile = ()=> {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30}}>
                Hello it's my pleasure that you visit my Profile :)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Profile;