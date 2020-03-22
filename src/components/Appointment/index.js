import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Left, Avatar, Info, Time, Name } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.png' }}
        />
        <Info>
          <Name>Jeff Campos</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>
      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
