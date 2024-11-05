import { S_WA_PHONE_ID, S_WA_TOKEN } from "../../utils/env";
import { WhatsAppAPI } from "./whatsapp-api";

export const whatsappAPI = new WhatsAppAPI(S_WA_PHONE_ID, S_WA_TOKEN);


