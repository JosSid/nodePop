# PRACTICA DESPLIEGUE EN SERVIDORES :

## 1- Despliegue de aplicacion **React** :

ENLACE : [https://ualaplop.jossidfactory.com](https://ualaplop.jossidfactory.com)

### Puedes hacer login con el eMail y contraseña :

eMail : Jossid@Jossid.com

contraseña : 1234

### O tambien puedes acceder a este enlace y crearte tu propio usuario :

ENLACE : [https://swagger.jossidfactory.com](https://swagger.jossidfactory.com/swagger)


## 2- Despliegue de aplicacion **NODE** :

ENLACE : [https://nodepop.jossidfactory.com](https://nodepop.jossidfactory.com)

Para usar las rutas del api:

ENLACE : [Rutas del api](#rutas-del-api)

#### A continuación puedes consultar la documentación de la aplicacion NODE :

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
https://nodepop.jossidfactory.com/
```


## Rutas del API.

### Para busquedas de anuncios

Para acceder a la pagina principal del APi y recibir la lista de todos los anuncios:

```
https://nodepop.jossidfactory.com/api/anuncios
```

### Para filtrar las busquedas.

#### Podemos filtrar las busquedas por diferentes criterios, como por ejemplo:

1. Para filtrar buscando por tags de los anuncios:

#### En el Web Site:
```
https://nodepop.jossidfactory.com/?tags=<tag>
```

#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?tags=<tag>
```

2. Para filtrar si el anuncio es de venta o de busqueda:

Si queremos **filtrar** para obtener los **anuncios** de productos que estan a la **venta** usaremos la ruta:
#### En el Web Site:
```
https://nodepop.jossidfactory.com/?venta=vendo
```
#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?venta=vendo
```
Si por el contrario queremos **recibir** los **anuncios** de productos que se **buscan** usaremos la ruta:
#### En el Web Site:
```
https://nodepop.jossidfactory.com/?venta=busco
```
#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?venta=busco
```

3. Para filtrar por nombre de anuncio:
#### En el Web Site:
```
https://nodepop.jossidfactory.com/?name=<nombre>
```

#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?name=<nombre>
```

4. Para filtrar por precios:

**price** : Será el parámetro que utilizaremos en la ruta.
A continuacion le añadiremos el signo **=** seguido del precio que querramos pasar como filtro. 

Si se quiere buscar en un rango entre dos precios, despues del signo **=** añadiremos el **precio minimo** seguido de un **-** y despues el **precio maximo**.

En El caso de usar la busqueda en un rango entre dos precios, si obviamos el **precio minimo** por defecto se le asignara el valor **0**.
En cambio si obviamos el **precio maximo** se le asignara por defecto el valor **infinito**.

Ejemplos:

1. En estos casos devolverá solo anuncios cuyo precio sea igual al pasado en el parámetro.
```
https://nodepop.jossidfactory.com/?price=350
```
```
https://nodepop.jossidfactory.com/api/anuncios/?price=350
```
2. En estos casos devolverá los anuncios cuyo precio este dentro del rango que le hemos pasado en el parámetro.
```
https://nodepop.jossidfactory.com/?price=350-1000
```
```
https://nodepop.jossidfactory.com/api/anuncios/?price=350-1000
```
3. En estos casos devolverá los anuncios cuyo precio sea mayor al valor que le hemos pasado en el parámetro.
```
https://nodepop.jossidfactory.com/?price=350-
```
```
https://nodepop.jossidfactory.com/api/anuncios/?price=350-
```
4. En estos casos devolverá los anuncios cuyo precio sea menor al valor que le hemos pasado en el parámetro.
```
https://nodepop.jossidfactory.com/?price=-1000
```
```
https://nodepop.jossidfactory.com/api/anuncios/?price=-1000
```
### Paginación

Para la paginación usaremos los siguientes parámetros:

**skip** : Será el parámetro que marcara a partir de cual anuncio queremos recibir. Al pasarle el valor **2** descartará los dos primeros anuncios y el primer anuncio que mostrará será el **3**.

**limit** : Será el parametro que marcara el número de anuncios que deseamos recibir. al pasarle el valor **2** mostrará 2 anuncios.

Ejemplos: 
#### En el Web Site:
```
https://nodepop.jossidfactory.com/?skip=2&limit=2
```
#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?skip=2&limit=2
```

### Ordenación:
Para ordenar los anuncios pasaremos en la ruta el parametro **sort** acompañado del **campo** por el cual queremos ordenar los anuncios.

En caso de que querramos invertir el orden añadiremos antes del **campo** de ordenación el simbolo **-** .

Ejemplos:
```
https://nodepop.jossidfactory.com/?sort=price
```
#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?sort=price
```
### Todos los parámetros anteriórmente nombrados podemos encadenarlos en la ruta pasando varios filtros al mismo tiempo.

Ejemplos:
#### En el Web Site:
```
https://nodepop.jossidfactory.com/?tags=guitar&venta=vendo&skip=1&limit=3
```
#### En el API:
```
https://nodepop.jossidfactory.com/api/anuncios/?tags=guitar&venta=vendo&skip=1&limit=3
```

### Para actualizar anuncios:

Haremos una petición de tipo **PUT** en el body en formato **urlencoded** para recibir un body con el anuncio actualizado.

En la petición le pasaremos la **clave** o **claves** a actualizar y recibiremos un body con el anuncio actualizado.

Utilizaremos la siguiente ruta:

```
https://nodepop.jossidfactory.com/api/anuncios/<id del anuncio que vamos a actualizar>
```

### Para crear anuncios:

Haremos una peticion de tipo **POST** en el body en formato **urlencode** para recibir un body del nuevo anuncio.

Utilizaremos la siguiente ruta:

```
https://nodepop.jossidfactory.com/api/anuncios
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
https://nodepop.jossidfactory.com/api/anuncios/< id del anuncio >
```

