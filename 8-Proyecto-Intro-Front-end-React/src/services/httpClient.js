const API = 'https://api.themoviedb.org/'

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2UzMDIyNzFkYTRhMTAwMDc2M2IwMjZiZDZkNmE4MCIsInN1YiI6IjY1Yzk1ZmIxOThmMWYxMDE2MmQ3ZDliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.978MY-LuLpMMIDuRpcBB6ss73Qv7yJCIRrgyAIwKQRY',
      'accept': 'application/json'
    }
  })
}