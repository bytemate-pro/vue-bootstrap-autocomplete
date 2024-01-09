<template>
  <div>
    <vue-bootstrap-autocomplete
      class="mb-4"
      :data="countries"
      v-model="variant"
      placeholder="Choose a language"
      showOnFocus
      noResultsInfo="No results"
      :serializer="c => c.name"
      @hit="variant = $event.code"
    />
  </div>
</template>

<script>
import VueBootstrapAutocomplete from '../src/components/VueBootstrapAutocomplete.vue'

export default {
  components: { VueBootstrapAutocomplete },
  data() {
    return { countries: [], variant: '' }
  },
  created() {
    fetch('/countries.json').then((res) => res.json()).then((json) => { this.countries = json })
  }
}
</script>

<style lang="scss">
  @import 'bootstrap/scss/bootstrap.scss';
</style>
