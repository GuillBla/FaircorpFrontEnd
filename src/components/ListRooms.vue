<template>
  <div class="list">
    <table id="listrooms">
      <tr>
        <th>Room Id</th>
        <th>Name</th>
        <th>Building</th>
        <th>Floor</th>
        <th>Temperature</th>
        <th>Target</th>
      </tr>
      <tr v-for="room in rooms" :key="room.id">
        <td>{{ room.id }}</td>
        <td>{{ room.name }}</td>
        <td>{{ room.buildingName }}</td>
        <td>{{ room.floor }}</td>
        <td>{{ room.currentTemperature }} °C</td>
        <td>{{ room.targetTemperature }}°C</td>
      </tr>
    </table>
    <p><button v-on:click="update(type)">Load the rooms</button></p>
  </div>
</template>

<script>
export default {
  name: "DisplayList",
  data() {
    return {
      rooms: [],
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
        .then((response) => (this.rooms = response.data))
        .catch((erreur) => (this.rooms = [{ name: "Error loading rooms" }]));
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