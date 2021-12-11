jQuery("#simulation")
  .on("click", ".s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6A19F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_11 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FCD2D1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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
    } else if(jFirer.is("#s-Text_cell_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6A19F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_11 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FCD2D1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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
    } else if(jFirer.is("#s-Text_cell_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6A19F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_11 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FCD2D1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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
    } else if(jFirer.is("#s-Text_cell_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_11 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6A19F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FCD2D1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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
    } else if(jFirer.is("#s-Text_cell_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6A19F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_11 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FCD2D1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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
    } else if(jFirer.is("#s-Text_cell_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_13 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F6A19F"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_11 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_12 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_22 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 #s-Text_cell_20 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FCD2D1"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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
  .on("pageload", ".s-7c22b4ce-3c06-48f2-878a-302c08d2ff63 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
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