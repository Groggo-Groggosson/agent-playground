#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const [githubUsername, prNumberArg] = process.argv.slice(2);

if (!githubUsername || !prNumberArg) {
  console.error("Usage: node scripts/update-leaderboard.js <github_username> <pr_number>");
  process.exit(1);
}

const prNumber = Number.parseInt(prNumberArg, 10);

if (!Number.isInteger(prNumber) || prNumber <= 0) {
  console.error("PR number must be a positive integer.");
  process.exit(1);
}

const leaderboardPath = path.join(process.cwd(), "leaderboard.json");
const leaderboard = JSON.parse(fs.readFileSync(leaderboardPath, "utf8"));
const today = new Date().toISOString().slice(0, 10);

const contributors = Array.isArray(leaderboard.contributors)
  ? leaderboard.contributors
  : [];

let contributor = contributors.find((entry) => entry.name === githubUsername);

if (!contributor) {
  contributor = {
    name: githubUsername,
    pr_count: 0,
    last_pr_number: null
  };
  contributors.push(contributor);
}

contributor.pr_count += 1;
contributor.last_pr_number = prNumber;

leaderboard.total_prs = Number.isInteger(leaderboard.total_prs)
  ? leaderboard.total_prs + 1
  : 1;
leaderboard.last_updated = today;
leaderboard.contributors = contributors.sort((a, b) => {
  if (b.pr_count !== a.pr_count) {
    return b.pr_count - a.pr_count;
  }

  return a.name.localeCompare(b.name);
});

fs.writeFileSync(leaderboardPath, `${JSON.stringify(leaderboard, null, 2)}\n`);

console.log(
  `Updated leaderboard: ${githubUsername} now has ${contributor.pr_count} PR(s). Last PR: #${prNumber}. Total PRs: ${leaderboard.total_prs}.`
);
