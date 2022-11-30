<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrCard',

  props: {
    imgSrc: {
      type: String,
      default: undefined,
    },
    link: {
      type: [String, Object],
      default: undefined,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    detail: {
      type: String,
      default: '',
    },
    altImg: {
      type: String,
      default: '',
    },
    noArrow: Boolean,
    horizontal: Boolean,
  },

  methods: {
    goToTargetLink () {
      this.$refs.title.querySelector('.fr-card__link').click()
    },
  },
})
</script>

<template>
  <div
    class="fr-card fr-enlarge-link"
    :class="{
      'fr-card--horizontal': horizontal,
      'fr-card--no-arrow': noArrow,
    }"
    data-testid="fr-card"
    @click="goToTargetLink"
  >
    <div class="fr-card__body">
      <h4
        ref="title"
        class="fr-card__title"
      >
        <router-link
          :to="link"
          class="fr-card__link"
          data-testid="card-link"
          @click="$event.stopPropagation()"
        >
          <h3 v-if="title">{{ title }}</h3>
        </router-link>
      </h4>
      <p class="fr-card__desc" v-if="description">
        {{ description }}
      </p>
      <p class="fr-card__detail" v-if="detail">
        {{ detail }}
      </p>
    </div>
    <div class="fr-card__img" v-if="imgSrc">
      <img
        :src="imgSrc"
        class="fr-responsive-img"
        :alt="altImg"
        data-testid="card-img"
      >
      <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative
        et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous
        estimez qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
    </div>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/card/card.main.min.css" />
