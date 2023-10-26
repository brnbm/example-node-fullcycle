# Nginx com Node.js 
### _Desafio do curso da Full Cycle_

Clone o projeto.
```sh
git clone git@github.com:brnbm/example-node-fullcycle.git
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
