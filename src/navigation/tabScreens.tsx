import {ImageSourcePropType} from 'react-native';

import i18n from '../translations';
import OpeningsStack from '../navigation/stacks/OpeningsStack';
import {Endings, Equipment, Window} from '../assets';
import {HOME} from '../utils/route';
import EquipmentStack from './stacks/EquipmentStack';
import EndingsStack from './stacks/EndingsStack';

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
      active: Window,
    },
    name: HOME,
    title: i18n.t('items.openings'),
  },
  {
    component: EquipmentStack,
    default: HOME,
    images: {
      active: Equipment,
    },
    name: 's',
    title: i18n.t('items.equipment'),
  },
  {
    component: EndingsStack,
    default: HOME,
    images: {
      active: Endings,
    },
    name: 'ddd',
    title: i18n.t('items.endings'),
  },
];

export default tabScreens;
