import { Component, PropsWithChildren } from 'react';

import './index.scss';

import Home from '../../modules/home';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}
