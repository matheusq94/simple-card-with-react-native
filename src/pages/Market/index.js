import React from 'react';
import { StyleSheet } from 'react-native';
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
    borderRadius: 4,
  },
});

export default function Market() {
  return (
    <Container>
      <ElevatedView elevation={5} style={styles.elevated}>
        <Card>
          <TitleAndHeart>
            <Title>Casadinho da Bia</Title>
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
                <Icon name="whatsapp" size={20} color="#fff" />
                <ContactButtonText>Contato</ContactButtonText>
              </ContactButton>
            </Info>
          </PicAndInfo>
        </Card>
      </ElevatedView>
    </Container>
  );
}
