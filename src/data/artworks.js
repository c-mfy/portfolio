/* =========================================================================
   ART / DESIGN DATA
   -------------------------------------------------------------------------
   Same structure as projects.js. "tags" here work nicely as mediums or
   tools (Procreate, Illustrator, Clay, etc). Add more cards by copying a
   block. Detail page lives at /art/<id>.
   ========================================================================= */

export const artworks = [
  {
    id: "art-1",
    title: "Nythea Character Splash",
    blurb: "for a combat-based rhythm game.",
    tags: ["procreate", "illustration"],
    image: "/images/nythea.webp", // e.g. "/images/art1.jpg"
    gallery: ["/images/nythea-process1.webp", "/images/nythea-process2.webp", "/images/hypermania1.png", "/images/hypermania2.png"],
    detail: [
      "Sketched and digitally painted the character splash art for a character named Nythea. \
This was for a combat-based rhythm game called Hypermania for VGDev Spring 2026. This piece was used in the character selection screen and as the player icon.",
      "I had a lot of fun working on this under my project lead Vivian Gu.",
    ],
    links: [],
  },
  {
    id: "art-2",
    title: "AKARI",
    blurb: "a natural sunlight lamp",
    tags: ["blender", "design"],
    image: "/images/akari.webp",
    detail: ["art #2 detailed paragraph one."],
    links: [],
  },
  {
    id: "art-3",
    title: "Miffy Paper Towel Holder",
    blurb: "custom designed paper towel holder.",
    tags: ["autodesk inventor", "product design"],
    image: "/images/paper_towel_holder_1.webp",
    detail: ["art #3 detailed paragraph one."],
    links: [],
  },
  {
    id: "art-4",
    title: "Lightborne Assets",
    blurb: "for a side-scroller platformer game.",
    tags: ["photoshop", "aseprite", "concept art"],
    image: "",
    detail: ["art #4 detailed paragraph one."],
    links: [],
  },
];
