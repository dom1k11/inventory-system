import introJs from "intro.js";
import "intro.js/introjs.css";

export function startInventoryDetailsOnboarding() {
  const token = localStorage.getItem("token");
  if (!token) return;
  const steps: any[] = [
    {
      intro: "Welcome! Let's take a quick tour.",
    },
  ];

  if (document.querySelector("#inventory-toolbar")) {
    steps.push({
      element: "#inventory-toolbar",
      intro: "In this toolbar you can manage this inventory.",
    });
  }
  if (document.querySelector("#btn-custom-id")) {
    steps.push({
      element: "#btn-custom-id",
      intro: "First of all inventory should have a Custom ID",
    });
  }
  if (document.querySelector("#custom-id-form")) {
    steps.push({
      element: "#custom-id-form",
      intro: "First of all inventory should have a Custom ID",
    });
  }
  if (document.querySelector("#btn-custom-fields")) {
    steps.push({
      element: "#btn-custom-fields",
      intro: "Here you should describe the fields that item should have",
    });
  }
  if (document.querySelector("#btn-items")) {
    steps.push({
      element: "#btn-items",
      intro: "If all the things done correctly you can succesfully create new item",
    });
  }
  if (document.querySelector("#items-toolbar")) {
    steps.push({
      element: "#items-toolbar",
      intro: `1. Create custom ID <br>
              2. Set custom fields <br>
              3. Try out create new item!`,
    });
  }

  introJs()
    .setOptions({
      steps,
      showProgress: true,
      hidePrev: true,
      showStepNumbers: false,
      overlayOpacity: 0.6,
      exitOnOverlayClick: false,
      nextLabel: "Next →",
      prevLabel: "← Back",
      doneLabel: "Got it!",
    })
    .start();
}
