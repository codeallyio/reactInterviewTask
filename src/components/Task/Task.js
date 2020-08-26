import React from "react";
import axios from "axios";
import TaskDescription from "../TaskDescription/TaskDescription"
import './Task.css'
const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

const getReactRepositories = () =>
  axios
    .get(SEARCH_ENDPOINT)
    .then((result) => result.data.items)
    .then((repos) =>
      repos.map(({ forks, name, stargazers_count, html_url }) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url
      }))
    );

const reposotories = [
  { name: "react", stars: 69012, forks: 12581, url: "http://…" },
  { name: "react", stars: 7291, forks: 214, url: "http://…" },
  { name: "react", stars: 31705, forks: 6581, url: "http://…" },
  { name: "react", stars: 5671, forks: 342, url: "http://…" }
];

const Task = () => <TaskDescription />;

export default Task