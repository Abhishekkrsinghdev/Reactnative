
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'



// implemented without image with header

const card = () => {
    return (
        <View style={cardStyle.container}>
        <Card>
            <Image style={cardStyle.image}


                source={require('../assets/icons/veg.png')}
            />

            <Image style={{marginLeft:'30%',marginBottom:'7%'}}


                source={require('../assets/icons/Burger.png')}
            />
            <Text>Smoky BLT Quarter Pounder* with Cheese
                </Text>
            <Text style={{fontWeight:'bold' ,marginLeft:'40%'}}>$20</Text>

        </Card>
        </View>
    );
};
const cardStyle = StyleSheet.create({
    container: {
        
        width: 200,
        height: 180,
       padding:'2%',
    },
    image: {
        width: 12,
        height: 10,
    }

});
export default card;
