# Nginx com Node.js 
### _Desafio do curso da Full Cycle_

Clone o projeto.
```sh
git clone git@github.com:brnbm/example-node-fullcycle.git
```
Acesse a pasta node e instale o mysql e o express:
```sh
cd node
npm install mysql -y
npm install express -y
```

Rode o docker compose para subir os containers:
```sh
docker-compose up
```
Serão criados 3 containers Docker:
- db (Banco MySQL)
- node (Aplicação NodeJS)
- nginx (Proxy Reverso Nginx)

Através de seu navegador acesse o endereço http://localhost:8080/ para visualizar o resultado final.
