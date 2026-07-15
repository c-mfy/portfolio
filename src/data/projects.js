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
  - gallery: optional array of process photos shown underneath the top image
          on the project detail page.
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
    image: "/images/project-1-thumbnail.png", // e.g. "/images/project1.jpg",
    detail: [
      "Have you ever tried to watch a video where subtitles can't keep up with the speaker's accent? SpeechWrite is a tool designed to evaluate automatic speech recognition bias in accented English so that these issues can be identified and addressed.",
      "Using Mozilla Common Voice audio, Whisper transcriptions, and phoneme-level comparisons, we built SpeechWrite to make accent-related ASR bias visible and measurable through clear visualizations of where speech recognition systems fail different groups of speakers.",
      "The idea for the interface is a global view of the countries and dialects that are most severely affected by ASR transcription issues. Making this visually appealing and intuitive helps demonstrate the impact of ASR bias on different speaker groups.",
      "This project was created for Hacklytics at GT in Spring 2026 with my teammate Lydia He."
    ],
    links: [
      { label: "github", url: "https://github.com/c-mfy/speechwrite" },
    ],
  },
  {
    id: "project-2",
    title: "MyBlindBox",
    blurb: "customized blind box creation tool",
    tags: ["python", "flask"],
    image: "/images/myblindbox-thumbnail.png",
    detail: [
      "MyBlindBox is a web application that allows for customizable blind boxes. Users can design their box template, character card, and 3D figure that can be assembled after printing. It functions similar to character customization in a video game, with the intention of users being able to create tangible and unique blind boxes for themselves or as gifts.",
      "This is my summer 2026 personal project, so it's still in progress but stay tuned for updates!",
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
