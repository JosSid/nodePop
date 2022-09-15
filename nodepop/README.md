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

### Pagina filtrada por tag.

Para buscar anuncios filtrados por tag usaremos la siguiente ruta:

```
http://localhost:3000/tags/<tag de busqueda>
```

### Pagina filtrada por vendo o busco.

Si buscamos anuncios de venta usaremos esta ruta:

```
http://localhost:3000/sale/vendo
```

Si buscamos anuncios donde se busque algo en particular usaremos la siguiente ruta:

```
http://localhost:3000/sale/busco
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
```
http://localhost:3000/api/anuncios/?tags=<tag>
```

2. Para filtrar si el anuncio es de venta o de busqueda:

**Si queremos filtrar para obtener los anuncios de productos que estan a la venta usaremos la ruta:**
```
http://localhost:3000/api/anuncios/?venta=vendo
```
**Si por el contrario queremos recibir los anuncios de productos que se buscan usaremos la ruta:**
```
http://localhost:3000/api/anuncios/?venta=busco
```



Para buscar anuncios por tag:

Los tags de busqueda para nuestros anuncios seran:
music, lifestyle, wind instrument

```
http://localhost:3000/api/anuncios/<tag de busqueda>
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

