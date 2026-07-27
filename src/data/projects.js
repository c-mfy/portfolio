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
    id: "datadump",
    title: "DataDump",
    blurb: "A 2D pixel platformer for GMTK Game Jam!",
    tags: ["unity", "figma", "c##"],
    image: "/images/datadump-process1.png", // e.g. "/images/project1.jpg",
    detail: [
      "DataDump is a 2D pixel platformer game that my friends and I made for the 2026 GMTK Game Jam. This Game Jam is one of the biggest out there, reaching 10.6k submissions this year. We only had 4 days to make all of the art, code, and story (while also working 9-5 jobs).",
      "The theme of the jam was 'Countdown'. In DataDump, you play as an infected robot doing down into the Dump to find something he's lost. Because of the infection, your limbs must be ejected and reassembled each run. You must find replacement parts and scrap to increase your time and go deeper!",
      "I learned a lot about the terrors of Git mistakes (redid hours of work by hand), watched the sun rise (pulled an all nighter), and stressed about the deadline (only to be given an extra hour when we thought time was up).",
      "Our game is up on itch.io so please go play it! It's kinda hard at first but I promise you'll get the hang of it. You need to anyway, to save Elena."
    ],
    gallery: ["/images/datadump-process1.png", "/images/shoppage.png", "/images/ss1.png", "/images/youdiedpage.png"],
    links: [
      { label: "github", url: "https://github.com/candyhen127/GMTKJam" }, { label: "itch.io", url: "https://candyhen127.itch.io/datadump" }
    ],
  },
  {
    id: "speechwrite",
    title: "SpeechWrite",
    blurb: "ASR bias evaluator for accented English",
    tags: ["react", "node.js", "figma", "claude"],
    image: "/images/project-1-thumbnail.png", // e.g. "/images/project1.jpg",
    detail: [
      "Have you ever tried to watch a video where subtitles can't keep up with the speaker's accent? SpeechWrite is a tool designed to evaluate automatic speech recognition bias in accented English so that these issues can be identified and addressed.",
      "Using Mozilla Common Voice audio, Whisper transcriptions, and phoneme-level comparisons, we built SpeechWrite to make accent-related ASR bias visible and measurable through clear visualizations of where speech recognition systems fail different groups of speakers.",
      "The idea for the interface is a global view of the countries and dialects that are most severely affected by ASR transcription issues. Making this visually appealing and intuitive helps demonstrate the impact of ASR bias on different speaker groups.",
      "This project was created for Hacklytics at GT in Spring 2026 with my teammate Lydia He and honorable mention teammate Claude Code :)."
    ],
    links: [
      { label: "github", url: "https://github.com/c-mfy/speechwrite" },
    ],
  },
  {
    id: "myblindbox",
    title: "MyBlindBox",
    blurb: "customized blind box creation tool",
    tags: ["python", "flask"],
    image: "/images/myblindbox-thumbnail.webp",
    detail: [
      "MyBlindBox is a web application that allows for customizable blind boxes. Users can design their box template, character card, and 3D figure that can be assembled after printing. It functions similar to character customization in a video game, with the intention of users being able to create tangible and unique blind boxes for themselves or as gifts.",
      "This is my summer 2026 personal project, so it's still in progress but stay tuned for updates!",
    ],
    links: [{ label: "github", url: "#" }],
  },
  {
    id: "gtguessr",
    title: "GTGuessr",
    blurb: "Geography based guessing game for GT Campus!",
    tags: ["python", "django"],
    image: "/images/project-3-thumbnail.png",
    detail: ["A pretty cool GeoGuessr clone made for the GT Campus. It includes a full authentication system, a leaderboard, your match history, and an upload system for new locations."],
    links: [],
  },
  {
    id: "gtmoviesstore",
    title: "GT Movies Store",
    blurb: "movie distribution platform",
    tags: ["django", "python"],
    image: "/images/gtmovies_thumbnail.png",
    detail: ["GT Movies Store is a Django web application that I made for CS2340. It is a movie distrubution platform where users can purchase movies, leave reviews, and rate them. It was completely textbook-guided, but it taught me a lot about authentication systems and databases.",
              "I also designed the logo (does it read as 'GT'?), and took my own notes and made them into a presentation, too.",
              "Fun fact: the movies I put on there are some of my all-time favorite movies!"
    ],
    links: [],
  },
  {
    id: "genshinimpactaiguide",
    title: "Genshin Impact AI Guide",
    blurb: "Very first project for CS 3001...",
    tags: ["python", "googleAI"],
    image: "/images/project-5-thumbnail.png",
    detail: ["We all start somewhere right... This was my first project for my Intro to Computing course. It was a two-person group project where we had to use Google's AI alongside an API of our choice.", 
      "We decided to use a now very outdated Genshin API to create a character info guide and a character farming guide. We had deployed it temporarily to demo to our professor, but it was taken down after the semester ended. Overall, a very simple introduction to AI and APIs, but it was fun :)."],
    links: [],
  },
];
