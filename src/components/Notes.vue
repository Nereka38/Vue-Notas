<script>
  import { ref } from "vue";
  import { useNote } from '../stores/notes'

export default {
  setup() {
    const all = ref("");
    const store = useNote();
    function addItems(name, signature, note) {
      if (name.length === 0) {
        return;
      }
      if (signature.length === 0) {
        return;
      }
      if (note.length === 0) {
        return;
      }
      store.add(name, signature, note);
      all.value = "";
    }
    return { all, addItems };
    }
}

</script>

<template>
<main>
    <aside class="info-student">
        <form @submit.prevent="addItems(name, signature, note)">
            <h1>Nombre del alumno</h1>
                <input v-model="name" type="text">
            <h1>Materias</h1>
                <select v-model="signature">
                    <option>Matemáticas</option>
                    <option>Lengua</option>
                    <option>Inglés</option>
                </select>
            <h1>Nota</h1>
                <input v-model="note" type="text">
            <div>
                <button type="submit">Añadir</button>
            </div>
        </form>
    </aside>
</main>
</template>

<style lang="scss" scoped>
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
