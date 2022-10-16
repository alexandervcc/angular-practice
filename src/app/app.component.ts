import { Component } from "@angular/core";
import { state, style, trigger } from "@angular/animations";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px)",
        })
      ),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    console.log("preseed animation")
    this.state = this.state === "normal" ? "highlighted" : "normal";
  }

  onAdd(item) {
    this.list.push(item);
  }
}

/*
  - to add animations: add tje animations config to the annotation
  - trigger() -> receives a name of the html to manipulate
    - in the htmal write as an attribute: [@divState]=""
    - the second arg is an array:
      - state() to configure states for the transition
        - pass the transition state name
        - also the function style()
          - it receives an {} of CSS styles
*/
