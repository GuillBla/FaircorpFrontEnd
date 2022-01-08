<template>
  <div class="list">
    <table id="listBuildings">
      <tr>
        <th>Id of the building</th>
        <th>Name of the building</th>
      </tr>
      <tr v-for="building in buildings" :key="building.id">
        <td>{{ building.id }}</td>
        <td>{{ building.name }}</td>
      </tr>
    </table>
    <p><button v-on:click="update(type)">Load the buildings</button></p>
  </div>
</template>



<script>
export default {
  name: "DisplayList",
  data() {
    return {
      buildings: [],
    };
  },
  props: {
    type: String,
  },
  methods: {
    update(dir) {
      axios
        .get(
          "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/" +
            dir
        )
        .then((response) => (this.buildings = response.data))
        .catch(
          (erreur) => (this.buildings = [{ name: "Error loading buildings" }])
        );
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  caption-side: bottom;
}

td,
th {
  border: 1px solid black;
  padding: 10px;
}

th {
  background-color: rgb(70, 123, 202);
}
</style>