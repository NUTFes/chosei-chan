// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../../chosei-app-test-settings.json');
const admin = require('firebase-admin');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const COLLECTION_NAME = 'test';
  //初期化する
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();

  const targetDoc = 'bjuh1ON8MpMbnfjYYxwn'; //書き換える

  if (req.method === 'POST') {
    const docRef = db.collection(COLLECTION_NAME).doc();
    const insertData = {
      name: 'Symfo',
      email: 'symfo@example.com',
    };
    docRef.set(insertData);
  } else if (req.method === 'GET') {
    const doc = await db.collection(COLLECTION_NAME).doc(targetDoc).get();
    console.log(doc);
  }

  res.status(200);
}
