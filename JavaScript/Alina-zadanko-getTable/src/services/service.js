const apiBase = 'https://reqres.in/api/users/'

const getResource = async (url = '') => {
  const response = await fetch(`${apiBase}${url}`)

  if (!response.ok) {
    throw new Error(`Response is not okay, could not fetch ${url}, status: ${response.status}`)
  }

  return await response.json()
}

export const getAllUsers = async () => {
  const users = await getResource()
  return users.data
}

export const getUser = async (id) => {
  return getResource(`${id}`)
}
