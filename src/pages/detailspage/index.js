import React, { useEffect, useState } from 'react'
import { Image, ActivityIndicator } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import styles from './style';

const DetailPage = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    setCharacter(navigation.state.params);
    setLoading(false)
  }, [])


  return (
    <Container>
      {loading ? <ActivityIndicator size="large" color="black" /> :
        <Content style={styles.content}>
          {character && character.map((item, index) =>
            <Card key={index} style={styles.card} >
              <CardItem cardBody style={styles.imgCardItem} >
                <Image style={styles.img}
                  source={{ uri: item.image }}
                />
              </CardItem>
              <CardItem style={styles.txtCardItem}>
                <Body>
                  <Text style={styles.text}>Name</Text>
                  <Text style={styles.textData}>{item.name}</Text>
                  <Text style={styles.text}>Location</Text>
                  <Text style={styles.textData}>{item.location.name}</Text>
                  <Text style={styles.text}>Episode</Text>
                  <Text style={styles.textData}>{item.episode[0]}</Text>
                </Body>
              </CardItem>
            </Card>
          )
          }
        </Content>
      }
    </Container>
  );
}
export default DetailPage;