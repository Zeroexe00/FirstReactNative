import React from 'react';
import { StyleSheet, View, Text,FlatList,Image, TouchableHighlight  } from 'react-native';

export default function RecipesScreen({navigation}) {

  const DATA = [
    {
      id:'1',
      title:'receta 1',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'2',
      title:'receta 2',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'3',
      title:'receta 3',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'4',
      title:'receta 4',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'5',
      title:'receta 5',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'6',
      title:'receta 6',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'7',
      title:'receta 7',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'8',
      title:'receta 8',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'9',
      title:'receta 9',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
    {
      id:'10',
      title:'receta 10',
      img_url: {uri:'https://via.placeholder.com/100'}
    },
  ]


  const Item = ({title,img_url}) => (
    <View style={styles.itemContainer}>
      <Image
        source={img_url}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </View>)
  
  const renderItem = ({item}) => (
      <TouchableHighlight onPress={() => navigation.navigate('Receta_Detalles',{...item})}>
        <Item title={item.title} img_url={item.img_url}/>
      </TouchableHighlight>
  )
  return(
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
        Lista de Recetas
      </Text>
      <FlatList data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    textAlign:'center',
    fontSize: 20,
    color:'#ccc'
  },
  title: {
    color: '#ccc',
    fontSize: 18,
  },
  image: {
    display:'flex',
    width: 100,
    height: 100
  }
});