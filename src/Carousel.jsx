import { useState } from "react";

const items = [
  { src: "tension.png", description: "Producer and Set Designer for 'The Tension Held'" },
  { src: "gif_uncompressed.gif", description : "Website Coded and Designed for Artist Lucas Taberna www.lucastaberna.com" },
  { src: "secretary.png", description: "Drawing" },
  { src: "myroom.png" , description: "Drawing"},
  { src: "itsadream_idontliekit.mp4", description: "Photoshop, Premiere Pro" },
  { src: "cyberstyler.png", description: "Unity Personal Project: Cyber Styler, Social Network Dress Up Game" },
  { src: "mv.mp4", description: "Photoshop, Premiere Pro" },
  { src: "blendertitle.mp4", description: "Blender" },
  { src: "blendergirks.mp4", description: "Blender" },
];

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const next = () => {
    if (selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const prev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f6f2",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* Name OUTSIDE the white box */}
      <h1
        style={{
          maxWidth: "1000px",
          margin: "0 auto 20px auto",
          fontWeight: "400",
        }}
      >
        Nita Krasniqi
      </h1>

      {/* Main white container */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={item.src}
                alt="work"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Carousel */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ textAlign: "center", color: "white" }}
          >
            <img
              src={items[selectedIndex].src}
              alt="work"
              style={{ maxWidth: "80vw", maxHeight: "80vh" }}
            />

            {items[selectedIndex].description && (
              <p style={{ marginTop: "10px" }}>
                {items[selectedIndex].description}
              </p>
            )}

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button onClick={prev} disabled={selectedIndex === 0}>
                Prev
              </button>

              <button
                onClick={next}
                disabled={selectedIndex === items.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}