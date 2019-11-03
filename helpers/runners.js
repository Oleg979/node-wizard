const github = require("./github");
const repository = require("./repository");
const chalk = require("chalk");

const run = async () => {
  try {
    const token = await getGithubToken();
    github.githubAuth(token);
    const url = await repository.createRemoteRepo();
    await repository.createGitignore();
    await repository.setupRepo(url);
    console.log(chalk.green("\nGithub repo successfully created!"));
  } catch (err) {
    if (err) {
      console.log(chalk.red(err));
      process.exit();
    }
  }
};

const getGithubToken = async () => {
  let token = github.getStoredGithubToken();
  if (token) {
    return token;
  }
  await github.setGithubCredentials();
  token = await github.registerNewToken();
  return token;
};

module.exports = { getGithubToken, run };
