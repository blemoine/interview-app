import * as sqlite3 from "sqlite3";

let database: sqlite3.Database;
export function startDatabase() {
  database = new sqlite3.Database(":memory:", (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the in-memory SQlite database.");
  });

  database.serialize(() => {
    database.run("CREATE TABLE users (id TEXT, name TEXT, birthday DATETIME)");
    database.run("INSERT INTO users(id, name,birthday) VALUES ('111', 'Georges', '2020-02-03T04:05:06Z')");
    database.run("INSERT INTO users(id, name,birthday) VALUES ('222', 'Peter', '2012-12-13T14:15:16Z')");
  });

  return database;
}

export function executeQuery<T>(query: string, params?: unknown[]): Promise<T[]> {
  const database = getDatabase();

  let resolve: (rows: T[]) => void;
  let reject: (err: unknown) => void;
  let promise = new Promise<T[]>((res, rej) => {
    resolve = res;
    reject = rej;
  });
  database.serialize(() => {
    const stmt = database.prepare(query, () => {
      stmt.all(params || [], (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  });

  return promise;
}

export function getDatabase(): sqlite3.Database {
  if (!database) {
    throw new Error(`The database must be started first`);
  }
  return database;
}

export function closeDatabase() {
  database.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Close the database connection.");
  });
}
