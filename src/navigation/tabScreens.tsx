import {ImageSourcePropType} from 'react-native';

import i18n from '../translations';
import OpeningsStack from '../navigation/stacks/OpeningsStack';
import {Plus} from '../assets';
import {HOME} from '../utils/route';

interface IScreens {
  name: string;
  component: (props: any) => JSX.Element;
  options?: any;
}

export interface ITabScreens extends IScreens {
  default: string;
  images: {
    active: ImageSourcePropType;
  };
  title: string;
}

const tabScreens: ITabScreens[] = [
  {
    component: OpeningsStack,
    default: HOME,
    images: {
      active: Plus,
    },
    name: HOME,
    title: i18n.t('collection.title'),
  },
  {
    component: OpeningsStack,
    default: HOME,
    images: {
      active: Plus,
    },
    name: 's',
    title: i18n.t('swipe.title'),
  },
  {
    component: OpeningsStack,
    default: HOME,
    images: {
      active: Plus,
    },
    name: 'ddd',
    title: i18n.t('chat.title'),
  },
];

export default tabScreens;
