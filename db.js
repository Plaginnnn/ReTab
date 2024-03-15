import { Pool } from 'pg'

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: 'rasim2003',
	port: 5432,
})

// Функция для проверки подключения к базе данных
async function testConnection() {
	try {
		const client = await pool.connect()
		console.log('Connected to the database!')
		client.release()
	} catch (error) {
		console.error('Error connecting to the database:', error.message)
	}
}

// Вызов функции для проверки подключения
testConnection()

export default pool
