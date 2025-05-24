import { JsonObject } from "./json-object.interface";

export interface JwtPayload extends JsonObject {
  userId: string;
}
