<template>
  <div class="rooms">
    <h1>Rooms</h1>
    <h2>List of rooms</h2>
    <ListRooms type="rooms" />
    <p><em>To see your changes, please click again on Load the rooms</em></p>
    <GetById group="room" />
    <DeleteById group="room" />
    <CreateRoom />
  </div>
</template>

<script>
import ListRooms from "@/components/ListRooms.vue";
import GetById from "@/components/GetById.vue";
import DeleteById from "@/components/DeleteById.vue";
import CreateRoom from "@/components/CreateRoom.vue";

export default {
  name: "Rooms",
  components: {
    ListRooms,
    GetById,
    DeleteById,
    CreateRoom,
  },
};
</script>
