const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const igdb = require('igdb-api-node').default

const client = igdb('5c548c79a82a49c202aa3ad4cd05be19')

/*--------MIDDLEWARE----------*/
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, PATCH')
  res.header('Access-Control-Allow-Headers', 'Origin, Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Max-Age', '3600')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/', (req, res) => {

  const searchValue = req.body.search

  client.games({
    // filters: {
    //   'release_dates.date-gt': '2014-12-31',
    //   'release_dates.date-lt': '2018-01-01'
    // },
    field: '*',
    limit: 50,
    offset: 0,
    order: 'release_dates.date:desc',
    search: searchValue
  }, [
    'name',
    'release_dates.date',
    'rating',
    'hypes',
    'cover',
    'summary',
    'rating',
    'genres',
    'publishers'
  ])
    .then( res => JSON.stringify(res.body, null, 2))
    .then( result => res.send(result))
    .catch( err => {
      console.error(err)
      res.sendStatus(500)
    })
})

app.listen(5000, () => console.log('The api is listenning'))
