import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}

/**
 * Esse é o reducer como acustumamos criar. Esse em especifico, guarda as informações de autenticação.
 * O reducer de autenticação, tem suas actions já estabelecidas, veja que no switch, cada action retorna uma
 * informação especifica para o estado de autenticacão: @auth/SIGN_IN_REQUEST insere true a propriedade loading;
 * @auth/SIGN_IN_SUCCESS trás um payload, que no caso é o token JWT, além se setar signed e loading
 *
 * Interessante notar que diferente de outros padrões utilizados por mim, cada estado dentro do Redux é tratado
 * individualmente, no caso, esse que aborda apenas autenticação, tem seu reducer, que é esse arquivo, suas actions e sagas. Isso no final é um módulo.
 *
 * Outro ponto importante ressaltar, mas certamente será aboardado em outro local, são as ACTIONS, sim, essas de autenticação
 * forão estabelecidas aqui, mas elas podem ser utilizadas em outro modulo, sei lá, o de USER. Bem interessante, vamos amadurecer essa abordagem.
 */
