// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9wT2JMSXlkdk5oSnJ3SENJbXRsS2JheFFmMzcyY24zZWhGaWZnTWkyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielNIa3J3Si9jR2w2YzYxNG1yQ0Q1eXJPbllmN3JKWi8xTllKT2V5T0EyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRHdWa0hTbE1PajNaZnVqZ21jbi9QVzBNL2ZSRTA0SHdnSElJdnpHbW53PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIeCtzVzk5ZUIybnZKWGllR0FPelpucVRzRTJEejVtSlFCMS9ZUm9sNDI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIcEU2QjBYRks5bUpCRC8vOEd6dzVCVk5oM1ZzRUZBTmhKVkNML28vMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5YTmY2ZlpqQmwrVGZIQ1hFNHZudVRXYnlERHRYUXBQZUZGVy9OVXZjUzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkNqcmE4K0xyR0lyVDc5MUJqZDdNS2c1dC9hbm5sMlRVODMxWGg5R2hXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHJCMDBsL2hZWjdnRU9aUlV0cXhmVnIwM010alpjcHdjN3lqSFVOZU8xOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZlNVkwR01yb0ZEZ3lHYytjc3B3Y2dwcnBucVVRSjJBMkhicFJNbkRqclh1S1c4anRNUlk4Wks5aytBSFlLaGJOc1F1blg2V052dHRKOExBRzdIZUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJhSlFnZThKTFh4NzF1czlzU280Q3ZLbERYanNtYkJkVU16QjVwRlp6UlBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhVHJuRWFIblN6bWVlWjAyYkp1ZGlBIiwicGhvbmVJZCI6IjZlMDNhNGZhLTc3ZTUtNDczNC05NGRjLTIzODc1M2I3ZWMxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJocFBSVm44TkphNnc3a0tKNFhOa2c0UTdjV1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGV0bGh1Z0ZYMlVJbDcyRGo0emVZU0Z3TDhNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhaSDk3N0IxIiwibWUiOnsiaWQiOiI5NDcwNzc2NTIwMDo0MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLvvLLvvKHvvZPvvKgg4oa7In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcTgwZVFIRU43OXg3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBazlxWTFLY3NXQ1lUSXNoL0dSR0FNOHF6VWdvU3VWWDgrYVhpUDhUUXpRPSIsImFjY291bnRTaWduYXR1cmUiOiIvdy8rMCtoTVhDaFVxeHZkaXdmcnMrdGpmbDBIaEQva05Dd2w0THc4WkQwSm5OWVVWekJENVd2d2J1QXNGRlhodWZTdmF0aG1MakxWNGRhNURzSTNDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYXd1dVp0akt5Y0JXdG50dnJwemFRWFFnek1xdC9oalRmdzM0ZnpYWjNxQStjMzBGVGxyWnkxOHFTbGQ5UWZMSzBCcVV3M21TMCtaNDRPNTF5WWRpQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwNzc2NTIwMDo0MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRSlBhbU5TbkxGZ21FeUxJZnhrUmdEUEtzMUlLRXJsVi9QbWw0ai9FME0wIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODQ0MDExLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZwbSJ9",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "MR_RASH",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94707765200",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
