import { Component, PropsWithChildren } from 'react';

import 'taro-ui/dist/style/components/button.scss';
import './index.scss';

import Activity from '../../modules/activity';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <Activity />
      </>
    );
  }
}
