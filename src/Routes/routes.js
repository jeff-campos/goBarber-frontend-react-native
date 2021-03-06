import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import New from './new';

export default [
  {
    name: 'SignIn',
    component: SignIn,
    options: { title: 'Login' },
    isPrivate: false,
  },
  {
    name: 'SignUp',
    component: SignUp,
    options: { title: 'Cadastre-se' },
    isPrivate: false,
  },
  {
    name: 'Dashboard',
    component: Dashboard,
    options: { title: 'Agendamentos' },
    isPrivate: true,
  },
  {
    name: 'New',
    component: New,
    options: { title: 'Agendar', tabBarVisible: false },
    isPrivate: true,
  },
  {
    name: 'Profile',
    component: Profile,
    options: { title: 'Meu perfil' },
    isPrivate: true,
  },
];
