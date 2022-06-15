import { Box, Grid } from "@chakra-ui/react";
import { useContext } from "react";
import { CardUsers } from "../../components/Card/users";
import { SearchBox } from "../../components/Form/SearchBox";
import { Header } from "../../components/Header";
import { UsersContext } from "../../contexts/UsersContext";

export const Users = () => {
  const { users } = useContext(UsersContext);

  return (
    <Box>
      <Header />
      <SearchBox />
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={10}
        paddingX="8"
        mt="8"
      >
        {users.map((user, id) => (
          <CardUsers user={user} key={id} />
        ))}
      </Grid>
    </Box>
  );
};
