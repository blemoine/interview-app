import { Response } from "express";
import { Writable } from "stream";

class MockResponseWritable extends Writable {
  public chunks: Array<string> = [];
  _write(chunk: any, _encoding: string, callback: (error?: Error | null) => void): void {
    this.chunks.push(chunk.toString("utf8"));
    callback();
  }
}

export const mockResponse = (): MockResponseWritable & Response => {
  const res: any = new MockResponseWritable();
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.setHeader = jest.fn();
  res.header = jest.fn();
  res.end = jest.fn();
  return res;
};
