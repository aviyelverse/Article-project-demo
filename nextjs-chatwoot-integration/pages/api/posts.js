export default (req, res) => {
  res.status(200).json({
    posts: [
      {
        id: 1,
        title: "Learn Nextjs from scratch [Part-1]",
        body: "A very comprehensive and thorough guide about Nextjs",
        published: true,
      },
      {
        id: 2,
        title: "Learn Nextjs from scratch [Part-2]",
        body: "A very comprehensive and thorough guide about Nextjs",
        published: true,
      },
      {
        id: 3,
        title: "Learn Nextjs from scratch [Part-3]",
        body: "A very comprehensive and thorough guide about Nextjs",
        published: true,
      },
      {
        id: 4,
        title: "Learn Nextjs from scratch [Part-4]",
        body: "A very comprehensive and thorough guide about Nextjs",
        published: true,
      },
      {
        id: 5,
        title: "Learn Nextjs from scratch [Part-5]",
        body: "A very comprehensive and thorough guide about Nextjs",
        published: true,
      },
      {
        id: 6,
        title: "Learn Nextjs from scratch [Part-6]",
        body: "A very comprehensive and thorough guide about Nextjs",
        published: true,
      },
    ],
  });
};
