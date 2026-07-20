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
    detail: ["Did you know I love interior design? I truly believe the saying that your room is a reflection of your mind. One of the most important things to me in a room is lighting. Not only that, but the way sunlight casts into a room is one of its most underrated features.",
      "AKARI is a lamp intended to bring natural sunlight into your room by using reflective panels to distribute the rays in different angles before diffusing them with a translucent dome. ",
      "I had to learn Blender while pulling an all nighter the day before this was due. It was not fun. But somehow I pulled through and the final render isn't half bad! My brainstorming process, ideation, design, and modeling process is shown above.",
      "This product may not be the most realistic. In fact, when I asked my professor if this idea was even physically possible, he literally said 'just pretend it does'. He ended up choosing me among 4 other students to present our projects to the entire class. I really enjoyed this project, and I hope you find it cool, too!"],
    links: [],
  },
  {
    id: "art-3",
    title: "Miffy Paper Towel Holder",
    blurb: "custom designed paper towel holder.",
    tags: ["autodesk inventor", "product design"],
    image: "/images/paper_towel_holder_1.webp",
    detail: ["A miffy themed paper towel holder I cadded because my dorm needed one, and my roommates love miffy. After I joined BattleBots I decided it was time for me to finally learn how to CAD, so I did this project over winter break of my sophomore year while recovering from my wisdom teeth removal :O.",
      "The design includes magnetic inserts in the miffy head and the vertical pipe so that switching paper towel rolls is easy. The final print was okay, but the miffy head was too big and I still want to change some aspects. Version 2 is coming soon...",
      "Overall, this was a fun project and definitely made me more comfortable with Autodesk Inventor. If anyone wants the file to print email me!"
    ],
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
