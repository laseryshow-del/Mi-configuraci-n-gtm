# CONFIGURACION DEFINITIVA - LASERMAN.COM.AR

Son 4 pasos. Van EN ORDEN. No saltear ninguno.

---

## PASO 1: Instalar plugin Stape en WordPress

1. Entra a **laserman.com.ar/wp-admin**
2. Anda a **Plugins** → **Agregar nuevo**
3. Busca **"Stape Conversion Tracking"** (antes se llamaba "GTM Server Side")
4. Instala y activa el plugin
5. Anda a **Ajustes** → **Stape** (o "GTM Server Side")
6. Configura asi:

| Campo | Valor |
|-------|-------|
| GTM Container ID | `GTM-TNM9JZ3S` |
| Server Container URL | `https://marremix.laserman.com.ar` |
| Custom Loader | **ACTIVADO** |
| Add User Data to Data Layer | **ACTIVADO** (si aparece) |
| Cookie Keeper | **ACTIVADO** (si aparece) |

7. Guarda los cambios

**Que hace esto:** Agrega el script de GTM en tu sitio, activa el anti-bloqueador de publicidad, y conecta con tu servidor en Stape.

---

## PASO 2: Instalar Data Layer en WordPress (WPCode)

1. En WordPress, anda a **WPCode** (o "Code Snippets")
2. Hace clic en **Agregar nuevo** (Add Snippet)
3. Selecciona **Agregar codigo personalizado**
4. Nombre: **Data Layer Laserman**
5. Tipo de codigo: **JavaScript**
6. Ubicacion: **Header** (importante: debe cargar ANTES que GTM)
7. Copia y pega TODO el contenido del archivo `datalayer-laserman.js`
8. Activa el snippet
9. Guarda

**Que hace esto:** Genera el event_id que Meta necesita para deduplicar. Detecta clics en WhatsApp y en los 3 botones. Captura datos del formulario. Sin esto la deduplicacion SIEMPRE da 0%.

---

## PASO 3: Agregar Data Tag en GTM Web

1. Abri **tagmanager.google.com**
2. Entra al contenedor **"CONTENEDOR DE LA WEB"** (GTM-TNM9JZ3S)
3. Anda a **Etiquetas** → **Nueva**
4. Hace clic en **Configuracion de etiqueta** → **Descubrir mas tipos de etiquetas**
5. Busca **"Data Tag"** (de Stape)
6. Hace clic en **Agregar al espacio de trabajo** → **Agregar**
7. Configura la etiqueta:

| Campo | Valor |
|-------|-------|
| Nombre | **Stape Data Tag - All Events** |
| Server Container URL | `https://marremix.laserman.com.ar` |
| Send all from DataLayer | **ACTIVADO** |
| Send common data | **ACTIVADO** |

8. En **Activacion** (Trigger): selecciona **All Pages** y tambien crea triggers para cada evento custom:
   - Crear trigger tipo "Evento personalizado" con nombre `view_content_home`
   - Crear trigger tipo "Evento personalizado" con nombre `view_content_show`
   - Crear trigger tipo "Evento personalizado" con nombre `contact_whatsapp`
   - Crear trigger tipo "Evento personalizado" con nombre `lead_dk`
   - Crear trigger tipo "Evento personalizado" con nombre `purchase_presupuesto`
   - Crear trigger tipo "Evento personalizado" con nombre `form_submit`
   - Crear trigger tipo "Evento personalizado" con nombre `segment_click`

   O MAS FACIL: un solo trigger tipo "Evento personalizado" con Regex: `.*` (que matchea todos los eventos)

9. Guarda

**Que hace esto:** Toma TODA la informacion del Data Layer (event_id, datos de usuario, cookies) y la envia al servidor de Stape. Es el puente entre tu sitio y el servidor.

---

## PASO 4: Agregar Data Client en GTM Server

1. En GTM, cambia al contenedor **"CONTENEDOR DEL SERVER"** (GTM-T2ZQP7WV)
2. Anda a **Plantillas** (Templates) → en la seccion **Clientes** hace clic en **Nueva**
3. Hace clic en los tres puntitos (⋮) arriba a la derecha → **Importar**
4. Descarga el archivo de aca: https://github.com/stape-io/data-client
   (hace clic en Code → Download ZIP, descomprime, y subi el archivo .tpl)
5. Guarda la plantilla
6. Ahora anda a **Clientes** → **Nuevo**
7. Selecciona **Data Client**
8. Guarda

**Que hace esto:** Recibe las solicitudes del Data Tag y las pone disponibles para los tags de CAPI. Es el "receptor" en el servidor.

---

## PASO 5: Importar contenedores corregidos en GTM

### SERVER primero:
1. En GTM, entra al contenedor **SERVER** (GTM-T2ZQP7WV)
2. **Administrar** → **Importar contenedor**
3. Subi: `GTM-T2ZQP7WV_workspace55.json.js`
4. Selecciona **Combinar** (NO Sobrescribir, porque ya agregaste el Data Client)
5. Si hay conflictos, selecciona **Renombrar**
6. Confirmar → **Enviar** → Nombre: "Config definitiva Feb 2026" → **Publicar**

### WEB despues:
1. En GTM, entra al contenedor **WEB** (GTM-TNM9JZ3S)
2. **Administrar** → **Importar contenedor**
3. Subi: `GTM-TNM9JZ3S_v36.json.js`
4. Selecciona **Combinar** (NO Sobrescribir, porque ya agregaste el Data Tag)
5. Si hay conflictos, selecciona **Renombrar**
6. Confirmar → **Enviar** → Nombre: "Config definitiva Feb 2026" → **Publicar**

---

## VERIFICAR QUE TODO FUNCIONA

### Test rapido en GTM:
1. En GTM Web, hace clic en **Vista previa** (Preview)
2. URL: `https://laserman.com.ar`
3. En el debugger debe aparecer:
   - Data Layer con `event_id` (NO vacio)
   - Tags disparados: Meta Pixel + GA4 + Data Tag

### Test en GTM Server:
1. En GTM Server, hace clic en **Vista previa**
2. Deberias ver solicitudes llegando del Data Client y del GA4 Client

### Test en Meta:
1. Anda a **business.facebook.com/events_manager**
2. Pixel 25699472449663830 → **Eventos de prueba**
3. URL: `https://laserman.com.ar` → Abrir sitio web
4. Los eventos deben mostrar:
   - **Browser + Server** (los dos)
   - **Deduplicado**
   - EMQ arriba de 6

---

## ARQUITECTURA FINAL

```
VISITANTE EN LASERMAN.COM.AR
         |
    [Data Layer JS]
    Genera event_id unico
    Detecta eventos
         |
    [Plugin Stape]
    Carga GTM + Custom Loader
         |
    ┌────┴────────────────┐
    |                     |
[Meta Pixel]         [Data Tag]
 Browser              Envia Data Layer
 fbq('track')         completo al server
    |                     |
    |              [marremix.laserman.com.ar]
    |                     |
    |              ┌──────┴──────┐
    |              |             |
    |         [Data Client] [GA4 Client]
    |              |             |
    |         [Meta CAPI Tags]  [GA4]
    |              |
    v              v
[META EVENTS MANAGER]
    |
    Recibe Browser + Server
    Deduplica por event_id
    EMQ alto = mejores leads
    = mejor segmentacion
    = mas ventas de Laserman
```

---

## TABLA DE EVENTOS (7 + 1)

| # | Evento | Cuando | Meta Event | Valor |
|---|--------|--------|------------|-------|
| 1 | PageView | Todas las paginas | PageView | - |
| 2 | ViewContent Home | Home (/) | ViewContent | $300 |
| 3 | ViewContent Show | Seccion show | ViewContent | $500 |
| 4 | Contact WhatsApp | Clic en WhatsApp | Contact | $1000 |
| 5 | Lead | Formulario enviado | Lead | - |
| 6 | Lead DK | Pagina /dk/ | Lead | $1200 |
| 7 | Purchase Presupuesto | Pagina presupuesto | Purchase | $2000 |
| 8 | Segment Click | 3 botones | Custom | - |

---

## FUENTES

Basado en documentacion oficial de Stape:
- [Data Tag + Data Client](https://stape.io/solutions/data-tag-client)
- [Data Layer en GTM](https://stape.io/blog/end-to-end-guide-on-data-layer-in-google-tag-manager)
- [Enviar datos de web a server](https://stape.io/blog/sending-data-from-google-tag-manager-web-container-to-the-server-container)
- [Deduplicacion de eventos Meta](https://stape.io/blog/how-to-set-up-facebook-event-deduplication-in-google-tag-manager)
- [Data Layer push server a web](https://stape.io/blog/send-datalayer-push-from-server-gtm-to-web-gtm)
- [Meta CAPI setup](https://stape.io/helpdesk/documentation/how-to-set-up-meta-conversions-api)
- [Plugin WordPress](https://wordpress.org/plugins/gtm-server-side/)
