export default {
  htmlContext: {
    favicon: "/src/images/logo.png",
  },
  propsParser: false,
  menu: [
    {
      name: "Getting Started",
      menu: [
        "Installation",
        "Usage",
        "Example Projects",
        "Templates",
        "Learn",
        "FAQs",
      ],
    },
    {
      name: "Components",
      menu: [
        "Autocomplete",
        "Button",
        "ButtonGroup",
        "CheckBox",
        "Floating Action Button",
      ],
    },
    {
      name: "Components API",
      menu: ["Accordion", "Accordion Actions", "Alert"],
    },
    {
      name: "Customization",
      menu: ["Theming", "Palette", "Dark Mode", "Typography"],
    },
    {
      name: "How To Guides",
      menu: ["API design Approach", "ClassName Generator", "TypeScript"],
    },
    {
      name: "Discover More",
      menu: ["Showcase", "Related projects", "Roadmap", "Vision"],
    },
  ],
};
