<template>
  <router-view />
</template>

<style>
.body--light {
  background-color: #e9e9e9;
}

.body--dark {
  background-color: #333333;
}

.error_page_background {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  max-width: 75%;
  max-height: 90%;
}

.error_page_image_container {
  position: relative;
}

.error_page_image_container .error_page_image_container_image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn_large_container {
  width: 90%;
  left: 5%;
}

.required_field::after {
  content: "*";
  color: red;
  margin-left: 2%;
}

.bug {
  background-color: #92a324;
  color: white;
}

.dark {
  background-color: #4f3f3d;
  color: white;
}

.dragon {
  background-color: #4f60e2;
  color: white;
}

.electric {
  background-color: #fac335;
  color: white;
}

.fairy {
  background-color: #eb74f0;
  color: white;
}

.fighting {
  background-color: #f6812c;
  color: white;
}

.fire {
  background-color: #e83f26;
  color: white;
}

.flying {
  background-color: #82baf0;
  color: white;
}

.ghost {
  background-color: #6f3e70;
  color: white;
}

.grass {
  background-color: #4fa325;
  color: white;
}

.ground {
  background-color: #92501b;
  color: white;
}

.ice {
  background-color: #43d9fc;
  color: white;
}

.normal {
  background-color: #a1a2a0;
  color: white;
}

.poison {
  background-color: #955bcc;
  color: white;
}

.psychic {
  background-color: #f1517e;
  color: white;
}

.rock {
  background-color: #b1aa82;
  color: white;
}

.steel {
  background-color: #60a3b9;
  color: white;
}

.water {
  background-color: #2581ef;
  color: white;
}
</style>
