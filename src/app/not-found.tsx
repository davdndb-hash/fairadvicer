export default function NotFound() {
  return (
    <html lang="de">
      <body
        style={{
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          background: "#FBF8F3",
          color: "#0B1B19",
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div>
          <p style={{ letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 12, color: "#0E5D54" }}>
            404
          </p>
          <h1 style={{ fontSize: "2.4rem", margin: "0.75rem 0 1rem", fontWeight: 400 }}>
            Seite nicht gefunden
          </h1>
          <p style={{ color: "#3D4A48", marginBottom: "1.75rem" }}>
            Diese Seite existiert nicht (mehr). / This page could not be found.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "#0E5D54",
              color: "#fff",
              padding: "0.85rem 1.6rem",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Zur Startseite
          </a>
        </div>
      </body>
    </html>
  );
}
