const Table = (root) => {
  root.insertAdjacentHTML('beforeend', `
    <table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Avatar</th>
        <th>Email</th>
        <th>More</th>
      </tr>
    </table>
  `)
}

export default Table
