import { Component, PropsWithChildren } from 'react';

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
