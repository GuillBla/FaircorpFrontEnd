<template>
  <div class="deleteOne">
    <h2>Delete {{ group }}s</h2>
    <p>Id of the {{ group }} : <input type="number" v-model="id" /></p>
    <button v-on:click="deleteItem(group, id)">Delete {{ group }}</button>
  </div>
</template>

<script>
export default {
  name: "DeleteById",
  data() {
    return {
      id: 0,
    };
  },
  props: {
    group: String,
  },
  methods: {
    deleteItem(group, id) {
      axios.delete(
        "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/" +
          group +
          "s" +
          "/" +
          id
      );
    },
  },
};
</script>
