/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';
import Menu from 'grommet/components/Menu';

class AboutPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Menu className='spec-role-menu' label='Active'>
          <div>Deactivate</div>
          <div className='spec-activate' onClick={() => { console.log('here'); }}>Remove</div>
          <div>Delete</div>
        </Menu>
      </Layout>
    );
  }

}

export default AboutPage;
