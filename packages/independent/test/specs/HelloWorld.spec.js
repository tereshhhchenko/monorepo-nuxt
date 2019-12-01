import { mount } from '@vue/test-utils'
import test from 'ava'
import Vue from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'

test('is a Vue instance', t => {
  const wrapper = mount(HelloWorld)
  t.is(wrapper.isVueInstance(), true)
})

test('renders', t => {
  const vm = new Vue(HelloWorld).$mount()
  const tree = {
    $el: vm.$el.outerHTML
  }
  t.snapshot(tree)
})
