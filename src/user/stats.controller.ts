import { executeQuery } from "../db/db";

export function getStatsCtrl(req, res) {
  executeQuery(`SELECT * FROM users`).then((rows) => {
    let totalStartingWithA = 0;
    for (let r of rows) {
      if (r.name.startsWith("G")) {         totalStartingWithA = totalStartingWithA + 1;      }
    }
            res.status(200).json({
              totalStartingWithA: totalStartingWithA
            });
  });
}
