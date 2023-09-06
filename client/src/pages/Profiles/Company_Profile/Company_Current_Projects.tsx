import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../../context'
import axios from 'axios'
import Current_Project_Card from './Components/Current_Project_Card'
const Current_Projects = () => {
  const { UserState, isUserLoggedIn } = UseMainContext()

  const [projects, setProjects] = useState<any>()

  const GetAllCurrentProject = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/companies/projects/each/${
            UserState.userData.user._id
          }`,
        )

        const data = res.data
        setProjects(data.data)
        console.log(data.data)
      }
    } catch (error) {
      const err: any = error
      console.log(err.message)
    }
  }

  useEffect(() => {
    GetAllCurrentProject()
  }, [])

  if (isUserLoggedIn && projects && projects.length > 0) {
    return (
      <div className="h-[900px] p-10 overflow-y-scroll ">
        {projects.map((val: any) => (
          <Current_Project_Card key={val._id} data={val} />
        ))}
      </div>
    )
  } else {
    return <div>HAH</div>
  }
}

export default Current_Projects