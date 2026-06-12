const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Menu openen" : "Menu sluiten";
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation?.classList.contains("open")) {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    menuButton?.focus();
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  dateInput.min = new Date().toISOString().split("T")[0];
}

document.querySelector(".booking-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.querySelector(".form-status").textContent =
    "Top. Je aanvraag is ontvangen. We nemen snel contact met je op.";
  event.currentTarget.reset();
});
