import { UserButton } from "@clerk/nextjs"

const DashboradPage = () => {
  return (
    <>
      <div>DashboradPage
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  )
}

export default DashboradPage
