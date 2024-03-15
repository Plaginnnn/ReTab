import express from 'express'
import path from 'path'
import serverRoutes from './routes/servers.js'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))

// Подключаем middleware для анализа тела запроса в формате JSON.
app.use(express.json())

// Подключаем middleware для анализа данных, отправленных в формате URL-encoded.
// Параметр extended: false указывает, что используется стандартный модуль Node.js
// для анализа данных, что в большинстве случаев достаточно.
app.use(express.urlencoded({ extended: false }))

//api
app.use(serverRoutes)

app.get('/', (req, res) => {
	res.send('<h1>hello world</h1>')
})

app.get('/features', (req, res) => {
	res.send('<h1>asdasd</h1>')
})

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}...`)
})
