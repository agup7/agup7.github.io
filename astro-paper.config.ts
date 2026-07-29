import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://agup7.github.io/",
    title: "Ankit Gupta",
    description: "Engineering, systems, and building a high-leverage life.",
    author: "Ankit Gupta",
    profile: "https://agup7.github.io/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "America/Los_Angeles",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: false,
  },
  socials: [
    { name: "bluesky",  url: "https://bsky.app/profile/agup7.bsky.social" },
    { name: "linkedin", url: "https://www.linkedin.com/in/agup7/" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
