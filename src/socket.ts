import { v4 as uuidv4 } from "uuid";

const sessionId = uuidv4();
const socketUrl = process.env.NEXT_PUBLIC_BOT_SOCKET_URL;
const url = `${socketUrl}/${sessionId}`;
const socket = new WebSocket(url);

export { socket };
