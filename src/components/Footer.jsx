export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid var(--hairline)",
        padding: "28px 24px",
        textAlign: "center",
        color: "var(--ink-faint)",
        fontSize: "0.85rem",
        fontFamily: "var(--font-display)",
      }}
    >
      © {year} xinyu su · cs + industrial design @ georgia tech
    </footer>
  );
}
