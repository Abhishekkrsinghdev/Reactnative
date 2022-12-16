import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import CircleList from 'react-native-circle-list'
import NewNavBar from '../NewNavBar';

const MenuCategory = ({ navigation }) => {

  const [food, setfood] = useState('');

  const [foodItem, setFoodItem]= useState([
    {id: 1, name: 'Burger', price: 100},
    {id: 2, name: 'Pizza', price: 350},
    {id: 3, name: 'Fries', price: 150},
    {id: 4, name: 'Coke', price: 200},
    {id: 5, name: 'Sandwich', price: 180},
    {id: 6, name: 'Milk shake', price: 200},
    {id: 7, name: 'cake', price: 100},
    {id: 8, name: 'chocolate', price: 350},
    {id: 9, name: 'sweets', price: 150},
    {id: 10, name: 'hot chips', price: 200},
    {id: 11, name: 'biscuits', price: 180},
    {id: 12, name: 'chips', price: 200},
  ]);



  openPopup= (item) =>{
      console.log("function called", item.id);
    //   let data = foodItem.filter((item) => item.id == itemId)
    //     console.log(data);
      setfood(item.name);
      console.log(item.name);
  }

  return (
   
    

    <SafeAreaView  style={styles.MenuCategoryContainer}>
        <ImageBackground source={require('../../assets/icons/Background.png')} resizeMode="cover" style={{width: '100%' , height: '100%', }}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom:'2%'}}>
                <NewNavBar/>
            </View>
            <Text style={{color: 'white'}} >{this.food}</Text>

            <Text style={styles.text}>{food}</Text>
            
            <View style={styles.sectionContainer}>
                {/* <BackdropBlur intensity={6}/> */}
                    
                    <CircleList
                        data={foodItem}
                        elementCount={foodItem.length}
                        visiblityPadding ={1}
                        radius={240}
                        selectedItemScale={1.40}
                        keyExtractor={ (item) => item.id }
                        renderItem={({item})=> (
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.text} >{item.name}</Text>
                            <TouchableOpacity onPress={()=> openPopup(item)} style={styles.item}>
                            
                                {/* <Text>{item.name}</Text> */}
                                <Text>{item.price}</Text>
                                
                            </TouchableOpacity>
                            
                        </View>
                        )}
                        style={styles.circleContainer}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
                        <Text style={styles.btnText}> Menu</Text>
                        </TouchableOpacity>
                    </View>
                    
            </View>
        </ImageBackground>
    </SafeAreaView>

  );
};
export default MenuCategory;


const styles = StyleSheet.create({
    MenuCategoryContainer: {
       
    },
  text:{
    color: '#ffffff',
    
  },
  sectionContainer: {
    paddingTop: '10%',
    textAlign:'center',
    marginTop: '90%',
    paddingHorizontal: 25,
    paddingBottom:'10%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  item: {
    backgroundColor: 'white',
    // marginTop: 50,
    fontSize: 20,
    padding: 20,
    borderRadius: 100,
    // margin: 50,
  },
  circleContainer: {
    paddingTop: '5%',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    // width:100,
    // height:100,
    alignItems: 'center',
    // marginLeft: '35%',
  },
  btn: {
    width: 88,
    height: 88,
    background: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: "-22%",
  },
  btnText: {
    marginTop: "35%",
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '-5%',
  },
});


