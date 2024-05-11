import { Component, PropsWithChildren } from 'react';

import './index.scss';

import Wallet from '../../modules/wallet';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <Wallet />
      </>
    );
  }
}
