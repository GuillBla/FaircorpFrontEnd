<template>
  <div class="list">
    <table id="listDevices">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Heater Status</th>
        <th>Room</th>
        <th>Power</th>
      </tr>
      <tr v-for="device in devices" :key="device.id">
        <td>{{ device.id }}</td>
        <td>{{ device.name }}</td>
        <td>{{ device.heaterStatus }}</td>
        <td>{{ device.roomName }}</td>
        <td>{{ device.power }}</td>
      </tr>
    </table>
    <p><button v-on:click="updateList(type)">Load the heaters</button></p>
  </div>
</template>

<script>
export default {
  name: "DisplayList",
  data() {
    return {
      devices: [],
    };
  },
  props: {
    type: String,
  },
  methods: {
    updateList(dir) {
      axios
        .get(
          "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/" +
            dir
        )
        .then((response) => (this.devices = response.data))
        .catch(
          (erreur) => (this.devices = [{ name: "Error loading heaters" }])
        );
    },
  },
};
</script>

<style scoped>
#list ul li {
  list-style-type: none;
  text-align: left;
}

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