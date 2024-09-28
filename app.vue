<template>
  <UForm :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
      <span class="email-required">{{ emailRequired }}</span>
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
      <span class="password-required">{{ passwordRequired }}</span>
    </UFormGroup>

    <UButton id="submit" type="submit">
      Submit
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const emailRequired = ref("");
const passwordRequired = ref("");

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)

  if (!event.data.email) {
    emailRequired.value = "Required";
  } else {
    emailRequired.value = "";
  }

  if (!event.data.password) {
    passwordRequired.value = "Required";
  } else {
    passwordRequired.value = "";
  }
}
</script>