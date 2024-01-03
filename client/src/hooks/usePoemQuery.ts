import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "/graphql";
const POEM_QUERY = gql`
  {
    poems {
      title
      author
      poem
    }
  }
`;

const usePoemsQuery = () => {
  const data = useQuery("poems", () => {
    return request(endpoint, POEM_QUERY);
  });

  if (!data) throw new Error("Poem data is not found");

  return data;
};

export default usePoemsQuery;
