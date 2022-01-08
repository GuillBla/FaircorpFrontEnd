<template>
  <div>
    <h2>Create a new room</h2>
    <p>Name: <input type="text" v-model="name" /></p>
    <p>Building Id: <input type="number" v-model="bId" /></p>
    <p>Floor: <input type="number" v-model="flr" /></p>
    <p>Current Temperature: <input type="number" v-model="cTemp" /> °C</p>
    <p>Target Temperature: <input type="number" v-model="tTemp" />°C</p>

    <button
      v-on:click="create(name, buildingId, floor, currentTemp, targetTemp)"
    >
      Create room
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateRoom",
  data() {
    return {
      name: "",
      buildingId: null,
      floor: null,
      currentTemp: null,
      targetTemp: null,
    };
  },
  methods: {
    create(name, buildingId, floor, currentTemp, targetTemp) {
      axios.post(
        "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/rooms",
        {
          name: name,
          buildingId: buildingId,
          floor: floor,
          currentTemperature: currentTemp,
          targetTemperature: targetTemp,
        }
      );
    },
  },
};
</script>