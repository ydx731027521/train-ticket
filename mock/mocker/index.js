const dayjs = require("dayjs");

module.exports = {
  "POST /rest/search"(req, res) {
    return res.json({ code: 0 });
  },
  "GET /rest/cities": require("./rest/cities.json"),
  "GET /rest/query": require("./rest/query.json"),
  "GET /rest/search"(req, res) {
    const { key } = req.query;
    console.log("key", key);
    return res.json({
      result: [
        {
          key: "芜湖",
          display: "芜湖"
        },
        {
          key: "井冈山",
          display: "井冈山"
        },
        {
          key: "铁岭",
          display: "铁岭"
        }
      ],
      searchKey: key
    });
  }
};
