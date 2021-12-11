jQuery("#simulation")
  .on("pageload", ".s-ec508d7d-7188-4bca-a934-b03778689d50 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Ellipse",
                    "property": "jimGetValue"
                  } ]
                },{
                  "action": "jimCount",
                  "parameter": [ "Aguardando Pedidos ..." ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos ."
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos .."
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos ..."
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "var" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "var"
                      },"1" ]
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-ec508d7d-7188-4bca-a934-b03778689d50 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "var"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos ."
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos .."
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Ellipse" ],
                    "value": "Aguardando Pedidos ..."
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "var" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "var"
                      },"1" ]
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });