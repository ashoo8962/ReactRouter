import { useParams } from 'react-router-dom'
const User = () => {

    const params =useParams()
  return (
    <div>
      <h2>Hii i am {params.username}</h2>
    </div>
  )
}

export default User
