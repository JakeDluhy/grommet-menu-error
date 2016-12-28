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
import { expect } from 'chai';
import { mount } from 'enzyme';

import AboutPage from '../pages/about';

describe('test suite', () => {

  it('breaks grommet', () => {
    const wrapper = mount(<AboutPage />);
    wrapper.find('.spec-role-menu').simulate('click');
    expect(true).to.be.equal.true;
  });

});
