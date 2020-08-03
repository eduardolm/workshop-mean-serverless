/**
 * Arquivo: mongo.js
 * Data: 02/08/2020
 * Descrição: arquivo responsável por tratar a conexão da Base de Dados localmente
 */

 const {MongoClient} = require('mongodb')

 const config = {
     url: 'mongodb://localhost:27017/crud-workshop-mean-az',
     dbName: 'crud-workshop-mean-az'
 }

 async function createConnection () {
     const connection = await MongoClient.connect(config.url, {useNewUrlParser: true})
     const db = connection.db(config.dbName)
     return {
         connection,
         db
     }
 }

 module.exports = createConnection