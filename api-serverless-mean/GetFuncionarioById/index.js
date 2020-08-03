/**
 * Arquivo: GetFuncionarios/index.js
 * Data: 02/08/2020
 * Descrição: arquivo responsável por listar por id
 * */

const createMongoClient = require('../shared/mongo')
const { ObjectID } = require('mongodb')

module.exports = async function (context, req) {
    const {id} = req.params

    if (!id) {
        context.res = {
            status: 400,
            body: 'É obrigatório informar o id do funcionário(a)!'
        }
        return
    }

    const { connection, db } = await createMongoClient()
    const Funcionarios = db.collection('funcionarios')

    try {
        const funcionario = await Funcionarios.findOne({_id: ObjectID(id)})

        connection.close()
        context.res = {
            status: 200,
            body: funcionario
        }
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Erro ao listar o Funcionário(a) pelo Id.'
        }
    }
}