
import { AuthContext } from './../context/AuthContext';

const TaskPage = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <div>
      Task
    </div>
  )
}

export default TaskPage
