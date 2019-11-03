#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./helpers/files");
const { run } = require("./helpers/runners");
//////////////////////////////////////////////////////////////////////

const start = () => {
  clear();

  console.log(
    chalk.green(figlet.textSync("Node Wizard", { horizontalLayout: "full" }))
  );

  console.log(
    chalk.green(
      "\nWelcome to Node Wizard! This tool will help you init your Node app.\n"
    )
  );

  if (files.directoryExists(".git")) {
    console.log(chalk.red("This folder is already a Git repository!"));
    process.exit();
  }

  run();
};

//////////////////////////////////////////////////////////////////////

start();
