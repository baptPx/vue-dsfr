<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrInput',

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'input')
      },
    },
    descriptionId: {
      type: String,
      default: undefined,
    },
    hint: {
      type: String,
      default: '',
    },
    isInvalid: Boolean,
    isValid: Boolean,
    isWithWrapper: Boolean,
    label: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    wrapperClass: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: undefined
    }

  },
  emits: ['update:modelValue'],

  computed: {
    isComponent () {
      return this.$attrs.type && this.$attrs.type.toLowerCase() === 'textarea' ? 'textarea' : 'input'
    },
    wrapper () {
      return this.isWithWrapper || this.$attrs.type && this.$attrs.type.toLowerCase() === 'date' || !!this.wrapperClass
    },
    finalLabelClass () {
      return [
        'fr-label',
        { invisible: !this.labelVisible },
        this.labelClass,
      ]
    },
  },
})
</script>

<template>
  <label
    :class="finalLabelClass"
    :for="id"
  >
    <!-- @slot Slot pour personnaliser tout le contenu de la balise <label> -->
    <slot name="label">
      {{ label }}
      <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
      <slot name="required-tip">
        <span
          v-if="$attrs.required"
          class="required"
        >&nbsp;*</span>
      </slot>
    </slot>

    <span
      v-if="hint"
      class="fr-hint-text"
    >{{ hint }}</span>
    <span class="fr-hint-text">
      
      <slot name="hint">
      </slot>
    </span>
  </label>

  <div class="warp-component">
    <div class="input-icon"  >
      <slot name="icon-right">
        <VIcon v-if="icon" :name="icon" class="input-icon"></VIcon>
      </slot>
    </div>

    <component
      :is="isComponent"
      v-if="!wrapper"
      :id="id"
      class="fr-input"
      :class="{
        'fr-input--error': isInvalid,
        'fr-input--valid': isValid,
      }"
      :value="modelValue"
      v-bind="$attrs"
      :aria-aria-describedby="descriptionId || undefined"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div
      v-else
      :class="[
        { 'fr-input-wrap': isWithWrapper || $attrs.type === 'date' },
        wrapperClass,
      ]"
    >
      <component
        :is="isComponent"
        :id="id"
        class="fr-input"
        :class="{
          'fr-input--error': isInvalid,
          'fr-input--valid': isValid,
        }"
        :value="modelValue"
        v-bind="$attrs"
        :aria-aria-describedby="descriptionId || undefined"
        @input="$emit('update:modelValue', $event.target.value)"
      />

    </div>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/input/input.main.min.css" />

<style scoped>
.input-icon {
  position: absolute;
  right: 1rem;
  top: 0.6rem;
}
.warp-component {
  position: relative;
  width: 100%;
}
input:not([type="date"]):not([type="number"]) {
  padding-right: 3rem
}
@-moz-document url-prefix() {
  input[type="date"] {
    padding-right: 2.2rem;
  }
}
/* .invisible {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
} */
</style>
