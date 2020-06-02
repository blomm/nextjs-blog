// API Routes can be dynamic, just like regular pages
// https://nextjs.org/docs/api-routes/dynamic-api-routes
export default (req, res) => {
  res.status(200).json({ text: 'Hello ' + req.body.email })
  //const email = req.body.email
  // Then save email to your database, etc...
}
