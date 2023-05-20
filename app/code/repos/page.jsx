import React from 'react'

async function fetchRepos(){
    const response = await fetch('https://api.github.com/users/isotop786/repos');
    const repos = response.json();

    return repos;
}

const ReposPage = async () => {
  return (
    <div>ReposPage</div>
  )
}

export default ReposPage