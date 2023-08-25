import React from 'react'

const User_layout = ({ children }: { children: React.ReactNode }) => {
  const style = {
    main: `flex w-[100%] items-center justify-center mt-40`,
    section: `outline outline-[1px] outline-gray-300 flex flex-col    rounded-[16px] w-[1100px]`,
  }
  return (
    <main className={style.main}>
      <section className={style.section}>{children}</section>
    </main>
  )
}

export default User_layout