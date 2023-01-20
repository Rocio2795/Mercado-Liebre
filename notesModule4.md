# Anatomía de un sitio web

<style>
yellow { background-color: #FFC107 }
gray { background-color: #808080 }
green { background-color: #8BC34A }
purple { background-color: #673ab7}
</style>

## Node

### Node requirements

**Paso 1:** Crear aplicacion de node en la carpeta del projecto
`npm init -y` Este comando genera un archivo `package.json`

**Paso 2:** Crear el archivo `app.js` e installar `npm i --save-dev express` dentro de el projecto. Con este comando se crea la carpeta `node_modules` y modifica el archivo `package.json` con `"dependecies": {"express": "^4.18.2"}`.

**Paso 3:** Requerir express.

```js
const express = require("express"); \\ en el archivo app.js.
```

**Paso 4:** Declarar una constate:

```js
const app = express();
```

**Paso 5:** Levantar el servidor de node:

```js
app.listen(3000, () => {
   console.log("The server is run in the port 3000");
});
```

**Paso 6:** ruta por get:

```js
app.get('/', (req, res) => {
    res.send("Hola mundo");
})
```

**Paso 7:** Instalar nodemon:

En la terminal installr `npm i nodemon` o `sudo npm install -g nodemon`, luego ir a `package.json` en dependencies.

**Paso 8:** Ejecutar el servidor nodemon:

`npx nodemon app.js`
`localhost:3000`

### Node.js v19.0.0 --watch option

Cualquier cambio que surga se actualizado en el servidor creado
CMD node `--watch [your-file-name]`. Example: `node --watch app.js`

### Kill a process running on the specified port in Linux

Check the port: `ss -tl`
Close the port: `npx kill-port 3000`

## CSS

### Propiedades tipográficas

* `font-family: Arial, sans-serif;` Permite elegir la familia tipográfica
* `font-size: 23px;` Permite definir el tamaño tipografico
* `font-style: normal;` Define el estilo de la tipografía. Recibe los valores italic, normal y oblique. Para elementos, como `<em>`, el valor por defecto será italic
* `font-weight: 500;` Define el peso de la tipografía. Recibe los valores bold, lighter, normal, entre otros. Para algunos tags el valor por defecto será bold
* `text-align: justify;` Permite definir la alineación del texto. Los valores que recibe son center, left, right, inherit y justify. El valor por defecto para todos los elementos es left.
* `text-decoration: underline;` Permite elegir un tipo de decoración para el texto. Recibe los valores line-through, underline, overline y none. Para algunos elementos, como enlaces, el valor por defecto será underline.
* `line-height: 20px;` Permite definir el alto de cada linea de texto. Esto también suele llamarse interlineado. Por lo general esta relacionado con el tamaño de la letra o `font-size`.

### Colores

**Color del texto:**

* Nombre: `color: purple`
* Hexadecimal: `color: #f05331`
* RGB: `color: rgb(255,100,50)`
* RGBA: `color: rgba(122, 50, 125, 0.5)`. El último número representa la opacidad que tendrá el elemento. Va del 0 al 1 y mietras menor el número, mayor la transparencia.

**Color de fondo:**

El atributo background-color nos permite asignarle un **color de fondo** a un elemento.

* `background-color: tomato`
* `background-color: #3459ff`
* `background-color: rgb(12, 34, 32)`

**La opacidad:**

Mediante el atributo **opacidad** le otorgamos trasnparencia a todo el elemento.

`p {opacidad: 0.5}`

## Fondos

**Imagen de fondo:** Nos permite asignarle una imagen de fondo al elemento, definiendo la ruta a través de la URL.

```CSS
body { background-image: url("http:// o ../img/bici.jpg")}
```

**Background-repeat:** Nospermite controlar si se va a repetir, y de qué manera, la imagen dispuesta. Recibe los valores `repeat`, `repeat-x`, `repeat-y`, `round` y `space`.

```CSS
body { background-repeat: repeat-x}
```

**Background-position:** Nos permite mover la imagen dentro del elemento y decidir dónde colocarla. Recibe como valores tamaños en pixeles y porcentajes, así como también right, bottom, left, etc... Podemos asignarle uno o dos valores. El primero  para especificarla posición en el eje x y el segundo, la posición en el eje y.

```CSS
body { background-position: right top}
```

**Background-attachment:** Nospermite establecer si la imagen de fondo se va a mover junto con la página al hacer scroll o si se va a quedar fija. Recibe como valor `fixed`, `scroll`, `inherit` e `initial`.

```CSS
body { background-position: fixed}
```

**Background-size:** Nos permite establecer el tamaño de la imagen de fondo. Recibe como valor `contain`, `cover`, `inherit`; así como también tamaños en *pixeles* y *porcentajes*, indicando con el primer valor el ancho y con el segundo el alto.

```CSS
body {background-size: 130px}
```

## Google fonts

1. Ir a <https://fonts.google.com>
2. Selecionar dando clic o filtrar search fonts, por ejemplo filtrar la fuente **lato**
3. Dar clic en la fuente filtrada
4. Seleccionar los diferentes styles que desea para su pagina **Select Light 300 +** & **Select Regular 400 +**
5. Ir a **Use on the web** y compiar el `<link>`, este debe pegarlo en el `<head>` de tu **HTML**.

   ```html
   <!-- Use on the web -->
   <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet">
   </head>
    ```

6. Por último en Google Fonts, abajo de **Use on the web**, compiar el codigo para **CSS**, que se encuentra en **CSS rules to specify families** y agregaron en tu hoja de styles de **CSS**.

    ```CSS
    /* CSS rules to specify families */
    font-family: 'Lato', sans-serif;
    ```

**Para aplicar a toda tu pagina web:**

```CSS
body {
    font-family: 'Lato', sans-serif;;
}
```

**Para aplicar un style (de los selecionados en Google Fonts) a un elemento:**

```CSS
h1 {
    font-weight: 300;
}
```

## Normalize CSS

1. Ir <https://necolas.github.io/normalize.css/> y dar clic en  **Download v8.0.1**
2. Dar clic derecho en Guardar como: `normalize.css`
3. Subir el archivo al projecto, carpeta CSS
4. Por ultimo, vincular `normalize.css`en nuestro archivo `index.html`

```html
<head>
    <link rel="stylesheet" href="/CSS/normalize.css">
    <!-- Recomendacion: colocar siempre la hoja de style de ultimas en el head -->
    <link rel="stylesheet" href="/CSS/styles.css" />
</head>
```

---

## Modelo de caja

En HTML todos los elementos se representan mediante cajas, eso se conoce como el **modelo de caja**. Cada caja se compone de contenido (content), relleno (padding), bordes (border) y márgenes (margin).

![Modelo de caja](../module_04/class_19_disign_adaptive/img/box-elements.png)

:warning: Muchas de las propiedades solo aplican a elementos de bloque o semi-bloque.

### Propiedad Width

Si un elemento de bloque no tiene declarada la propiedad width, el ancho será igual al 100% de su padre contenedor.

```CSS
div {
    width: 120px;
}
```

### Propiedad Height

Si un elemento no tiene declarado la propiedad height, el alto será igual a la altura que le proporcieone su contenido. Sea un elemento de bloque o de línea.

:warning: Para la altura de los elementos no se recomienda usar porcentaje.

```CSS
div {
    height: 130px;
}
```

![Width y height en un elemento](../module_04/class_19_disign_adaptive/img/width_height.png)

### Padding

Es el espacio de **relleno** que podemos agregar **entre** el **contenido** del elemento y su **borde**.

![Propiedad padding](../module_04/class_19_disign_adaptive/img/padding.png)

```css
div { padding: 12px;}
```

Esto quiere decir que el relleno de **12px** se aplicará a todos los lados.

```css
div { padding: 12px 20px;}
```

**12px** de relleno para arriba y abajo.
**20px** de relleno para izquierda y derecha

```css
div { padding: 12px 20px 18px;}
```

**12px** de relleno para arriba
**20px** de relleno para izquierda y derecha
**18px** de relleno para abajo.

```css
div { padding: 12px 15px 18px 21px;}
```

**12px** de relleno para arriba
**15px** de relleno para la derecha
**18px** de relleno para abajo
**21px** de relleno para la izquierda.

### Propiedades abreviadas

Hay propiedades que se pueden aplicar de maner especifica a uno de los costados de la caja.

Cuando escribimos un solo valor para padding, por ejemplo:

```css
div { padding: 15px }
```

Loa que en realidad está pasando, sin que nos demos cuenta, es esto:

```css
div {
    padding-top: 15px; padding-right: 15px;
    padding-bottom: 15px; padding-left: 15px;
}
```

![Propiedades abreviadas](../module_04/class_19_disign_adaptive/img/propiedadesAbrev.png)

### Border

Hace referencia al borde del elemento. Se ubica entre el contenido y el margen.

![border](class_19_disign_adaptive/img/border.png)

Podemos asignarle un valor a esta propiedad definiendo el **estilo de linea**, su **espesor** y su **color**.

El estilo de línea puede ser `solid`, `dotted`, `dahsed` o `double`.
El espesor de línea puede ser cualquier unidad de medida de CSS.
El color puede ser cualquier color válido de CSS.

```css
div { border: solid 3px yellow}
```

### Margin

Hace referencia al **margen exterior** del elemento. Sirve para separa una caja de otra.

![margin](class_19_disign_adaptive/img/margin.png)

De la misma manera que con padding, podemos asignar también 2, 3 y hasta 4 valores para la propiedad.

```css
div { margin: 20px 15px}
div { margin: 20px 15px 30px }
div { margin: 20px 15px 30px 25px }
```

### box-sizing

#### Calculando el ancho y el alto

Para poder calcular el ancho o el alto total de un elemento, tenemos que sumar todas las propiedades que vimos antes.
Como se pueden imaginar, hacer este cálculo para saber cuánto va a ocupar un elemento finalmente es bastante trabajoso.
La propiedad `box-sizing` nos ayuda con este cálculo.

![box-sizing](class_19_disign_adaptive/img/box-sizing.png)

#### box-sizing: content-box

Por defecto su valor será `content-box`, y el comportamiento será el de aplicarle el ancho y alto que definamos al contenido del elemento.

![content-box](class_19_disign_adaptive/img/content-box.png)

#### box-sizing: border-box

Si le asignamos el valor `border-box`, el ancho y alto que indiquemos tomará en cuenta no solo el contenido del elemento, sino también el padding y el borde, dejando solo el margen por fuera.

![border-box](class_19_disign_adaptive/img/border-box1.png)
![border-box 2](class_19_disign_adaptive/img/border-box2.png)

>:warning: Es una práctica muy común asignarle **box-sizing: border-box** a todos los elementos del sitio con la siguiente línea de código:

```css
* {box-sizing: border-box }
```

## Viewport

¿Qué es el viewport? En palabras sencillas, es la parte visible de cualquier navegador web, en la cual se puede ver el contenido de la página, sin tener que hacer scroll.

Es decir, que el viewport (en español, puerto visible) es en donde se muestra el contenido de nuestros documentos HTML.

### Etiqueta viewport

La etiqueta `<meta>` viewport da al browser instrucciones de como se debe dimensionar y escalar la página webal cargarse.

Esta es la estructura basica de este tab.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

![viewport](class_19_disign_adaptive/img/viewport.png)

## Medidas relativas

Según de qué medida estemos hablando, el número que pongamos será relativo a:

* El contenedor padre.
* El tamaño de la fuente del sitio.
* El tamaño de la fuente del contenedor padre.
* El tamaño del viewport.

### Porcentajes

Cualquier medida expresada en porcentaje siempre estará relacionada con la medida (en ese mismo eje) del elemento padre que la contiene.
Si el contenedor padre mide 300px de ancho y le asignamos un ancho del 50% al elemento interior, este medirá 150px (el 50% del ancho padre).
>:warning: Ojo: no se recomienda usar porcentajes para el alto de un elemento.

```css
.elementoContenedor { width: 300px }
.elementoInterior { width: 50% } // Será 150px
```

Una buena herramienta para calcular o hacer el traslado de píxeles a porcentajes, es la regla de 3 simple.
Para cada elemento del contenedor padre, el cálculo sería:

<yellow> elemento hijo</yellow> * 100 / <gray>elemento padre</gray> = **porcentaje**

![calcular-porcentaje](class_19_disign_adaptive/img/porcentaje.png)

Entonces, si calculamos cada elemento, nos quedaría así:

><yellow>300</yellow> \* 100 / 1200 = 25%
><green>700</green> \* 100 / 1200 = 58.33%
><purple>200</purple> \* 100 / 1200 = 16.66%

![calculo-porcentaje](class_19_disign_adaptive/img/calc-porcentaje.png)

### em y rem

#### Cómo funcionan los ems

Los **ems** son siempre **relativos al elemento padre**. Tomarán como valor de referencia la propiedad **font-size**.

El punto de referencia inicial es el valor de **font-size** del elemento `<html>`, que por defecto es **16px**. El resto de los elementos tendrán **1em** de **font-size** que equivale al mismo valor que tenga el padre.

Si le asignamos 1.5em al font-size de cualquier elemento, el tamaño resultante será el valor del padre multiplicado por el valor en ems → **16px * 1.5 = 24px**.

```css
p { font-size: 1.5em } // 16px * 1.5 = 24px
```

Si utilizamos ems en una propiedad que no sea font-size, se tomará para el cálculo el **font-size** que tenga el elemento que estemos modificando.

Por lo general, se utilizan este tipo de unidades para todo lo que sea relacionado a la tipografía, pero también podemos aplicarlo a otras propiedades como margin y padding para que varíen en función de los tamaños de las fuentes.

```css
p {
    font-size: 20px;
    line-height: 2em; // 20px * 2 = 40px
padding: 1.5em; // 20px * 1.5 = 30px
}
```

##### Calculando los ems de los elementos

```html
<html>  → font-size: 16px
    <body>  → font-size: 1em → 16px
        <div>  → font-size: 1em → 16px
            <p>  → font-size: 1em → 16px
                <strong>Hola!</strong>  → font-size: 1em → 16px
            </p>
        </div>
    </body>
</html>
```

Si cambiamos el font-size del `<div>` a **2em**, este tendrá 2 veces el tamaño del font-size de su padre.

Por lo tanto el `<div>` y todos sus hijos tendrán **32px** de font-size.

```html
<html>  → font-size: 16px
    <body>  → font-size: 1em → 16px
        <div>  → font-size: 2em → 16px * 2 → 32px
            <p>  → font-size: 1em → 32px
                <strong>Hola!</strong>  → font-size: 1em → 32px
            </p>
        </div>
    </body>
</html>
```

Teniendo en cuenta lo anterior, si a `<p>` le asignamos un **font-size** de **1.5em**, el cálculo se hará en base al tamaño de su padre, el `<div>`: 32px * 1.5 = 48px.

Nuevamente, todos los hijos de `<p>` heredarán ese tamaño de fuente.

```html
<html>  → font-size: 16px
    <body>  → font-size: 1em
        <div>  → font-size: 2em → 32px
            <p>  → font-size: 1.5em → 32px * 1.5 → 48px
                <strong>Hola!</strong>  → font-size: 1em → 48px
            </p>
        </div>
    </body>
</html>
```

Si ahora cambiamos el font-size del elemento `<html>` a **10px**, todos los elementos cambiarán de tamaño sin haber modificado directamente su font-size.

```html
<html>  → font-size: 10px
    <body>  → font-size: 1em → 10px
        <div>  → font-size: 2em → 20px
            <p>  → font-size: 1.5em → 30px
                <strong>Hola!</strong>  → font-size: 1em → 30px
            </p>
        </div>
    </body>
</html>
```

#### Cómo funcionan los rems

Los rems funcionan muy parecido a los ems, con la diferencia de que siempre tomarán de base el tamaño de font size del elemento `<html>`.

Eso quiere decir que el tamaño expresado en rems no modificará el de los elementos hijos y tampoco se verá afectado por el del elemento padre.

Por lo general es mejor usar rems en lugar de ems ya que conservamos las ventajas de una unidad relativa, pero nos evitamos hacer cálculos complejos y estar pendientes de cómo se afectan los elementos entre sí.

```css
p { font-size: 1.5rem }
```

Teniendo en cuenta lo anterior, podemos asignar distintos valores a los elementos sin que estos afecten a los otros. Todos los elementos tomarán de base el tamaño de font-size del elemento `<html>`.

```html
<html>  → font-size: 16px
    <body>  → font-size: 2rem → 16px * 2 → 32px
        <div>  → font-size: 3rem → 16px * 3 → 48px
            <p>  → font-size: 1rem → 16px
                <strong>Hola!</strong>  → font-size: 0.5rem → 16px * 0.5 → 8px
            </p>
        </div>
    </body>
</html>
```

### Medidas de viewport

El viewport es el espacio visible que tiene el navegador para mostrar el sitio.

Eso quiere decir que se pueden utilizar medidas relativas a este espacio para poder determinar el tamaño de ciertos elementos.

#### Viewport width y viewport height

**vw** o viewport width es relativo al ancho total del viewport.
**vh** o viewport height es relativo al alto total del viewport.

Ambas medidas están expresadas como porcentajes del total, eso quiere decir que **50vh** será equivalente al 50% del alto disponible en el viewport.

```css
div {
    width: 25vw; // 25% del ancho disponible
    height: 50vh; // 50% del alto disponible
}
```

#### Visualizando vh y vw

Cualquier medida expresada en viewport width (vw) o viewport height (vh) tomará siempre como referencia al viewport del documento.

![viewport-view](class_19_disign_adaptive/img/viewport-medida.png)

## Media queries

Son un conjunto de reglas de CSS que nos permiten cambiar los estilos de los elementos en función de las características del dispositivo que esté visualizando nuestro sitio.

La mayor parte de nuestros estilos estarán fuera de las media queries. Dentro de cada media query escribiremos solo aquello que necesitemos ajustar para ese tamaño de viewport.

Por lo general, se escriben al final de nuestra hoja de CSS.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### min-widht

Al especificar min-width estamos diciendo: “si como mínimo el viewport tiene **N** píxeles de ancho, apliquemos estas reglas”.
Similar a decir → **“Desde este ancho, hacia arriba”**.

```css
@media (min-width: 460px){
    body {
        background: red;
    }
}
```

### max-width

Al especificar max-width estamos diciendo: “si como máximo viewport tiene **N** píxeles de ancho, apliquemos estas reglas”.
Similar a decir → **“Desde este ancho, hacia abajo”**.

```css
@media (max-width: 768px){
    body {
        background: yellow;
    }
}
```

### Orientación

Al especificar la orientación (*portrait o landscape*) estamos diciendo: “si como máximo el viewport tiene **N** píxeles de ancho y además el dispositivo está en posición vertical/horizontal, apliquemos estas reglas”.

```css
@media (max-width: 460px) and (orientation: landscape){
    body {
        background: blue;
    }
}
```

## Estrategias de diseño

### :white_check_mark: Mobile first

Si utilizamos mobile first como estrategia de diseño, la idea es determinar de manera general las reglas CSS para pequeñas pantallas para luego, a través de media queries, ir aclarando el comportamiento en viewports más grandes.

![mobile-first](class_19_disign_adaptive/img/mobile-first.png)

```css
body {
    background: red;
}
@media (min-width: 460px){
    /* Tablets */
}
@media (min-width: 768px){
    /* Laptop */
}
```

### Mobile last (no recomendado)

Si utilizamos **mobile last** como estrategia de diseño, la idea es determinar de manera general las reglas CSS para **grandes pantallas** para luego, a través de media queries, ir aclarando el comportamiento en viewports más pequeños.

![mobile-last](/img/mobile-last.png)

```css
body {
    background: red;
}
@media (max-width: 768px){
    /* Tablets */
}
@media (max-width: 460px){
    /* Smartphones */
}
```

### Los breakpoints

Llamamos breakpoints o puntos de quiebre a cada salto de tamaño sobre el cual aplicamos una media query.

No hay una regla fija sobre cuáles usar, pero acá dejamos los más utilizados.

![breakpoints](/img/breakpoints.png)

:white_check_mark:
:open_file_folder:
:page_with_curl:
:bulb:
:heavy_check_mark:
:heavy_exclamation_mark:
:ballot_box_with_check:
<https://github-emoji-picker.vercel.app/>
