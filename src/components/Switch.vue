<template>
  <div>
    <h2>Switch a {{ group }}</h2>
    <p>Id of the {{ group }} : <input type="number" v-model="id" /></p>
    <button v-on:click="switchitem(group, id)">Switch {{ group }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
    };
  },
  props: {
    group: String,
  },
  methods: {
    switchitem(group, id) {
      axios.put(
        "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/" +
          group +
          "/" +
          id +
          "/switch"
      );
    },
  },
};
</script>

