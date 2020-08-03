/**
 * Arquivo: GetFuncionarios/index.js
 * Data: 02/08/2020
 * Descrição: arquivo responsável por listar todos os funcionários
 */

const createMongoClient = require('../shared/mongo')

module.exports = async context => {
    const {connection, db} = await createMongoClient()

    const Funcionarios = db.collection('funcionarios')
    const res = await Funcionarios.find({})
    const body = await res.toArray()

    connection.close()

    context.res = {
        status: 200,
        body
    }
}