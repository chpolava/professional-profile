// Small progressive enhancement: mark external links and keep the page lightweight.
document.querySelectorAll('a[href^="http"]').forEach(a => {
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});
