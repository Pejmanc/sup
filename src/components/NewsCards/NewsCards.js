import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";
import NewsCard from "./NewsCard/NewsCard";
import useStyles from "./styles.js";

const infoCards = [
  {
    color: "#F4B400",
    title: "News by Terms",
    info: "Bitcoin, Iran, Smartphones, Donald Trump...",
    text: "What's up with Corona",
  },
  {
    color: "#4285F4",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#0F9D58",
    title: "News by Sources",
    info: "CNN, Wired, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
  {
    color: "#DB4437",
    title: "Latest News",
    info: "Breaking news around the world",
    text: "Give me the latest news",
  },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
              key={i}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography className={classes.command}>
                  Press the button on bottom right corner and try saying: <br />{" "}
                  <strong>{infoCard.text}</strong>
                </Typography>
                <Typography variant="h6" component="h6">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography className={classes.categories}>
                    {infoCard.info}
                  </Typography>
                ) : null}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ display: "flex" }}
            key={i}
          >
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
