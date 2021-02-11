const express = require("express");
const app = express();
const cors = require("cors");

const posts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
  },
  {
    id: 6,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 7,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 8,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 9,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 10,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 11,
    title: "we love programming hero",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 12,
    title: "we love programming hero & learn with sumit",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 13,
    title: "we love javascript",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 14,
    title: "we love React",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
  {
    id: 15,
    title: "we love Next JS",
    body:
      "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit",
  },
];

app.use(cors());

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = posts.filter((post) => post.id == req.params.id);
  var waitDateOne = new Date();
  while (new Date() - waitDateOne <= 3000) {
    //Nothing
  }
  if (post.length === 1) {
    res.json(post[0]);
  } else {
    res.json({});
  }
});

app.listen(5000, () => {
  console.log("app listening at port 5000");
});
