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
        <table>
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
        </table>
        <table>
            <tr>
                <th>Alumnos</th>
            </tr>
            <tr>
                <td>Lisa <button>Ver</button></td>
            </tr>
        </table>
    </aside>
</main>
</template>

<style lang="scss" scoped>
main {
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    margin: 5vw;

    .info-student {
        background-color: rgb(162, 173, 173);
        padding: 3vw;
        margin: 2vw;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin: 2vw;

        td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        }

        tr:nth-child(even) {
        background-color: #dddddd;
        }

    }
}
</style>
