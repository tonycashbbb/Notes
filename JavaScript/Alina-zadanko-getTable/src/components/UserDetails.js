const UserDetails = (details, user) => {
  details.insertAdjacentHTML('beforeend', `
    <ul>
      <li><img src="${user.avatar}" alt="ava"></li>
      <li>First name: ${user.first_name}</li>
      <li>Last name: ${user.last_name}</li>
      <li>Email: ${user.email}</li>
    </ul>
  `)
}

export default UserDetails
