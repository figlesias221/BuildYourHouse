import Endings from '../../screens/Endings';

interface IScreens {
  name: string;
  component: (props: any) => JSX.Element;
  options?: any;
}

const endingsScreens: IScreens[] = [
  {
    name: 'Endings',
    component: Endings,
    options: {
      headerShown: false,
    },
  },
];

export default endingsScreens;
