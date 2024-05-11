import { Component, PropsWithChildren } from 'react';

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
