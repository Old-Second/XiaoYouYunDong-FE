import { Component, PropsWithChildren } from 'react';

import './index.scss';

import Withdraw from '../../modules/withdraw';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <Withdraw />
      </>
    );
  }
}
