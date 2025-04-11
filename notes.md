# Requisições HTTP
- GET: Requisição de recursos
- POST: Envio de recursos
- PUT: Substitui os arquivos com o recurso enviado
- PATCH: Adiciona o recurso enviados aos arquivos
- DELETE: Deleta os arquivos
 
# Middlewares
Utilizados para indermediar a informação entre o cliente e o servidor, realizando algum tipo de tratamento com a mesma.
- Pré-processamento
- Autenticação
- Tratamento de erros
- Registro (log)

```js
//exemplo de middleware customizado.
const logger = (req, res, next) => {
  console.log("Requested method: ", req.method);
  console.log("Requested URl: ", req.url);
  next();
};

app.use(logger);
```