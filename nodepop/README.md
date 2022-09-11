# nodePop

## Para arrancar la aplicación:

### En modo producción:

```
npm start
```

### En modo desarrollo:
```
npm run dev
```

### Modelo de los anuncios.

```
const anuncioSchema = mongoose.Schema({
    name: String,
    sale: Boolean,
    price: Number,
    photo: String,
    tags: [String]
});
```