/**
 * Arquivo: CreateFuncionario/index.js
 * Data: 02/08/2020
 * Descrição: arquivo responsável por criar um novo 'Funcionário'
 *
 */

const createMongoClient = require('../shared/mongo')

module.exports = async function (context, req) {
    const funcionario = req.body || {}

    if (funcionario) {
        context.res = {
            status: 400,
            body: 'Os dados do(a) Funcionário(a) são obrigatórios!'
        }
    }

    const {connection, db} = await createMongoClient()

    const Funcionarios = db.collection('funcionarios')

    try {
        const funcionarios = await Funcionarios.insert(funcionario)
        connection.close()

        context.res = {
            status: 201,
            body: funcionarios.ops[0]
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Erro ao criar um novo funcionário(a)'
        }
    }
}
