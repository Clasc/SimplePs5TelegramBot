# PS5 BotAT
This is a tiny bot, written for myself, that checks websites for PS5 availability.

## To set it up:
create a .env file in your root directory with a BOT_TOKEN value for your telegram bot.

Install Nodejs and npm if not installed yet.

Then you only have to run 
`npm install`

## Run
`npm start`
in Terminal or
press ctrl + shft + b in VSCode.


The Bot runs every minute, as described by the scheduler (in ms).
Only Austrian Websites are available. Others have to be added manually.

### NO GUARANTEE THAT THIS WORKS!!
This bot is scraping a website and checks for stuff that may indicate, that a ps5 is available. However, this method is not very reliable, so it is configured to give more false-positives than negatives.

## Register for notifications
Run the application, than go to your bot on telegram, and write 'notifyme'.
It then responses with a message, that you should be notified.
If you want to check if it is still running, you can always send him 'hello' and wait for a response.

## Extending the Bot
You only have to create a new webshop with the specified interface, and add your scraping method with cheerio.
The webshop then has to be added to the array on index.ts.

## Known Issues
* The Bot can only scrape HTML, because of the architecture. Restructuring is necessary to enable other methods.
Other scraping methods, like accessing a REST or GraphQL API are not supported, since I simply did not have the time. 
* If a product is available, the bot keeps sending notifications to every user even if they already got one. Which means all users will get notifications every minute.

