import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet, View, Text, Image } from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Card,
  TitleAndHeart,
  Title,
  Status,
  PicAndInfo,
  Picture,
  Info,
  Vendedor,
  SellerName,
  Price,
  ContactButton,
  ContactButtonText,
} from './styles';

const styles = StyleSheet.create({
  elevated: {
    borderRadius: 10,
    marginBottom: 20,
  },
});

const stylesCard = StyleSheet.create({
  card: {
    borderRadius: 4,
    padding: 20,
  },
  titleAndHeart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#22a6b3',
  },
  status: {
    fontSize: 13,
    color: '#6ab04c',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  picAndInfo: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  picture: {
    width: 128,
    height: 128,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    marginLeft: 20,

    alignSelf: 'stretch',
  },
  vendedor: {
    color: '#bbb',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  sellerName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#22a6b3',
    marginTop: 5,
  },
  contactButton: {
    marginTop: 12,
    borderRadius: 4,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22a6b3',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default function Market() {
  return (
    <Container>
      <ElevatedView elevation={5} style={styles.elevated}>
        <Card>
          <TitleAndHeart>
            <Title>Styled Components</Title>
            <Icon name="heart-o" size={20} />
          </TitleAndHeart>
          <Status>Disponível</Status>
          <PicAndInfo>
            <Picture
              source={{
                uri:
                  'https://t2.rg.ltmcdn.com/pt/images/1/3/2/docinho_dois_amores_3231_600.jpg',
              }}
            />
            <Info>
              <Vendedor>Vendedor</Vendedor>
              <SellerName>Beatriz Costa</SellerName>
              <Price>R$1,00</Price>
              <ContactButton onPress={() => {}}>
                <Icon name="whatsapp" size={30} color="#fff" />
                <ContactButtonText>Contato</ContactButtonText>
              </ContactButton>
            </Info>
          </PicAndInfo>
        </Card>
      </ElevatedView>

      <ElevatedView elevation={5} style={styles.elevated}>
        <View style={stylesCard.card}>
          <View style={stylesCard.titleAndHeart}>
            <Text style={stylesCard.title}>Stylesheet Create</Text>
            <Icon name="heart-o" size={20} />
          </View>
          <Text style={stylesCard.status}>disponível</Text>
          <View style={stylesCard.picAndInfo}>
            <Image
              style={stylesCard.picture}
              source={{
                uri:
                  'https://t2.rg.ltmcdn.com/pt/images/1/3/2/docinho_dois_amores_3231_600.jpg',
              }}
            />
            <View style={stylesCard.info}>
              <Text style={stylesCard.vendedor}>Vendedor</Text>
              <Text style={stylesCard.sellerName}>Ronilson Pereira</Text>
              <Text style={stylesCard.price}>R$ 19,90</Text>
              <RectButton style={stylesCard.contactButton} onPress={() => {}}>
                <Icon name="whatsapp" size={30} color="#fff" />
                <Text style={stylesCard.contactButtonText}>Contato</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </ElevatedView>
    </Container>
  );
}
