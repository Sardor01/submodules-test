import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface singlePersonType {
	gender: string
	name: {
		title: string
		first: string
		last: string
	}
	location: {
		street: {
			number: number
			name: string
		}
		city: string
		state: string
		country: string
		coordinates: {
			latitude: string
			longitude: string
		}
	}
	nat: string
	email: string
	phone: string
	cell: string
	login: {
		uuid: string
		username: string
	}
	dob: {
		date: Date
		age: number
	}
	picture: {
		large: string
		medium: string
		thumbnail: string
	}
}

const App = () => {
	const [people, setPeople] = useState<singlePersonType[]>([])
	const [tableColumns, setTableColumns] = useState([])

	const getTableColumns = (data: singlePersonType[]) => {
		const test = data.map(i => ({}))
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get('https://randomuser.me/api', {
					params: {
						results: 20,
					},
				})

				setPeople(res.data.results)
			} catch (err) {
				console.error(err)
			}
		}

		fetchData()
	}, [])

	return (
		<div className='container'>
			<h1 className='title-4 text-center my-3 mb-5'>
				Let's see some magic happen!
			</h1>

			<pre>{JSON.stringify(people[0], null, 2)}</pre>
		</div>
	)
}

export default App
