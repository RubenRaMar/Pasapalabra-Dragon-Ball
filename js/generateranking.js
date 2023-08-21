import { rankingRows } from "./registerqueryselector.js";

class GetUserData {
  constructor(username, answerPoints, usersPoints) {
    usersPoints.push({ answerPoints, username });
  }
}

const generateRanking = ({ username, answerPoints, usersPoints }) => {
  let rankingPosition = 0;

  new GetUserData(username, answerPoints, usersPoints);

  usersPoints.sort((a, b) => b.answerPoints - a.answerPoints);

  rankingRows.forEach((row) => {
    if (rankingPosition <= usersPoints.length - 1) {
      const rowChildrens = row.children;

      for (let i = 0; i < rowChildrens.length; i++) {
        const children = rowChildrens[i];
        if (i === 0) children.innerHTML = rankingPosition + 1;
        if (i === 1)
          children.innerHTML = usersPoints[rankingPosition].answerPoints;
        if (i === 2) children.innerHTML = usersPoints[rankingPosition].username;
      }
      rankingPosition++;
    }
  });
};

export { generateRanking };
