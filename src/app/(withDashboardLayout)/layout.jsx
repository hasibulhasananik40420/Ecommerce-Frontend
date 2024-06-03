import DashboardDrawer from "../../components/dashboard/DashboardDrawer/DashboardDrawer"

const DasboardLayout = ({children}) => {
  return (
    <DashboardDrawer>
      {children}
    </DashboardDrawer>
  )
}

export default DasboardLayout