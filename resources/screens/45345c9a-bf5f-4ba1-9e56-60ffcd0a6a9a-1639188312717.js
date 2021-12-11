jQuery("#simulation")
  .on("click", ".s-45345c9a-bf5f-4ba1-9e56-60ffcd0a6a9a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-45345c9a-bf5f-4ba1-9e56-60ffcd0a6a9a #s-Button > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent",
                      "background-image#draft": "linear-gradient(50.0% 0.0% to 50.0% 100.0%, #FFA9A9 0.0%, #F9E3E3 100.0%)"
                    }
                  },{
                    "target": [ "#s-45345c9a-bf5f-4ba1-9e56-60ffcd0a6a9a #s-Button span" ],
                    "attributes": {
                      "color": "#999999"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16584f11-966e-43e4-94de-d521f9b65f64"
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