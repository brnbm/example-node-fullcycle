# Nginx com Node.js 
### _Desafio do curso da Full Cycle_

Clone o projeto e acesse a branch develop.
```sh
git checkout develop
```
Rode no seu terminal o comando:
```sh
docker-compose up -d
```
Serão criados 3 containers Docker:
- db (Banco MySQL)
- node (Aplicação NodeJS)
- nginx (Proxy Reverso Nginx)

Através de seu navegador acesse o endereço http://localhost:8080/ para visualizar o resultado final.
