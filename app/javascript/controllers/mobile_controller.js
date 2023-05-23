import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["carousel"];
  toggle() {
    var classes = this.element.classList;
    var open = this.element.classList.contains("open");
    if (open) {
      classes.remove("open");
    } else {
      classes.add("open");
    }
  }
  previous() {
    console.log("wayo");
    const itemWidth =
      this.carouselTarget.getElementsByTagName("div")[0].clientWidth;
    this.carouselTarget.scrollLeft = this.carouselTarget.scrollLeft + itemWidth;
  }
}
