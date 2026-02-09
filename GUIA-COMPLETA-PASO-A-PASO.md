# GUIA COMPLETA: Configurar todo de cero

German, hay 3 cosas que hacer. Van en este orden.

---

## PARTE 1: Instalar el codigo del Data Layer en tu sitio

Este codigo es el que genera el `event_id` para cada evento. SIN ESTO la deduplicacion no funciona y Meta muestra 0%.

### Pasos:

1. Entra a WordPress (laserman.com.ar/wp-admin)
2. Anda a **WPCode** (o el plugin que uses para meter codigo)
3. Crea un nuevo snippet de tipo **"Header Script"**
4. Pega TODO el contenido del archivo `datalayer-laserman.js`
5. Asegurate que se ejecute en **TODAS las paginas**
6. Activalo y guarda

### Que hace este codigo:

- Genera un ID unico para cada evento (necesario para deduplicar)
- Lee las cookies _fbp y _fbc de Facebook
- Detecta automaticamente clics en WhatsApp (links y widget flotante)
- Detecta clics en los 3 botones (Boliche, Cultura, Productor)
- Manda todo al Data Layer para que GTM lo lea

---

## PARTE 2: Configurar el plugin Stape en WordPress

Si ya tenes el plugin "GTM Server Side by Stape" instalado:

1. Anda a WordPress → Ajustes → **GTM Server Side**
2. Configura asi:

| Campo | Valor |
|-------|-------|
| GTM Container ID | `GTM-TNM9JZ3S` |
| Server Container URL | `https://marremix.laserman.com.ar` |
| Custom Loader | **ACTIVADO** |
| Data Layer e-commerce | NO (no tenes e-commerce) |
| Add user data to DL | **SI** si te da la opcion |

3. Guarda

### Por que el Custom Loader es importante:

- Hace que GTM y GA4 sean invisibles para los bloqueadores de publicidad
- Sin esto, un 30-40% de los visitantes no se trackean
- Mejora la velocidad de la pagina

---

## PARTE 3: Importar los contenedores de GTM corregidos

### PRIMERO: El SERVER

1. Descarga `GTM-T2ZQP7WV_workspace55.json.js` del repositorio de GitHub
2. Abri **tagmanager.google.com**
3. Entra al contenedor **"CONTENEDOR DEL SERVER"** (GTM-T2ZQP7WV)
4. Menu **Administrar** (engranaje arriba)
5. Hace clic en **Importar contenedor**
6. Subi el archivo
7. Elegir espacio de trabajo: dejalo como esta
8. Selecciona **Sobrescribir**
9. Confirmar
10. Boton azul **Enviar** (arriba a la derecha)
11. Nombre: "Correccion Feb 2026"
12. **Publicar**

### SEGUNDO: La WEB

1. Descarga `GTM-TNM9JZ3S_v36.json.js` del repositorio
2. En GTM, entra al contenedor **"CONTENEDOR DE LA WEB"** (GTM-TNM9JZ3S)
3. Menu **Administrar** → **Importar contenedor**
4. Subi el archivo
5. **Sobrescribir** → Confirmar
6. **Enviar** → Nombre: "Correccion Feb 2026" → **Publicar**

---

## COMO VERIFICAR QUE TODO FUNCIONA

### Test rapido (5 minutos):

1. En GTM WEB, hace clic en **Vista previa** (Preview)
2. Pone: `https://laserman.com.ar`
3. Se abre tu sitio con el debugger de GTM
4. En la lista de la izquierda del debugger, busca:
   - Un evento **Page View** → debe mostrar tags disparados
   - Hace clic en WhatsApp → debe aparecer un evento de clic
5. Cada evento debe tener un `event_id` (NO vacio)

### Test en Meta (10 minutos):

1. Anda a **business.facebook.com/events_manager**
2. Selecciona tu pixel (25699472449663830)
3. Anda a **Eventos de prueba** (Test Events)
4. Pone la URL: `https://laserman.com.ar`
5. Hace clic en **Abrir sitio web**
6. Navega tu sitio: carga la home, hace clic en WhatsApp
7. Volve a Meta y fijate que los eventos aparezcan como:
   - **Browser** + **Server** (los dos)
   - **Deduplicado** al lado

Si ves "Browser" solamente sin "Server", algo fallo en la importacion del servidor.
Si no ves nada, el Data Layer no esta cargando. Revisa el paso 1.

---

## FLUJO COMPLETO DESPUES DE CONFIGURAR TODO

```
Visitante entra a laserman.com.ar
    |
    v
Data Layer genera event_id unico
    |
    +---> Meta Pixel (browser) envia evento con event_id
    |
    +---> GA4 envia evento a marremix.laserman.com.ar (Stape)
              |
              v
         GTM Server recibe el evento
              |
              v
         Meta CAPI envia evento con MISMO event_id
              |
              v
    Meta Events Manager recibe AMBOS
    Deduplica por event_id
    Cuenta como 1 solo evento de alta calidad
    EMQ sube a 6-8+
```

---

## RESUMEN: Que archivo va donde

| Archivo | Donde va | Como |
|---------|----------|------|
| `datalayer-laserman.js` | WordPress → WPCode → Header | Copiar y pegar el contenido |
| `GTM-T2ZQP7WV_workspace55.json.js` | GTM → Contenedor SERVER → Importar | Sobrescribir + Publicar |
| `GTM-TNM9JZ3S_v36.json.js` | GTM → Contenedor WEB → Importar | Sobrescribir + Publicar |
| Plugin Stape | WordPress → Ajustes → GTM Server Side | Configurar URL del server |
