<template>
  <div class="result">
    <h2>Search {{ group }}</h2>
    <p>Id of the {{ group }} <input type="number" v-model="id" /></p>
    <button v-on:click="findItem(group, id)">Search {{ group }}</button>
    <p>{{ device }}</p>
  </div>
</template>

<script>
export default {
  name: "GetById",
  data() {
    return {
      id: 1,
      item: [],
    };
  },
  props: {
    group: String,
  },
  methods: {
    findItem(group, id) {
      axios
        .get(
          "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/" +
            group +
            "/" +
            id
        )
        .then((response) => (this.item = response.data))
        .catch((erreur) => (this.item = [{ name: "Error loading id" }]));
    },
  },
};
</script>
