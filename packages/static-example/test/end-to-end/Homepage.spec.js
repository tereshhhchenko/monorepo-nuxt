import test from 'ava'
import NuxtHelpers from '../../../../config/nuxt-end-to-end'

const nuxtHelper = new NuxtHelpers()

// Init Nuxt.js and start listening on localhost:4001
test.serial.before('Init Nuxt.js', async () => {
  await nuxtHelper.startNuxt()
})

// Example of testing only generated html
test.serial('Route / exits and render HTML', async t => {
  const context = {}
  const { html } = await nuxtHelper.nuxt.renderRoute('/', context)
  t.true(html.includes('<h1 class="title">ui-library</h1>'))
})

// Example of testing via DOM checking
test.serial('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxtHelper.nuxt.renderAndGetWindow(nuxtHelper.listening)
  const element = window.document.querySelector('.title')
  t.not(element, null)
  t.is(element.textContent, 'ui-library')
  t.is(element.className, 'title')
  t.is(window.getComputedStyle(element).color, 'rgb(53, 73, 94)')
  t.pass()
})

// Close the Nuxt server
test.serial.after.always('Closing server', () => nuxtHelper.stopNuxt())
