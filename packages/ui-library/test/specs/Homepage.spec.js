import { mount } from '@vue/test-utils'
import test from 'ava'
import Homepage from '../../pages/index'

test('is a Vue instance', t => {
  const wrapper = mount(Homepage)
  t.is(wrapper.isVueInstance(), true)
})
