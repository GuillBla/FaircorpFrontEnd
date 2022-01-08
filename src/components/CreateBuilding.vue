<template>
  <div>
    <h2>Create a new building</h2>
    <p>Name of the building: <input type="text" v-model="name" /></p>
    <button v-on:click="create(name)">Create building</button>
  </div>
</template>

<script>
export default {
  name: "CreateBuilding",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    create(name) {
      axios.post(
        "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/buildings",
        {
          id: null,
          name: name,
        }
      );
    },
  },
};
</script>