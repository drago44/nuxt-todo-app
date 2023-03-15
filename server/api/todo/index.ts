import { db } from '@/server/db';

export default defineEventHandler((e) => {
  const methods = e.node.req.method;
  
  return db.todos;
});
