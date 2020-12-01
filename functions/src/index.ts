import * as functions from 'firebase-functions';
import { log } from 'firebase-functions/lib/logger';


 export const onUserCreated = functions.auth
 .user()
 .onCreate(function(userRecord, context) {
  console.log("On user created");
  log(userRecord);
 });
