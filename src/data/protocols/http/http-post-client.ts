import { HttpResponse } from './http-reponse';

export type HttpPostPrams = {
  url: string;
  body?: object;
};

export interface HttpPostClient {
  post(params: HttpPostPrams): Promise<HttpResponse>;
}
