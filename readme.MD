Para iniciar o mongodb

no PATH do mongodb

mongod --dbpath dir_name
mongo
show databases
use "nome da database"
show collections
db."nome da collection"."comando que quiser*"


--------------------

*comandos:

**Inserção**

insert: insere no banco

Exemplo:
db.banco.insert({ nome: "", idade: })

**Busca**

find: busca no banco
pretty: identa o resultado da função pra deixar mais bonito
findOne: retorna apenas o primeiro documento
skip: ignora uma quantidade de resultados e mostra o resto
limit: limita a quantidade de resultados
sort: ordena a collection definindo como crescente (1) ou decrescente (2)

Exemplo de find: db.banco.find( { nome: ""})
Exemplo de find com pretty: db.banco.find().pretty()
Exemplo de findOne: db.banco.findOne()
Exemplo de skip e limit: db.banco.skip(1).limit(10)
Exemplo de sort: db.banco.find().sort({ idade: 1 })

Operadores diferentes para usar na busca

$regex: traz todos os elementos que estejam dentro da condição
Ex: db.banco.find({ nome: {$regex: /a/ }})

$eq: exatamente igual (=)
$ne: diferente (<> ou !=)
$gt: maior do que (>)
$gte: maior ou igual do que (>=)
$lt: menor do que (<)
$lte: menor ou igual a (<=)
$in: o valor está contido em um array de possibilidades, como em um OU. Ex: {idade: {$in: [10,12] }}
$all: MongoDB permite campos com arrays. Ex: { tags: [“NodeJS”, “MongoDB”] }. Com esse operador, você compara se seu campo multivalorado possui todos os valores de um array específico. Ex: {tags: {$all: [“NodeJS”, “Android”]}}

**Update**

update: atualiza documentos com determinado parametro 
updateOne: atualiza apenas um documento
upsert: se não existir nenhum documento com esse filtro ele insere

$set: sobrescreve o valor dentro do campo

null: limpa um campo (Ex: {$set: {idade: null})

Exemplo de update: db.banco.update({ nome: ""}, { nome: "", idade: }) >>>> Jeito errado de fazer

Exemplo de updateOne: db.banco.updateOne({ _id: ObjectId("id gerado pelo mongo")}, {$set: {idade: 28}})

Exemplo de upsert: db.banco.updateOne({ nome: ""}, {$set: { uf: ""}}, {upsert: true})

Operadores diferentes para atualizar informações

$unset: remove o respectivo campo do documento;
$inc: incrementa o valor original do campo com o valor especificado;
$mul: multiplica o valor original do campo com o valor especificado;
$rename: muda o nome do campo para o nome especificado;

**Delete**

deleteONe: deleta um elemento que atende o filtro
deleteMany: deleta varios elementos que atendem o filtro

Exemplo de deleteOne: db.banco.deleteOne({ nome: ""})

