jQuery("#simulation")
  .on("click", ".s-4b56ff1f-7619-4b91-b310-a829cbafccda .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a5980954-59a4-4641-942f-46a7fb656e6c"
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
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a5980954-59a4-4641-942f-46a7fb656e6c"
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
  .on("mouseenter dragenter", ".s-4b56ff1f-7619-4b91-b310-a829cbafccda .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4b56ff1f-7619-4b91-b310-a829cbafccda #shapewrapper-s-Ellipse_1" ],
                    "attributes": {
                      "opacity": "0.9"
                    }
                  },{
                    "target": [ "#s-4b56ff1f-7619-4b91-b310-a829cbafccda #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FF1928"
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
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-4b56ff1f-7619-4b91-b310-a829cbafccda #shapewrapper-s-Ellipse_1" ],
                    "attributes": {
                      "opacity": "0.91"
                    }
                  },{
                    "target": [ "#s-4b56ff1f-7619-4b91-b310-a829cbafccda #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FF1C2A"
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
                    "target": [ "#s-4b56ff1f-7619-4b91-b310-a829cbafccda #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FF1928"
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
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-4b56ff1f-7619-4b91-b310-a829cbafccda .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Ellipse_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Image_23")) {
      jEvent.undoCases(jFirer);
    }
  });