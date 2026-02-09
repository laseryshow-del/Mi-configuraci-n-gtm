{
    "exportFormatVersion": 2,
    "exportTime": "2026-02-07 19:26:16",
    "containerVersion": {
        "path": "accounts/6336855581/containers/242224888/versions/36",
        "accountId": "6336855581",
        "containerId": "242224888",
        "containerVersionId": "36",
        "name": "Mi cambió",
        "container": {
            "path": "accounts/6336855581/containers/242224888",
            "accountId": "6336855581",
            "containerId": "242224888",
            "name": "CONTENEDOR DE LA WEB",
            "publicId": "GTM-TNM9JZ3S",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1770489708237",
            "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/6336855581/containers/242224888/workspaces?apiLink=container",
            "features": {
                "supportUserPermissions": true,
                "supportEnvironments": true,
                "supportWorkspaces": true,
                "supportGtagConfigs": false,
                "supportBuiltInVariables": true,
                "supportClients": false,
                "supportFolders": true,
                "supportTags": true,
                "supportTemplates": true,
                "supportTriggers": true,
                "supportVariables": true,
                "supportVersions": true,
                "supportZones": true,
                "supportTransformations": false
            },
            "tagIds": [
                "GTM-TNM9JZ3S"
            ]
        },
        "tag": [
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "126",
                "name": "Meta Pixel - Lead",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\nfbq('track', 'Lead', {\n  content_name: 'Formulario Web',\n  currency: 'ARS',\n  value: 0\n}, {eventID: '{{DL - Event ID}}'});\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770240090567",
                "firingTriggerId": [
                    "124"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "129",
                "name": "Google Tag - Base",
                "type": "googtag",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "tagId",
                        "value": "{{Analitycs}}"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "LIST",
                        "key": "configSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "server_container_url"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{Subdomine STAPE}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbp"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbp}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "fingerprint": "1770491215680",
                "firingTriggerId": [
                    "2147479573"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "130",
                "name": "Meta Pixel - Base",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n!function(f,b,e,v,n,t,s)\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\nn.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];\ns.parentNode.insertBefore(t,s)}(window, document,'script',\n'https://connect.facebook.net/en_US/fbevents.js');\n\nfbq('init', '25699472449663830', {\n  em: '{{DL - em}}',\n  ph: '{{DL - ph}}',\n  fn: '{{DL - fn}}',\n  ln: '{{DL - ln}}',\n  external_id: '{{DL - Event ID}}'\n});\n\nfbq('track', 'PageView', {}, {eventID: '{{DL - Event ID}}'});\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770253100567",
                "firingTriggerId": [
                    "2147479553"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "142",
                "name": "Meta Pixel - ViewContent Home",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\nfbq('track', 'ViewContent', {\n  content_name: 'Home_General',\n  content_category: 'pagina',\n  currency: 'ARS',\n  value: 300\n}, {eventID: '{{DL - Event ID}}'});\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770456328117",
                "firingTriggerId": [
                    "137"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                },
                "setupTag": [
                    {
                        "tagName": "Meta Pixel - Base"
                    }
                ]
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "143",
                "name": "Meta Pixel - ViewContent Show",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\nfbq('track', 'ViewContent', {\n  content_name: 'Seccion_Show',\n  content_category: 'seccion',\n  currency: 'ARS',\n  value: 500\n}, {eventID: '{{DL - Event ID}}'});\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770453390621",
                "firingTriggerId": [
                    "138"
                ],
                "setupTag": [
                    {
                        "tagName": "Meta Pixel - Base"
                    }
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "144",
                "name": "Meta Pixel - Contact WhatsApp",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\nfbq('track', 'Contact', {\n  content_name: 'WhatsApp_Home',\n  content_category: 'contacto',\n  currency: 'ARS',\n  value: 1000\n}, {eventID: '{{DL - Event ID}}'});\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770453608454",
                "firingTriggerId": [
                    "139"
                ],
                "setupTag": [
                    {
                        "tagName": "Meta Pixel - Base"
                    }
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "145",
                "name": "Meta Pixel - Lead DK",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\nfbq('track', 'Lead', {\n  content_name: 'Presentacion_DK',\n  content_category: 'lead',\n  currency: 'ARS',\n  value: 1200\n}, {eventID: '{{DL - Event ID}}'});\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770453717520",
                "firingTriggerId": [
                    "140"
                ],
                "setupTag": [
                    {
                        "tagName": "Meta Pixel - Base"
                    }
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "147",
                "name": "GA4 - ViewContent Home",
                "type": "gaawe",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "sendEcommerceData",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "content_name"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "Home_General"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "value"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "300"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "em"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - em}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ph"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ph}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fn"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fn}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ln"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ln}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "client_user_agent"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{JS - User Agent}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "currency"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "ARS"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbp"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbp}}"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventName",
                        "value": "view_content_home"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementIdOverride",
                        "value": "{{Analitycs}}"
                    }
                ],
                "fingerprint": "1770454262935",
                "firingTriggerId": [
                    "137"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "148",
                "name": "GA4 - Lead Event",
                "type": "gaawe",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "sendEcommerceData",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "em"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - em}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ph"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ph}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fn"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fn}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ln"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ln}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbp"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbp}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "client_user_agent"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{JS - User Agent}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "value"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "0"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "currency"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "ARS"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "content_name"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "Formulario Web"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventName",
                        "value": "generate_lead"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementIdOverride",
                        "value": "{{Analitycs}}"
                    }
                ],
                "fingerprint": "1770455311719",
                "firingTriggerId": [
                    "124"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "149",
                "name": "GA4 - Lead DK",
                "type": "gaawe",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "sendEcommerceData",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "em"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - em}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ph"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ph}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fn"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fn}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ln"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ln}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbp"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbp}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "client_user_agent"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{JS - User Agent}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "value"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "1200"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "currency"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "ARS"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "content_name"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "Presentacion_DK"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventName",
                        "value": "lead_dk"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementIdOverride",
                        "value": "{{Analitycs}}"
                    }
                ],
                "fingerprint": "1770455687569",
                "firingTriggerId": [
                    "140"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "150",
                "name": "GA4 - Purchase Presupuesto",
                "type": "gaawe",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "sendEcommerceData",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "em"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - em}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ph"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ph}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fn"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fn}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ln"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ln}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbp"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbp}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "client_user_agent"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{JS - User Agent}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "value"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "2000"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "currency"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "ARS"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "content_name"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "Presupuesto_2026"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventName",
                        "value": "purchase_presupuesto"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementIdOverride",
                        "value": "{{Analitycs}}"
                    }
                ],
                "fingerprint": "1770456044979",
                "firingTriggerId": [
                    "141"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "151",
                "name": "Meta Pixel - Purchase Presupuesto",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  fbq('track', 'Purchase', {\n    content_name: 'Presupuesto_2026',\n    content_category: 'presupuesto',\n    currency: 'ARS',\n    value: 2000\n  }, {eventID: '{{DL - Event ID}}'});\n</script>\n"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1770467050359",
                "firingTriggerId": [
                    "141"
                ],
                "setupTag": [
                    {
                        "tagName": "Meta Pixel - Base"
                    }
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "152",
                "name": "GA4 - Contact WhatsApp",
                "type": "gaawe",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "sendEcommerceData",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "em"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - em}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ph"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ph}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fn"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fn}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ln"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ln}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbp"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbp}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "client_user_agent"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{JS - User Agent}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "content_name"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "WhatsApp_Home"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "value"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "1000"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "currency"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "ARS"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventName",
                        "value": "contact_whatsapp"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementIdOverride",
                        "value": "{{Analitycs}}"
                    }
                ],
                "fingerprint": "1770467412476",
                "firingTriggerId": [
                    "139"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "tagId": "170",
                "name": "GA4 - ViewContent Show",
                "type": "gaawe",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "sendEcommerceData",
                        "value": "false"
                    },
                    {
                        "type": "LIST",
                        "key": "eventSettingsTable",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "event_id"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - Event ID}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "content_name"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "Seccion_Show"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "value"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "500"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "em"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - em}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ph"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ph}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fn"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fn}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "ln"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - ln}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "fbc"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{DL - fbc}}"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameter",
                                        "value": "client_user_agent"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "parameterValue",
                                        "value": "{{JS - User Agent}}"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "eventName",
                        "value": "view_content_show"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "measurementIdOverride",
                        "value": "{{Analitycs}}"
                    }
                ],
                "fingerprint": "1770494000001",
                "firingTriggerId": [
                    "138"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                },
                "consentSettings": {
                    "consentStatus": "NOT_SET"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "124",
                "name": "CE - Form Submit",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "form_submit"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770239706599"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "133",
                "name": "Click_Boliche",
                "type": "CLICK",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Click Text}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "Boliches"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770346005391"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "134",
                "name": "Click_Cultura",
                "type": "CLICK",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Click Text}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "Cultura"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770345953740"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "135",
                "name": "Click_Productores",
                "type": "CLICK",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Click Text}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "Productores"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770345991318"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "137",
                "name": "PV - Home",
                "type": "PAGEVIEW",
                "filter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Page Path}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "/"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770449221947"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "138",
                "name": "PV - Show Section",
                "type": "PAGEVIEW",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Page Path}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "show"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770449342262"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "139",
                "name": "Click - WhatsApp",
                "type": "LINK_CLICK",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Click URL}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "wa.me"
                            }
                        ]
                    }
                ],
                "autoEventFilter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Click URL}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "wa.me"
                            }
                        ]
                    }
                ],
                "waitForTags": {
                    "type": "BOOLEAN",
                    "value": "true"
                },
                "checkValidation": {
                    "type": "BOOLEAN",
                    "value": "false"
                },
                "waitForTagsTimeout": {
                    "type": "TEMPLATE",
                    "value": "2000"
                },
                "uniqueTriggerId": {
                    "type": "TEMPLATE"
                },
                "fingerprint": "1770451456591"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "140",
                "name": "PV - DK",
                "type": "PAGEVIEW",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Page Path}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "/dk/"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770452626257"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "triggerId": "141",
                "name": "PV - Presupuesto",
                "type": "PAGEVIEW",
                "filter": [
                    {
                        "type": "CONTAINS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{Page Path}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "presupuesto2026"
                            }
                        ]
                    }
                ],
                "fingerprint": "1770452722515"
            }
        ],
        "variable": [
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "117",
                "name": "DL - Event ID",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "event_id"
                    }
                ],
                "fingerprint": "1770253221295",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "118",
                "name": "DL - em",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "em"
                    }
                ],
                "fingerprint": "1770239394359",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "119",
                "name": "DL - ph",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ph"
                    }
                ],
                "fingerprint": "1770239434979",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "120",
                "name": "DL - fn",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "fn"
                    }
                ],
                "fingerprint": "1770239480468",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "121",
                "name": "DL - ln",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "ln"
                    }
                ],
                "fingerprint": "1770239538342",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "122",
                "name": "DL - fbp",
                "type": "k",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "decodeCookie",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "_fbp"
                    }
                ],
                "fingerprint": "1770286540266",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "123",
                "name": "DL - fbc",
                "type": "k",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "decodeCookie",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "_fbc"
                    }
                ],
                "fingerprint": "1770286577010",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "128",
                "name": "Analitycs",
                "type": "c",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "value",
                        "value": "G-J4JTN4JRE0"
                    }
                ],
                "fingerprint": "1770241687763",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "132",
                "name": "JS - User Agent",
                "type": "jsm",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "javascript",
                        "value": "function() {\n    return navigator.userAgent;\n}"
                    }
                ],
                "fingerprint": "1770289829269",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "136",
                "name": "LookUp - Scroll Event Name",
                "type": "smm",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "input",
                        "value": "{{Scroll Depth Threshold}}"
                    },
                    {
                        "type": "LIST",
                        "key": "map",
                        "list": [
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "key",
                                        "value": "50"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "scroll_50"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "key",
                                        "value": "75"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "scroll_75"
                                    }
                                ]
                            },
                            {
                                "type": "MAP",
                                "map": [
                                    {
                                        "type": "TEMPLATE",
                                        "key": "key",
                                        "value": "90"
                                    },
                                    {
                                        "type": "TEMPLATE",
                                        "key": "value",
                                        "value": "scroll_90"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "fingerprint": "1770440275889",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "168",
                "name": "URL Server STAPE",
                "type": "c",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "value",
                        "value": "https://marremix.laserman.com.ar"
                    }
                ],
                "fingerprint": "1770490537122",
                "formatValue": {}
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "variableId": "169",
                "name": "Subdomine STAPE",
                "type": "c",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "value",
                        "value": "https://marremix.laserman.com.ar"
                    }
                ],
                "fingerprint": "1770490628877",
                "formatValue": {}
            }
        ],
        "builtInVariable": [
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "PAGE_URL",
                "name": "Page URL"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "PAGE_HOSTNAME",
                "name": "Page Hostname"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "PAGE_PATH",
                "name": "Page Path"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "REFERRER",
                "name": "Referrer"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "EVENT",
                "name": "Event"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CLICK_ELEMENT",
                "name": "Click Element"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CLICK_CLASSES",
                "name": "Click Classes"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CLICK_ID",
                "name": "Click ID"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CLICK_TARGET",
                "name": "Click Target"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CLICK_URL",
                "name": "Click URL"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CLICK_TEXT",
                "name": "Click Text"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "FORM_ELEMENT",
                "name": "Form Element"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "FORM_CLASSES",
                "name": "Form Classes"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "FORM_ID",
                "name": "Form ID"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "FORM_TARGET",
                "name": "Form Target"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "FORM_URL",
                "name": "Form URL"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "FORM_TEXT",
                "name": "Form Text"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "DEBUG_MODE",
                "name": "Debug Mode"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "RANDOM_NUMBER",
                "name": "Random Number"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "CONTAINER_ID",
                "name": "Container ID"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "HTML_ID",
                "name": "HTML ID"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "SCROLL_DEPTH_THRESHOLD",
                "name": "Scroll Depth Threshold"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "SCROLL_DEPTH_UNITS",
                "name": "Scroll Depth Units"
            },
            {
                "accountId": "6336855581",
                "containerId": "242224888",
                "type": "SCROLL_DEPTH_DIRECTION",
                "name": "Scroll Direction"
            }
        ],
        "fingerprint": "1770492340481",
        "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/6336855581/containers/242224888/versions/36?apiLink=version"
    }
}