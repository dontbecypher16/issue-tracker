import React from "react";
import {
  Box,
  Grid,
  Button,
  DataTable,
  Sidebar,
  TextInput,
  Text,
  Heading,
} from "grommet";
import { Search, Menu } from "grommet-icons";

function App() {
  const [sort, setSort] = React.useState({
    property: "name",
    direction: "desc",
  });

  const columns = [
    { property: "id", header: "bug" },
    { property: "title", header: "" },
    { property: "status", header: "status" },
    { property: "created", header: "created" },
    { property: "due", header: "due" },
    { property: "reporter", header: "reporter" },
  ];
  const DATA = [
    {
      id: "PRJ-1",
      title: "handle null issues",
      status: "completed",
      created: "02-02-2022",
      due: "03-10-2022",
      reporter: "Richard Dixon",
    },
    {
      id: "PRJ-1",
      title: "handle null issues",
      status: "completed",
      created: "02-02-2022",
      due: "03-10-2022",
      reporter: "Richard Dixon",
    },
    {
      id: "PRJ-1",
      title: "handle null issues",
      status: "completed",
      created: "02-02-2022",
      due: "03-10-2022",
      reporter: "Richard Dixon",
    },
    {
      id: "PRJ-1",
      title: "handle null issues",
      status: "completed",
      created: "02-02-2022",
      due: "03-10-2022",
      reporter: "Richard Dixon",
    },
  ];
  return (
    <div className="main-grid">
      <Sidebar
        className="Sidebar-S"
        background="light-5"
        gridArea="sidebar"
        header={
          <Box direction="flex" align="center" gap="xlarge">
            <Heading size="small">BeeGone</Heading>
            <Menu />
          </Box>
        }
        footer={<Text>&copy; Beegone</Text>}
      >
        <Grid gap="small">
          <Button color="dark-1" hoverIndicator="light-1" primary>
            Milestones
          </Button>
          <Button color="dark-1" hoverIndicator="light-1" primary>
            Bugs
          </Button>
          <Button color="dark-1" hoverIndicator="light-1" primary>
            Timesheet
          </Button>
          <Button color="dark-1" hoverIndicator="light-1" primary>
            Feed
          </Button>
        </Grid>
      </Sidebar>

      <Box pad="small" background="light-2" gridArea="main">
        <Grid gap="small" columns={["auto", "auto", "145px"]} align="center">
          <h1 style={{ margin: 0 }}>My Bugs</h1>
          <TextInput icon={<Search />} placeholder="search ..." size="small" />
          <Button
            color="dark-1"
            hoverIndicator="light-1"
            fill="vertical"
            primary
          >
            Submit Bug
          </Button>
        </Grid>
        <DataTable columns={columns} data={DATA} sort={sort} onSort={setSort} />
      </Box>
    </div>
  );
}

export default App;
