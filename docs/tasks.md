## techs

- yarn
- express
- axios
- nodemon

## roadmap

- [superhero api](https://akabab.github.io/superhero-api/api/)

- [ ] _cache system_
  - [ ] ao inicializar o servidor (api), deve-se baixar um arquivo que sera considerado como cache
  - [ ] ler/escrever `cache.json`
  - [ ] adicionar/enxertar/agregar ao cache

- [ ] interface para busca
  - [ ] uma lista de resultados
    - [ ] buscar o valor entre as props
    - [ ] buscar no cache
      - se nao tiver cache:
        - [ ] buscar na api

- [ ] interface para buscar heroi
  - [ ] buscar pela propriedade {slug}
  - ler doc da api superhero


## dir. structure

```
src/
✅  server.js
✅  routes  # módulo c as rotas
✅    index.js 
✅    hero.js  # interface para controle do funcionamento da rota
✅    search.js  # same
✅  utils
✅    index.js  # módulo c funções que poderam ser usadas em outros lugares (e.g., server.js e database/index.js)
               # possuirá alg. para busca `searchValueInProps(searchedValue, sourceObject)`
✅  database  # módulo c funções para controle do cache/db
✅    index.js 
✅    cache.json  # ignore
```


- time expend: 11m24s 

