# Prueba tecnica Front Ecomsur 2021

`En cada uno de los subtítulos a partir de "Descripción de la prueba", se agregó contenido indicando como se realizó la prueba, que puntos fueron resueltos y las features que se añadieron`
### Por favor, seguir los siguientes pasos.

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción de la prueba](#descripción-de-la-prueba)
  - [Reglas de entrega](#reglas-de-entrega)

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 ![Running app](/running-app.png)


- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`

## Descripción de la prueba

Se requiere implementar un carrito de compras simple que traiga toda la info del API local, éste debe contar con las siguientes secciones:

- Una lista de ítems mostrando el catálogo de productos. (Product List Page)
- Página de producto mostrando detalle de producto. (Product Display Page)
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Cart Page)
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart) ![mini cart example](/minicart-example.png)

`Se completa cada uno de los puntos en 3 paginas distintas y un navbar para visualizar en todo momento los cantidad de items añadidos al carrito de compras`

#### Las reglas del negocio son:

- Cada ítem del catálogo debe tener un action button con el texto `Add item to cart`.
- Si no hay stock el `action button` debe deshabilitarse
- Cada ítem en el carro debe tener un `action button` para remover el ítem del carro.
- Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

`Se completa cada una de las reglas`

`Se añade botones en el Display Page para que el usuario también pueda añadir productos al carrito de compras sin cambiar de página`

`Se añade lógica en el Display Page para que no se pueda añadir al carrito una cantidad de items mayor al stock disponible del producto`

`Se añade botones en el Cart Page para que se pueda eliminar y/o disminuir productos del carrito de compras`

#### Puntos extras:

- Mostrar el rating y número de reviews en el PLP y PDP
- Usar Redux para mantener el estado global.
- Mantener info de ítems en carrito al recargar la página

`Se completa cada uno de los puntos extra`
#### Notas

- Recuerda la filosofía "Mobile-First Responsive Design".
- Piensa en otras tiendas en linea que hayas usado. El publico final no es necesariamente alguien muy tecnico.
- Si no utilizas el API local tu prueba será descartada.

`Se realiza la prueba técnica siguiendo cada una de las recomendaciones`

## Reglas de entrega

1. Documenta la resolución de tu problema en un un archivo BITACORA.md, además, indica detalladamente cómo instalar las dependencias o archivos necesarios para correr tu aplicación.

2. Es necesario que garantices que tu aplicación pueda correr en la máquina de otra persona.

3. Sube tu respuesta a un repositorio en una cuenta tuya de GitHub, GitLab o BitBucket y da acceso a `kbarcelo@ecomsur.com, ecervantes@ecomsur.com, olepage@ecomsur.com` y posiblemente a otros correos que te pida RRHH

`Se cumple con cada una de las reglas de entrega`

## ¡Gracias por permitirme formar parte de su proceso de Selección! 💪
# Bryan De La Cruz
