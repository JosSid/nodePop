# nodePop


## 1-Para arrancar la aplicación:

### La primera vez que se arranque la aplicación:

Para cargar los datos iniciales de la base de datos ejecutar:

```
node initDB.js
```

Este comando ejecutara el fichero que resetea la base de datos dejandola en su estado inicial, por lo tanto solo ejecutarlo en el caso que se desee resetear la base de datos.

### En modo producción:

```
npm start
```

### En modo desarrollo:
```
npm run dev
```

## Modelo de los anuncios.

```
const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: [String]
});
```

## Rutas del web site.

### Pagina principal.

Para acceder a la pagina de inicio de la web:

```
http://localhost:3000/
```


## Rutas del API.

### Para busquedas de anuncios

Para acceder a la pagina principal del APi y recibir la lista de todos los anuncios:

```
http://localhost:3000/api/anuncios
```

### Para filtrar las busquedas.

#### Podemos filtrar las busquedas por diferentes criterios, como por ejemplo:

1. Para filtrar buscando por tags de los anuncios:

#### En el Web Site:
```
http://localhost:3000/?tags=<tag>
```

#### En el API:
```
http://localhost:3000/api/anuncios/?tags=<tag>
```

2. Para filtrar si el anuncio es de venta o de busqueda:

Si queremos **filtrar** para obtener los **anuncios** de productos que estan a la **venta** usaremos la ruta:
#### En el Web Site:
```
http://localhost:3000/?venta=vendo
```
#### En el API:
```
http://localhost:3000/api/anuncios/?venta=vendo
```
Si por el contrario queremos **recibir** los **anuncios** de productos que se **buscan** usaremos la ruta:
#### En el Web Site:
```
http://localhost:3000/?venta=busco
```
#### En el API:
```
http://localhost:3000/api/anuncios/?venta=busco
```

3. Para filtrar por nombre de anuncio:
#### En el Web Site:
```
http://localhost:3000/?name=<nombre>
```

#### En el API:
```
http://localhost:3000/api/anuncios/?name=<nombre>
```

### Paginación

Para la paginación usaremos los siguientes parámetros:

**skip** : Será el parámetro que marcara a partir de cual anuncio queremos recibir. Al pasarle el valor **2** descartará los dos primeros anuncios y el primer anuncio que mostrará será el **3**.

**limit** : Será el parametro que marcara el número de anuncios que deseamos recibir. al pasarle el valor **2** mostrará 2 anuncios.

Ejemplos: 
#### En el Web Site:
```
http://localhost:3000/?skip=2&limit=2
```
#### En el API:
```
http://localhost:3000/api/anuncios/?skip=2&limit=2
```
### Todos los parámetros anteriórmente nombrados podemos encadenarlos en la ruta pasando varios filtros al mismo tiempo.

Ejemplos:
#### En el Web Site:
```
http://localhost:3000/?tags=guitar&venta=vendo&skip=1&limit=3
```
#### En el API:
```
http://localhost:3000/api/anuncios/?tags=guitar&venta=vendo&skip=1&limit=3
```

### Para actualizar anuncios:

Haremos una petición de tipo **PUT** en el body en formato **urlencoded** para recibir un body con el anuncio actualizado.

En la petición le pasaremos la **clave** o **claves** a actualizar y recibiremos un body con el anuncio actualizado.

Utilizaremos la siguiente ruta:

```
http://localhost:3000/api/anuncios/<id del anuncio que vamos a actualizar>
```

### Para crear anuncios:

Haremos una peticion de tipo **POST** en el body en formato **urlencode** para recibir un body del nuevo anuncio.

Utilizaremos la siguiente ruta:

```
http://localhost:3000/api/anuncios
```
Ejemplo de resultado: 

```
{
    "result": {
        "name": "amplifier",
        "sale": true,
        "price": 350,
        "photo": "amplifier.png",
        "tags": [
            "music",
            "sound",
            "complement"
        ],
        "_id": "631f4bd9467d7354eda612da",
        "__v": 0
    }
}
```

### Para eliminar anuncios:

Haremos una peticion de tipo **DELETE** pasandole al final de la ruta el **ID** del anuncio que queremos eliminar:

```
http://localhost:3000/api/anuncios/< id del anuncio >
```

