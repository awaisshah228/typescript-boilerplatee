
import {Request, Response, NextFunction, Router} from 'express';
const router = Router();


/**
 * @swagger
 * /test:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 */

router.get('/', (req: Request, res:Response) => {
  // const books = req.app.db.get("books");

  // res.send(books);
  res.json({
    he: 'hog',
  });
});
export default router;
