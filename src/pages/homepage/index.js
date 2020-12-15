import React, { useEffect, useState } from 'react'
import { Content, Card, CardItem, Text, Body, Header } from 'native-base';
import { Image, ActivityIndicator, ScrollView } from 'react-native';
import * as Api from './api';
import styles from './style';


const HomePage = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    GetCharacters()
  }, [])

  const GetCharacters = () => {
    Api.getCharacters().then(t => {
      characters.splice(0, characters.length);
      characters.push(t.content);
      setCharacters(characters);
      setLoading(false)
    })
  }
  const GetCharacterInfo = (id) => {
    Api.getCharacterInfo(id).then(t => {
      character.splice(0, character.length);
      character.push(t.content);
      setCharacter(character);
      navigation.navigate('DetailPage', character)
    })

  }

  return (
    <ScrollView>
      {loading ? <ActivityIndicator size="large" color="black" /> :
        <Content style={styles.content}>
          {characters.map((item) =>
            item["results"].map((i, index) => {
              return (
                <Card key={index} style={styles.card} >
                  <CardItem cardBody style={styles.imgCardItem} >
                    <Image style={styles.img}
                      source={{ uri: i.image }}
                    />
                  </CardItem>
                  <CardItem button onPress={() => GetCharacterInfo(i.id)} style={styles.txtCardItem}>
                    <Body>
                      <Text style={styles.text} >{i.name}</Text>
                    </Body>
                  </CardItem>
                </Card>
              )
            })
          )
          }
        </Content>
      }
    </ScrollView>
  )

}

export default HomePage;