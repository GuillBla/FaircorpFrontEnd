<template>
  <div class="createOne">
    <h2>Create a new Window</h2>
    <p>Name: <input type="text" v-model="name" /></p>
    <p>Room Id: <input type="number" v-model="rId" /></p>
    <p>Room Name: <input type="text" v-model="rName" /></p>
    <p>Status (OPEN or CLOSED): <input type="text" v-model="wStatus" /></p>

    <button v-on:click="create(name, rId, rName, wStatus)">
      Create window
    </button>
  </div>
</template>

<script>
export default {
  name: "CreateWindow",
  data() {
    return {
      name: "newDevice",
      rId: null,
      rName: "",
      wStatus: "CLOSED",
    };
  },
  methods: {
    create(name, rId, rName, wStatus) {
      axios.post(
        "https://app-212b8864-f5b6-42f4-a7b3-6b7762929f48.cleverapps.io/api/windows",
        {
          id: null,
          name: name,
          roomId: rId,
          roomName: rName,
          windowStatus: wStatus,
        }
      );
    },
  },
};
</script>