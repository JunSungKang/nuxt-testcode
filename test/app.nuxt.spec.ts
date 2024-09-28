// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import waitForExpect from 'wait-for-expect';
import { mount } from '@vue/test-utils'

import App from './app.vue'

describe('Total Test [App.vue]', () => {
  const app = mount(App)

  it('1. is a Vue instance', () => {
    expect(app.vm).toBeTruthy()
  })

  it('2. required input [email]', async () => {
    const email = app.find('.email-required');
    expect(email.text()).toContain("");

    const submit = app.find('#submit');
    await submit.trigger("submit");

    await waitForExpect(() => {
      expect(email.exists()).toBe(true);
      expect(email.text()).toContain("Required");
    });
  })

  it('3. required input [password]', async () => {
    const password = app.find('.password-required');
    expect(password.text()).toContain("");

    const submit = app.find('#submit');
    await submit.trigger("submit");

    await waitForExpect(() => {
      expect(password.exists()).toBe(true);
      expect(password.text()).toContain("Required");
    });
  })
})

