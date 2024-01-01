import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const usePostQuery = () => {
  const { poemId } = useParams();
  const { data } = useQuery({});

  return data;
};

export default usePostQuery;
