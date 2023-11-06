import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: "YOUR_PERSONAL_ACCESS_TOKEN",
});

export default octokit;
