import React from 'react';
import { Searchbar } from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


const NewNavBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
        <View style={navStyles.navContainer} >
        <View style={navStyles.userContainer}> 
            <Image
              source={require('../assets/icons/User.png')}
              style={navStyles.user}
            />
        </View>

        <View style={navStyles.searchContainer}>
            <Searchbar 
              placeholder="Search item"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={navStyles.searchBar}
            />
        </View>
        <View style={navStyles.cartContainer}> 
            <Image
              source={require('../assets/icons/Cart.png')}
              style={navStyles.cart}
            />
        </View>
    </View>
  );
};

export default NewNavBar;


const navStyles = StyleSheet.create({
  navContainer: {
    marginTop: "15%",
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  userContainer:{
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#BEBEBE",
    width: 43,
    height: 44,
    background: "#BEBEBE",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BEBEBE',
  },
  user: {
    marginTop: "31%",
    marginLeft: "30%",
  },
  searchContainer:{
    flex:2,
  },
  searchBar: {
  
    width: "100%",
    height: 44,
    backgroundColor: "#BEBEBE",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BEBEBE',
    fontFamily: 'Roboto',
    fontSize:   12,
    color: "#585858",
  },
  cartContainer:{
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#BEBEBE",
    width: 43,
    height: 44,
    background: "#BEBEBE",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BEBEBE',
  },
  cart: {
    marginTop: "28%",
    marginLeft: "24%",
  },
   
}); 
