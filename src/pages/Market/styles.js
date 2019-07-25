import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  font-family: 'Open Sans';
`;

export const Card = styled.View`
  border-radius: 4px;
  padding: 20px;
`;

export const TitleAndHeart = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #22a6b3;
`;

export const Status = styled.Text`
  font-size: 13px;
  color: #6ab04c;
  font-weight: bold;
  text-transform: uppercase;
`;

export const PicAndInfo = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-self: stretch;
`;

export const Picture = styled.Image`
  width: 128px;
  height: 128px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin-left: 20px;
`;

export const Vendedor = styled.Text`
  color: #bbb;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SellerName = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #22a6b3;
  margin-top: 5px;
`;

export const ContactButton = styled(RectButton)`
  margin-top: 12px;
  border-radius: 4px;
  flex-direction: row;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  background: #22a6b3;
  padding: 0 23px;
  flex: 1;
`;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
`;
