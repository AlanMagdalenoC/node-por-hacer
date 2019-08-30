//const fs, cuano es nativo de node
//const express extensiones de terceros
//si empiezan con ./ son archivos generados por nosotros
// después de un let o const {} significa destructuración
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}
const optsCrear = {
    descripcion
}
const optsActualizar = {
    descripcion,
    completado
}
const optsBorrar = {
    descripcion
}
const optsListaPorEstatus = {
    completado
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optsCrear)
    .command('actualizar', 'actualiza el estado completo de una tarea', optsActualizar)
    .command('borrar', 'Elimina una elemento de la lista de tareas', optsBorrar)
    .command('listaPorEstatus', 'Lista las tareas por estatus', optsListaPorEstatus)
    .help() //Imprime en consola los parametros que permite la función, creado con yargs
    .argv;


module.exports = {
    argv
}