import { NextApiRequest, NextApiResponse } from 'next'

// API Routes can be dynamic, just like regular pages
// https://nextjs.org/docs/api-routes/dynamic-api-routes
export default (req: NextApiRequest, res: NextApiResponse) => {
  // DO NOT fetch an API Route from getStaticProps or getStaticPaths.
  // Instead, write your server-side code directly in getStaticProps
  // or getStaticPaths (or call a helper function).

  res.status(200).json({ text: 'Hello ' + req.body.email })
}
