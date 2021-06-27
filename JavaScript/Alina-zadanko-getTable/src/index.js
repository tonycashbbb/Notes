import {getAllUsers, getUser} from "./services/service";
import TableRow from "./components/TableRow";
import UserDetails from "./components/UserDetails";
import Table from "./components/Table";
import Details from "./components/Details";

const root = document.querySelector('#root')

Table(root)
Details(root)

const table = root.firstElementChild

getAllUsers()
  .then(users => {
    TableRow(table, users)

    table.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        getUser(event.path[0].id)
          .then(res => {
            UserDetails(table.nextElementSibling, res.data)
          })

        table
          .nextElementSibling
          .classList.remove("hide")
        table
          .nextElementSibling
          .nextElementSibling
          .classList.remove('hide')
        table.classList.add('hide')
      }
    })
  })

table
  .nextElementSibling
  .nextElementSibling
  .addEventListener('click', (e) => {
    table.classList.remove('hide')
    table.nextElementSibling.classList.add('hide')
    e.target.classList.add('hide')

    table.nextElementSibling.lastElementChild.remove()
  })
