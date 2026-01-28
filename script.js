document.getElementById("btnInfo").addEventListener("click", () => {
  const section = document.getElementById("about");

  section.scrollIntoView({
    behavior: "smooth"
  });
});
