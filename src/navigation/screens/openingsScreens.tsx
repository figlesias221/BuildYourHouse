import Openings from '../../screens/Openings';

interface IScreens {
  name: string;
  component: (props: any) => JSX.Element;
  options?: any;
}

const openingsScreens: IScreens[] = [
  {
    name: 'Openings',
    component: Openings,
    options: {
      headerShown: false,
    },
  },
];

export default openingsScreens;
