const Details = (root) => {
  root.insertAdjacentHTML('beforeend', `
    <div class="details hide">
      <h3>Details:</h3>
    </div>
    <button class="goBackBtn hide">Go back</button>
  `)
}

export default Details
