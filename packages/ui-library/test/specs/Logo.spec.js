import { mount } from '@vue/test-utils'
import test from 'ava'
import Vue from 'vue'
import HelloWorld from 'independent/components/HelloWorld.vue'
import Logo from '../../components/Logo.vue'

test('is a Vue instance', t => {
  const wrapper = mount(Logo)
  t.is(wrapper.isVueInstance(), true)
})

test('renders', t => {
  const vm = new Vue(Logo).$mount()
  const tree = {
    $el: vm.$el.outerHTML
  }
  t.snapshot(tree)
})

test('renders component HelloWorld', t => {
  const LogoComponent = mount(Logo)
  t.true(LogoComponent.contains(HelloWorld))
})
