<template>
  <header>
    <div class="brand">
      <h5>Just Chat</h5>
      <img src="../assets/logo.svg" alt="Logo">
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>


<style scoped>
header {
  padding: 8px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-family: poiret-one, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 60px;
}
header .brand {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .brand h5{
  text-transform: uppercase;
  font-size: 18px;
  line-height: 2px;
}

header img{
  width: 40px;
  height: 40px;
}
</style>
