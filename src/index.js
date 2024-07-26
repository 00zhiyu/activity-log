const { fetchAndFilterEvents } = require('./utils/github');
const { updateReadme } = require('./utils/file');
const { username, token, eventLimit, ignoreEvents, readmePath, commitMessage } = require('./config');
const core = require('@actions/core')

// Main function to execute the update process
async function main() {
    try {
        const activity = await fetchAndFilterEvents({ username, token, eventLimit, ignoreEvents });
        await updateReadme(activity, readmePath);
    } catch (error) {
        core.error('❌ Error in the update process:', error);
    }
}

// Execute the main function
main();
