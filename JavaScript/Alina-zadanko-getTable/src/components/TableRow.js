const TableRow = (table, users) => {
  users.forEach((item, i) => {
    table.insertAdjacentHTML('beforeend', `
        <tr>
          <td><img src=${item.avatar} alt="ava"></td>
          <td>${item.first_name}</td>
          <td>${item.last_name}</td>
          <td>${item.email}</td>
          <td><button class="viewDetails" id="${i+1}">View details</button></td>
        </tr>
      `)
  })
}

export default TableRow
