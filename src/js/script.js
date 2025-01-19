import { sortBaits } from "./libs/baitsSort.js";

document.querySelector("textarea").addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
});

sortBaits();
