import { Component, PropsWithChildren } from 'react';

import './index.scss';

import PostActivity from '../../modules/postActivity';

export default class Index extends Component<PropsWithChildren> {
  render() {
    return (
      <>
        <PostActivity />
      </>
    );
  }
}
