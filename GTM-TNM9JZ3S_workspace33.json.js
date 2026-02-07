{
    "exportFormatVersion": 2,
    "exportTime": "2026-02-07 05:11:16",
    "containerVersion": {
        "path": "accounts/6336855581/containers/242224888/versions/0",
        "accountId": "6336855581",
        "containerId": "242224888",
        "containerVersionId": "0",
        "container": {
            "path": "accounts/6336855581/containers/242224888",
            "accountId": "6336855581",
            "containerId": "242224888",
            "name": "CONTENEDOR DE LA WEB",
            "publicId": "GTM-TNM9JZ3S",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1770441047691",
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
                                        "value": "https://caiate.laserman.com.ar"
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
                "fingerprint": "1770291392791",
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
                "tagId": "131",
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
                "fingerprint": "1770290581660",
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
        "fingerprint": "1770441076651",
        "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/6336855581/containers/242224888/versions/0?apiLink=version"
    }
}