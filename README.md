# newCliTool

basic boiler plate for creating cli tool form node

# Dependencies

    chalk:colored text on cli

    clui:for Showing Gauges,Progress Bars,Spark lines,Spinners on cli

    configstore:for Easily load and persist config on system

    figlet:for create ASCII art from text like
    ___________.___  ________.__          __          __
    \_   _____/|   |/  _____/|  |   _____/  |_       |__| ______
     |    __)  |   /   \  ___|  | _/ __ \   __\      |  |/  ___/
    |     \   |   \    \_\  \  |_\  ___/|  |        |  |\___ \
     \___  /   |___|\______  /____/\___  >__| /\ /\__|  /____  >
       \/                \/          \/     \/ \______|    \/

    inquirer: for common interactive command line user interfaces.

    minimist: for parsing argument options

# how to use

1. clone it by running in cli 'git clone https://github.com/shvhh/newCliTool.git'.
2. run 'npm i' (you need nodejs installed on you system for that).
3. set Name for you tool by replacing "cli-tool" with you tool name in package.json

   `"bin": { "cli-tool": "./index.js" },`

4. run 'npm install -g' with sudo/admin privilege.
5. DONE! try you tool in cli anywhere in your system.

# NOTE

I only have tried this in linux(ubuntu) don't know if it works for all operating system or not
