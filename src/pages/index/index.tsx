import { Component, PropsWithChildren } from 'react';

import 'taro-ui/dist/style/components/button.scss';
import './index.scss';

import Profile from '../../modules/profile';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <Profile />
      </>
    );
  }
}
