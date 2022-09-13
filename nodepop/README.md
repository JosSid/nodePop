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

## Rutas del API.

### Para busquedas de anuncios

Para acceder a la pagina principal del APi y recibir la lista de todos los anuncios:

```
http://localhost:3000/api/anuncios
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

