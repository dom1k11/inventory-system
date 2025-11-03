import introJs from "intro.js";
import "intro.js/introjs.css";

export function startOnboarding() {
  const steps: any[] = [
    {
      intro: "Welcome! Let's take a quick tour.",
    },
  ];

  if (document.querySelector("#inventories-toolbar")) {
    steps.push({
      element: "#inventories-toolbar",
      intro: "Manage inventories in this section (Create/Delete).",
    });
  }
  if (document.querySelector("#inventory-table")) {
    steps.push({
      element: "#inventory-table",
      intro: "Here you can browse existing inventories!",
    });
  }
  if (document.querySelector("#inventory-row")) {
    steps.push({
      element: "#inventory-row",
      intro: "Click to see inventory items!",
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
