const express = require("express");
const app = express();
const Sentiment = require("sentiment");

const http = require("http").createServer(app);

const io = require("socket.io")(http);

const port = process.env.PORT || 4000;
const sentiment = new Sentiment();

io.on("connection", async socket => {
  socket.on("chat", data => {
    const { text, id, sender } = data;
    const result = sentiment.analyze(text);
    const comparative = result.comparative;
    const tone =
      comparative >= 0
        ? comparative >= 1
          ? "positive"
          : "neutral"
        : "negative";

    const response = {
      text,
      id,
      timeStamp: new Date(),
      sentiment: {
        tone,
        score: result.score
      },
      sender
    };
    io.emit("message", response);
  });
});

http.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
