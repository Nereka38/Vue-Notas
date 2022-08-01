<script setup>

</script>

<template>
<main>
    <div class="btn-notes">
        <RouterLink to="/About"><button>Boletín de Notas</button></RouterLink>
    </div>
</main>
</template>

<style lang="scss">
main {
    display:flex;
    justify-content: center;
    align-items: center;

    .btn-notes {
        width: 100%;
        padding: 20vw;

        button {
          width: 151px;
          height: 33px;
          background: rgb(217, 217, 217);
          border: none;
        }
    }
}



</style>
