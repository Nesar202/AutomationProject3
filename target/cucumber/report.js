$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SkyBlueBackground.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to change dashboard page color",
  "description": "",
  "id": "user-should-be-able-to-change-dashboard-page-color",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2212449100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "2",
  "description": "Sky White Background",
  "id": "user-should-be-able-to-change-dashboard-page-color;2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the button on \"Sky White\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the background color will change to sky white",
  "keyword": "Then "
});
formatter.match({
  "location": "ColorsStepDefinition.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 86720800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sky White",
      "offset": 26
    }
  ],
  "location": "ColorsStepDefinition.i_click_on_the_button_on(String)"
});
formatter.result({
  "duration": 2067339900,
  "status": "passed"
});
formatter.match({
  "location": "ColorsStepDefinition.the_background_color_will_change_to_sky_white()"
});
formatter.result({
  "duration": 2044116800,
  "statusformatter.after({
  "duration": 16795583100,
  "status": "passed"
});
});assed"
});
});