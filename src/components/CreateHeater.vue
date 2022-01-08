<template>
  <div>
    <h2>Create a new heater</h2>
    <p>Name: <input type="text" v-model="name" /></p>
    <p>Room Id: <input type="number" v-model="roomId" /></p>
    <p>Status: <input type="text" v-model="hStatus" /></p>
    <p>Power: <input type="number" v-model="power" /></p>

    <button v-on:click="create(Name, roomId, heaterStatus, power)">
      Create heater
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateHeater",
  data() {
    return {
      name: "",
      rId: null,
      rName: "",
      hStatus: "ON/OFF",
      power: null,
    };
  },
  methods: {
    create(roomId, Name, heaterStatus, power) {
      axios.post(
        "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/heaters",
        {
          name: Name,
          roomId: roomId,
          heaterStatus: heaterStatus,
          power: power,
        }
      );
    },
  },
};
</script>