import test from 'ava'
import sinon from 'sinon'

import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from '../Dashboard'

const props = {
  id: 1,
  username: 'user',
  firstName: 'john',
  lastName: 'doe',
  logoutUser: sinon.spy()
}

test.afterEach(() => props.logoutUser.reset())

test('Dashboard renders an article element with a table of user information', t => {
  const wrapper = shallow(<Dashboard {...props} />)

  t.is(wrapper.type(), 'article')

  t.is(wrapper.find('.id').text(), props.id.toString())
  t.is(wrapper.find('.username').text(), props.username)
  t.is(wrapper.find('.fullname').text(), `${props.firstName} ${props.lastName}`)
})

test('Dashboard calls props.logoutUser when the logout button is clicked', t => {
  const wrapper = shallow(<Dashboard {...props} />)

  wrapper.find('button').simulate('click')

  t.true(props.logoutUser.calledOnce)
})
