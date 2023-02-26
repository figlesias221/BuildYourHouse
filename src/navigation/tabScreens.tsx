import {ImageSourcePropType} from 'react-native';

import {
  CHAT,
  CHAT_STACK,
  COLLECTION,
  COLLECTION_STACK,
  SETTINGS,
  SETTINGS_STACK,
  SWIPE,
  SWIPE_STACK,
} from '../utils/route';
import i18n from '../translations';
import OpeningsStack from '../navigation/stacks/OpeningsStack';
import {Plus} from '../assets';

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
    default: COLLECTION,
    images: {
      active: Plus,
    },
    name: COLLECTION_STACK,
    title: i18n.t('collection.title'),
  },
  {
    component: OpeningsStack,
    default: SWIPE,
    images: {
      active: Plus,
    },
    name: SWIPE_STACK,
    title: i18n.t('swipe.title'),
  },
  {
    component: OpeningsStack,
    default: CHAT,
    images: {
      active: Plus,
    },
    name: CHAT_STACK,
    title: i18n.t('chat.title'),
  },
];

export default tabScreens;
