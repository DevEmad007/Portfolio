import React,{ useEffect,useState } from "react";
// import octokit from "../../github-contributions";
import { Octokit } from "octokit";

function GithubPage() {
    const githubToken = "YOUR_PERSONAL_ACCESS_TOKEN";
    const octokit = new Octokit({ auth: githubToken });

    const [ contributions,setContributions ] = useState([]);

    useEffect(() => {
        octokit.activity.listPublicEventsForUser({
            username: "YOUR_GITHUB_USERNAME",
        })
            .then((response) => {
                setContributions(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    },[]);


    return (
        <div>

            {contributions.map((contribution,index) => (
                <div key={index}>{contribution.date}</div>
            ))}
        </div>
    );
}

export default GithubPage;
