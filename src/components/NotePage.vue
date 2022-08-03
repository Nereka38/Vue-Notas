<script setup>
import Notes from "./Notes.vue";
import Results from "./Results.vue";


</script>

<template>
<main>
<Notes />
<Results />
</main>
</template>

<style lang="scss">
main {
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row wrap;
    margin: 1vw;

    .info-student {
        background-color: rgb(162, 173, 173);
        padding: 3vw;
        margin: 2vw;
    }

    .info-notes, .info-notes2 {
        border-collapse: collapse;
        width: 100%;
        margin: 2vw;
        
        th {
            border-bottom: 2px solid #444444;
            font-size: 17px;
        }
        
        td, th {
            text-align: center;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: rgb(245, 247, 245);
        
        }

    }
}

.info-notes2 {

    td {
        display: flex;
        justify-content: space-between;
    }
}
</style>