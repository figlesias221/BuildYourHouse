import Equipment from '../../screens/Equipment';

interface IScreens {
  name: string;
  component: (props: any) => JSX.Element;
  options?: any;
}

const equipmentScreens: IScreens[] = [
  {
    name: 'Equipment',
    component: Equipment,
    options: {
      headerShown: false,
    },
  },
];

export default equipmentScreens;
