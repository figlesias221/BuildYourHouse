import Home from '../../screens/Home';
import {CHAT, COLLECTION, SETTINGS, SWIPE} from '../../utils/route';

interface IScreens {
  name: string;
  component: (props: any) => JSX.Element;
  options?: any;
}

const authScreens: IScreens[] = [
  {
    name: COLLECTION,
    component: Home,
  },
  {
    name: SWIPE,
    component: Home,
  },
  {
    name: SETTINGS,
    component: Home,
  },
];

export default authScreens;
