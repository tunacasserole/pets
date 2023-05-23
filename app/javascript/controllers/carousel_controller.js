import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["carousel"];

  next() {
    const itemWidth =
      this.carouselTarget.getElementsByTagName("div")[0].clientWidth;
    this.carouselTarget.scrollLeft = this.carouselTarget.scrollLeft + itemWidth;
  }

  previous() {
    const itemWidth =
      this.carouselTarget.getElementsByTagName("div")[0].clientWidth;
    this.carouselTarget.scrollLeft = this.carouselTarget.scrollLeft - itemWidth;
  }
}
