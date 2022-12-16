import React from 'react';
import { Text, View , StyleSheet , Button , Alert , TouchableOpacity , ImageBackground,  } from 'react-native';
import NewNavBar from '../NewNavBar';


const Body = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require('../../assets/icons/Background.png')} resizeMode="cover" style={{width: '100%' , height: '100%', }}>
          <NewNavBar/>
          <View style={mainBodyStyles.mainBodyContainer}>
          
              <Text style={mainBodyStyles.firstText} >Welcome to</Text>
              <Text style={mainBodyStyles.secondText} >Burger Queen!</Text>
              
                <TouchableOpacity
                    onPress={() => navigation.navigate('MenuCategory')}
                    style={mainBodyStyles.menuButton}>
                    <Text style={mainBodyStyles.menuButtonText} >Menu</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>

    </View>

   
    

  )
}
export default Body;


const mainBodyStyles = StyleSheet.create({
    mainBodyContainer: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: "15%",
        
    },
    
   firstText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
   

   },
   secondText: {
    fontSize: 35,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
   },
   menuButton: {
    width: 88,
    height: 88,
    background: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: '100%',
   },
   menuButtonText: {
    marginTop: '38%',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold'
   },
});
  