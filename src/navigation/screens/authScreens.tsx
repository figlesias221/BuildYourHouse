import Home from '../../screens/Home';
import {HOME} from '../../utils/route';

interface IScreens {
  name: string;
  component: (props: any) => JSX.Element;
  options?: any;
}

const authScreens: IScreens[] = [
  {
    name: 'dd',
    component: Home,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'HOME',
    component: Home,
  },
  {
    name: 'ss',
    component: Home,
  },
];

export default authScreens;
