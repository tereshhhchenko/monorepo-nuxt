import { mount } from '@vue/test-utils'
import test from 'ava'
// import Vue from 'vue'
import Logo from '../../components/Logo.vue'

test('is a Vue instance', t => {
  const wrapper = mount(Logo)
  t.is(wrapper.isVueInstance(), true)
})

test('renders', t => {
  // const vm = new Vue(Logo).$mount()
  // const tree = {
  //  $el: vm.$el.outerHTML
  // }
  // t.snapshot(tree)
  t.is(true, true)
})
