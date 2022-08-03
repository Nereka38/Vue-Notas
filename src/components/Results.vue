<script>
import { useNote } from '../stores/notes';
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useNote();
    // storeToRefs lets todoList keep reactivity:
    const { studentinfo } = storeToRefs(store);
    
    return { studentinfo };

    function toggleHidden(selector) {
    element = document.querySelector(selector);
    element.hidden = element.hidden ? false : true;
}
  },
};

</script>
<template>
    <aside>
        <table class="info-notes">
            <tr>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Cualificación</th>
            </tr>
            <tr v-for="all in studentinfo" :key="all.id">
                <td>{{ all.name }}</td>
                <td>{{ all.signature }}</td>
                <td>{{ all.note }}</td>
            </tr>
        </table>
        <table class="info-notes2">
            <tr>
                <th>Alumn@s</th>
            </tr>
            <tr v-for="all in studentinfo" :key="all.id" id="hidden-info">
                <td class="new-info">{{ all.name }}<button>Ver</button></td>
                    <td>Materia: {{ all.signature }}</td>
                    <td>Calificación: {{ all.note }}</td>
            </tr>
        </table>
    </aside>
</template>

<style lang="scss" scoped>
</style>