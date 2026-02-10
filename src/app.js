const connection = require("./database/db")

function conexaoBanco() {
    connection.connect((err) => {
        if (err) {
            console.error(`Erro na conexão com o banco. Erro: ${err}`)
        } else {
            console.log('✅ Conectado ao MySQL')
            buscarNotas()
        }
    })
}
function buscarAlunos() {
    connection.query('SELECT * FROM alunos', (err, result) => {
        if (err) {
            console.error(`Erro para trazer a tabela alunos. Erro: ${err}`)
        } else {
            console.log('✅ Tabela Alunos conectada')
            console.log(result)
        }
    })
}
function buscarNotas() {
    connection.query('SELECT * FROM notas JOIN alunos ON notas.id_aluno = alunos.id JOIN materias ON notas.id_materia = materias.id', (err, result) => {
        if (err) {
            console.error(`Erro para trazer a tabela alunos. Erro: ${err}`)
        } else {
            console.log('✅ Tabela Alunos conectada')
            console.log(result)
        }
    })
}
conexaoBanco()
