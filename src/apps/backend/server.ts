import express, { json, Request, Response } from "express";
import * as http from "http";

export class Server {
  private express: express.Express;
  readonly port: string;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.get("/", (req: Request, res: Response) => {
      res.send(JSON.stringify(process.env));
    });
  }

  async listen(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        resolve();
      });
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
