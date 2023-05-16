const express = require('express')
const cors = require('cors')

const app = express()
const port = 4004

app.use(express.json())
app.use(cors())

const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller')


app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)

app.listen(port, () => console.log(`Avengers assemble on port ${port}`))