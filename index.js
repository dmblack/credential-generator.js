#!/usr/bin/env node

let program = require('commander');

program
  .version('0.1.0')
  .description('Generates a password, and username, that includes special, but not similar, characters.')
  .option('-p, --password', 'Generate a password - Default')
  .option('-u, --username', 'Generate a username - Default')
  .option('-s, --no-special', 'Disallow special characters in username or password - Default: Include special characters.')
  .option('-S, --similar', 'Allow similar characters in username or password - Default: We ignore simialr characters (Eg; O0, I1l)')
  .parse(process.argv);

function getRandomString(sectionLength = 3) {
  let text = "";
  // Defaults to special characters, but NOT similar characters.
  let possible = "ABCDEFGHJKMNPQRTUVWXYZabcdefghjkmnpqrstuvwxyz2346789!@#$%^&*()[]<>_+";
  if (!program.special) {
    possible = "ABCDEFGHJKMNPQRTUVWXYZabcdefghjkmnpqrstuvwxyz2346789";
  }

  if (program.similar) {
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]<>_+";
    if (!program.special) {
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
  }

  for (let i = 0; i < sectionLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function makePassword() {
  return getRandomString(3) + '-' + getRandomString(3) + '-' + getRandomString(3) + '-' + getRandomString(3);
}

function makeUsername() {
  return getRandomString(3) + '-' + getRandomString(3) + '-' + getRandomString(3) + '-' + getRandomString(3);
}

// Handle no username or password specific arguments (Default)
if (!program.password && !program.username) {
  console.log('Username: ' + makeUsername());
  console.log('Password: ' + makePassword());
} else {
  // Handle specific arguments.
  if (program.username) {
    console.log('Username: ' + makeUsername());
  }
  if (program.password) {
    console.log('Password: ' + makePassword());
  }
}