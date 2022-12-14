import { useState, useEffect, ChangeEvent } from "react"

import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"
import "./App.css"

import { getData } from './utils/data.utils'

export type Monster = {
  id: string;
  name: string;
  email: string;
  website: string;
  phone: string;
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
  }
}

const App = () => {
  const [searchField, setSearchField] = useState("") // [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const fetchUsers =  async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className='App'>
      <h1 className='App-title'>Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        className='monster-search-box'
        placeholder='search Monsters'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
