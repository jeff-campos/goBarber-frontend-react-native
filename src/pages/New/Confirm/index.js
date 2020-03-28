import React, { useMemo } from 'react';
import { CommonActions } from '@react-navigation/native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Background from '~/components/Background';
import api from '~/services/api';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ route, navigation }) {
  const { provider, time } = route.params;

  const dateFormatted = useMemo(
    () =>
      formatRelative(parseISO(time), new Date(), {
        locale: pt,
      }),
    [time],
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    });
    navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: 'Dashboard' }],
      }),
    );
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/120/${provider.name}.png`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar agendamento
        </SubmitButton>
      </Container>
    </Background>
  );
}
