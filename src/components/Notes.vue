<template>
<main>
    <aside class="info-student">
        <h1>Nombre del alumno</h1>
        <input type="text">
        <h1>Materias</h1>
        <input type="text">
        <h1>Nota</h1>
        <input type="text">
    </aside>
    <aside>
        <table class="info-notes">
            <tr>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Cualificación</th>
            </tr>
            <tr>
                <td>Lisa</td>
                <td>Matemáticas</td>
                <td>Sobresaliente</td>
            </tr>
            <tr>
                <td>Lisa</td>
                <td>Matemáticas</td>
                <td>Sobresaliente</td>
            </tr>
            <tr>
                <td>Lisa</td>
                <td>Matemáticas</td>
                <td>Sobresaliente</td>
            </tr>
        </table>
        <table class="info-notes2">
            <tr>
                <th>Alumn@s</th>
            </tr>
            <tr>
                <td>Lisa<button>Ver</button></td>
            </tr>
            <tr>
                <td>Pepita<button>Ver</button></td>
            </tr>
        </table>
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
