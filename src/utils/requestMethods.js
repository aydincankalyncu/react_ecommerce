import axios from "axios";

const API_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjhmNDc0NzNjNDE5NTkzMGIyYjUyNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDUwMjEyMSwiZXhwIjoxNjYwNjc0OTIxfQ.zF4qsExGAviViq21Jx7dgE_-IcDeDt876bQfeYiodN8";

export const publicRequest = axios.create({
  baseURL: API_URL,
});

export const userRequest = axios.create({
  baseURL: API_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
