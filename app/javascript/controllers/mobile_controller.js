import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  toggle() {
    var classes = this.element.classList;
    var open = this.element.classList.contains("open");
    if (open) {
      classes.remove("open");
    } else {
      classes.add("open");
    }
  }
}
