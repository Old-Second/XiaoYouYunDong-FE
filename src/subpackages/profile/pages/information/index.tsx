import { Component, PropsWithChildren } from 'react';

import './index.scss';

import Information from '../../modules/information';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <Information />
      </>
    );
  }
}
