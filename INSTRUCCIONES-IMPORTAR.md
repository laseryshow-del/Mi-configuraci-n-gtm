# COMO IMPORTAR LOS ARCHIVOS CORREGIDOS EN GTM

## Que se arreglo (resumen corto)

- Los eventos NO llegaban al servidor porque la URL estaba mal (faltaba https://)
- Los triggers del servidor NO matcheaban con los nombres de eventos de la web
- El tag de Contact CAPI se disparaba en formulario en vez de WhatsApp
- Tags auto-generados de Facebook duplicaban TODOS los eventos
- Faltaban tags CAPI para ViewContent Show y Lead DK
- El tag de Purchase estaba duplicado en la web

---

## INSTRUCCIONES

### Vas a necesitar estos 2 archivos del repositorio:

| Archivo | Es para |
|---------|---------|
| `GTM-T2ZQP7WV_workspace55.json.js` | Contenedor del **SERVER** |
| `GTM-TNM9JZ3S_v36.json.js` | Contenedor de la **WEB** |

---

### PRIMERO: Importar el SERVER

1. Abri Google Tag Manager: tagmanager.google.com
2. Selecciona el contenedor **"CONTENEDOR DEL SERVER"** (GTM-T2ZQP7WV)
3. Arriba, hace clic en **Administrar** (icono de engranaje)
4. En la columna del contenedor, hace clic en **Importar contenedor**
5. Hace clic en **Elegir archivo** y selecciona: `GTM-T2ZQP7WV_workspace55.json.js`
6. En "Elegir espacio de trabajo", dejalo en el que aparece
7. **MUY IMPORTANTE**: Selecciona **"Sobrescribir"** (NO "Combinar")
8. Hace clic en **Confirmar**
9. Ahora hace clic en **Enviar** (arriba a la derecha, boton azul)
10. Ponele de nombre: "Correccion server-side Feb 2026"
11. Hace clic en **Publicar**

---

### SEGUNDO: Importar la WEB

1. Volve a la lista de contenedores
2. Selecciona el contenedor **"CONTENEDOR DE LA WEB"** (GTM-TNM9JZ3S)
3. Arriba, hace clic en **Administrar**
4. En la columna del contenedor, hace clic en **Importar contenedor**
5. Hace clic en **Elegir archivo** y selecciona: `GTM-TNM9JZ3S_v36.json.js`
6. Selecciona **"Sobrescribir"**
7. Hace clic en **Confirmar**
8. Hace clic en **Enviar**
9. Ponele de nombre: "Correccion eventos Feb 2026"
10. Hace clic en **Publicar**

---

## COMO VERIFICAR QUE FUNCIONA

1. En GTM WEB, hace clic en **Vista previa** (Preview)
2. Pone la URL: https://laserman.com.ar
3. Se abre tu sitio con el debugger
4. En el debugger fijate que aparezcan estos tags disparados:
   - En la home: **Meta Pixel - ViewContent Home** y **GA4 - ViewContent Home**
   - Al hacer clic en WhatsApp: **Meta Pixel - Contact WhatsApp** y **GA4 - Contact WhatsApp**

5. Despues anda a Meta Events Manager (business.facebook.com/events_manager)
6. Selecciona tu pixel y anda a **Eventos de prueba**
7. Los eventos deben aparecer como **Browser + Server** (los dos)
8. Debe decir **"Deduplicado"** al lado de cada evento

---

## SI ALGO SALE MAL

- Si despues de importar no ves tags: revisa que seleccionaste "Sobrescribir" y no "Combinar"
- Si los eventos llegan solo como Browser pero no Server: revisa en el Preview del SERVER que lleguen los eventos GA4
- Si nada funciona: NO borres nada, sacale capturas y las revisamos

---

## SOBRE LOS 3 BOTONES (Boliche, Cultura, Productor)

Los triggers para esos botones ya existen (Click_Boliche, Click_Cultura, Click_Productores) pero no tienen tags de Meta Pixel ni GA4 conectados. Si queres que esos clics se trackeen en Meta, decime y los agrego. Necesito saber que evento de Meta queres usar para ellos.
