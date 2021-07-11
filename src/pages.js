const readline = require("readline");
const chalk = require("chalk");
const utils = require("readline-utils");
const config = require("../config/default");
const wrap = require("ruxe");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Book {

    /**
     * @param {object[]} pages
     */

    constructor(pages) {
        this.pages = [];
        this.opened = false;
        this.closeKey = "";
        this.prompt = `\nPage (${config.nextKey}/${config.previousKey}): `;

        function check(input, _this) {
            if (!Array.isArray(input)) throw new TypeError("argument must be an array");

            input.forEach(page => {
                if (!page.title) throw new Error("page title is a necessary field");
                if (!page.content) throw new Error("page title is a necessary field");
                if (!page.footer) page.footer = "\r";

                _this.pages.push({
                    title: page.title,
                    content: page.content,
                    footer: page.footer
                }) 
            })
        }

        check(pages, this);
    }

    /**
     * 
     * @param {object} userInput
     * @param {string} userInput.title
     * @param {any} userInput.content
     * @param {string} userInput.footer
     */

    addPage (userInput) {
        if (typeof userInput != "object") throw new TypeError("argument must be an object");
        if (!userInput.title) throw new Error("title is a necessary field");
        if (!userInput.content) throw new Error("content is a necessary field");
        if (!userInput.footer) userInput.footer = "\r";

        this.pages.push({
            title: userInput.title,
            content: userInput.content,
            footer: userInput.footer
        });
    }

    /**
     * 
     * @param {number} index 
     */

    removePage (index) {
        if (typeof index != "number") throw new TypeError("argument must be a number");
        if (!this.pages[index - 1]) throw new Error("page not found");

        this.pages.splice(index - 1, 1);
    }

    /**
     * 
     * @param {number} index 
     * @param {object} newPage
     * @param {string} newPage.title
     * @param {any} newPage.content
     * @param {string} newPage.footer
     */

    editPage (index, newPage) {
        if (typeof index != "number") throw new TypeError("argument must be a number");
        if (typeof newPage != "object") throw new TypeError("argument must be an array");
        if (!this.pages[index - 1]) throw new Error("page not found");


        if ("title" in newPage) {
            this.pages[index-1].title = newPage.title;
        }

        if ("content" in newPage) {
            this.pages[index-1].content = newPage.content;
        }

        if ("footer" in newPage) {
            this.pages[index-1].footer = newPage.footer;
        }
    }

    /**
     * 
     * @param {number} index 
     */

    hasPage (index) {
        if (typeof index != "number") throw new TypeError("argument must be a number");

        if (!this.pages[index - 1]) {
            return false;
        }
        
        return true;
    }

    size () {
        return this.pages.length;
    }

    open () {
        this.opened = true;
        let index = 0;

        function send (_this, _page, i, key, firsttime) {
            if(!_this.opened) return;

            if (!_this.pages[i]) {
                _this.opened = false;
                rl.close();
                return;
            }

            let prevText = "";
            let text2Send = "";
            
            if (key == config.nextKey) {
                if (_this.pages[i - 1]) {
                    prevText = chalk.bold(chalk.underline(_this.pages[i - 1].title)) + "\n\n" + _this.pages[i - 1].content + "\n\n" + chalk.gray(chalk.dim(_this.pages[i - 1].footer));
                }
                text2Send = chalk.bold(chalk.underline(_this.pages[i].title)) + "\n\n" + _this.pages[i].content + "\n\n" + chalk.gray(chalk.dim(_this.pages[i].footer));
                
                let lines = prevText.split("\n").length + 3;
                utils.clearLine(rl, lines);
                console.info(text2Send);
            } else if (key == config.previousKey) {
                if (_this.pages[i + 1]) {
                    prevText = chalk.bold(chalk.underline(_this.pages[i + 1].title)) + "\n\n" + _this.pages[i + 1].content + "\n\n" + chalk.gray(chalk.dim(_this.pages[i + 1].footer));
                }
                text2Send = chalk.bold(chalk.underline(_this.pages[i].title)) + "\n\n" + _this.pages[i].content + "\n\n" + chalk.gray(chalk.dim(_this.pages[i].footer));
                let lines2 =  prevText.split("\n").length + 3;
                utils.clearLine(rl, lines2);
                console.info(text2Send);
            }
            else if(key == _this.closeKey) {
                _this.opened = false;
                rl.close();
                return;
            }
            else {
                text2Send = chalk.bold(chalk.underline(_this.pages[i].title)) + "\n\n" + _this.pages[i].content + "\n\n" + chalk.gray(chalk.dim(_this.pages[i].footer));
                let lines3 = 0;
                if (i != -1 && !firsttime ) {
                    lines3 =  text2Send.split("\n").length + 3;
                    utils.clearLine(rl, lines3);
                }
                console.info(text2Send);
            }

            rl.question(chalk.cyan(_this.prompt), ans => {
                if (ans.toLowerCase() == "n") {
                    send(_this, _this.pages[i++], i++, ans.toLowerCase(), false);
                    return;
                } 
                else if (ans.toLowerCase() == "p") {
                    send(_this, _this.pages[i--], i--, ans.toLowerCase(), false);
                    return;
                }
                send(_this, _this.pages[i], i, ans.toLowerCase(), false);
            })
        }
    
        send(this, this.pages[index], index, "/", true);
    }

    close () {
        this.opened = false;
        rl.close();
    }

    /**
     * 
     * @param {string} key 
     */

    setCloseKey(key) {
        if (key == "n" || key == "p") throw new TypeError("cannot set close key as 'n' or 'p'");
        this.closeKey = key.toString();
        let base = "\nPage (n/p";
        base += `/${key}): `;
        this.prompt = base;
    }
}

module.exports = Book;