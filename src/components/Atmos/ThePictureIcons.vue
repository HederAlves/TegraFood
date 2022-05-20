<template>
  <img :src="default" :alt="description">
</template>
<script>
export default {

  name: 'ThePictureIcons',
    data() {
      return {
      type: Image,
      avatar: "/images/perfil-people.png",
      image: "/images/image-login.png",
      description: "oi",
      default: ""
      }
  
    }
     
}
</script>