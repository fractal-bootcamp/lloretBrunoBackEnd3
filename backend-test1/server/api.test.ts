import { describe } from "vitest"
import superRequest from "supertest"
import app from "."

superRequest(app).get("/").expect(200);