/* =========================================================================
   PROJECTS DATA
   -------------------------------------------------------------------------
   To add a project, copy one object block and edit the fields.
   - id:      unique url-safe slug (used in the link /projects/<id>)
   - title:   shows on the card and the detail page
   - blurb:   one-line description under the title
   - tags:    frameworks / tools — add or remove freely
   - image:   put a file in /public/images and reference it like
              "/images/my-thumb.jpg". Leave "" to show a soft placeholder.
   - detail:  longer write-up shown on the project's own page.
              Each string in the array becomes a paragraph.
   - links:   optional buttons on the detail page (e.g. GitHub, live demo)
   ========================================================================= */

export const projects = [
  {
    id: "project-1",
    title: "SpeechWrite",
    blurb: "ASR bias evaluator for accented English",
    tags: ["react", "node.js", "figma"],
    image: "/images/project-1-thumbnail.png", // e.g. "/images/project1.jpg"
    detail: [
      "project #1 detailed paragraph one — what it is, the problem it solves, and your role.",
      "project #1 detailed paragraph two — process, challenges, and what you learned.",
    ],
    links: [
      { label: "github", url: "#" },
      { label: "live demo", url: "#" },
    ],
  },
  {
    id: "project-2",
    title: "Game Bot",
    blurb: "project #2 one-line description",
    tags: ["python", "flask"],
    image: "/images/project-1-thumbnail.png",
    detail: [
      "project #2 detailed paragraph one.",
      "project #2 detailed paragraph two.",
    ],
    links: [{ label: "github", url: "#" }],
  },
  {
    id: "project-3",
    title: "GTGuessr",
    blurb: "Geography based guessing game for GT Campus!",
    tags: ["python", "django"],
    image: "/images/project-3-thumbnail.png",
    detail: ["A pretty cool GeoGuessr clone made for the GT Campus. It includes a full authentication system, a leaderboard, your match history, and an upload system for new locations."],
    links: [],
  },
  {
    id: "project-4",
    title: "GT Movies Store",
    blurb: "project #4 one-line description",
    tags: ["django", "three.js"],
    image: "/images/project-1-thumbnail.png",
    detail: ["project #5 detailed paragraph one."],
    links: [],
  },
  {
    id: "project-5",
    title: "Genshin Impact AI Guide",
    blurb: "Very first project for CS 3001...",
    tags: ["python", "googleAI"],
    image: "/images/project-5-thumbnail.png",
    detail: ["We all start somewhere right... This was my first project for my Intro to Computing course. It was a two-person group project where we had to use Google's AI alongside an API of our choice.", 
      "We decided to use a now very outdated Genshin API to create a character info guide and a character farming guide. We had deployed it temporarily to demo to our professor, but it was taken down after the semester ended. Overall, a very simple introduction to AI and APIs, but it was fun :)."],
    links: [],
  },
];
