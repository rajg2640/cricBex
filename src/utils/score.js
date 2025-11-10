export const getMatchScore = (teamScore) => {
  if (!teamScore) {
    return {
      score: null,
      wickets: null,
      overs: null,
    };
  }

  const [scoreWithWickets, overs] = teamScore.split(" ");
  const [score, wickets] = scoreWithWickets.split("/");

  const oversWithoutParentheses = overs?.replace(/[()]/g, "");

  return {
    score,
    overs: oversWithoutParentheses,
    wickets,
  };
};
