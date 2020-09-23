import React from "react";
import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return (
    <div>
      {repos.map(repo => {
        return <RepoItem repo={repo} key={repo.id} />;
      })}
    </div>
  );
}
export default Repos;
