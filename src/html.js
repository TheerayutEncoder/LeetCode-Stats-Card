const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="https://raw.githubusercontent.com/JacobLinCool/leetcode-stats-card/main/favicon/leetcode.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LeetCode Stats Card</title>
        <meta property="og:title" content="LeetCode Stats Card" />
        <meta property="og:description" content="A simple tool for every leetcoder. Show your leetcode stats on your GitHub profile or your website!" />
    </head>
    <body>
        <h1>LeetCode Stats Card</h1>
        <input id="username" placeholder="Your LeetCode Username">
        <select id="style">
            <option value="default" selected>Default</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
        </select>
        <div>
            <button onclick="preview()">Preview</button>
            <button onclick="go()">Go</button>
        </div>
        <div>
            <img id="preview" src="https://leetcode-card.jacob.workers.dev/?username=JacobLinCool"></img>
        </div>
        <div>
            <a href="https://github.com/JacobLinCool/leetcode-stats-card">View on GitHub</a>
        </div>
        <style>
            html, body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                font-family: sans-serif;
            }
            h1 {
                margin: 8px 0;
            }
            input, select {
                width: 320px;
                margin: 8px 0;
                padding: 2px;
            }
            button {
                width: 100px;
                margin: 8px;
            }
            div {
                width: 320px;
                margin: 8px 0;

                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
            img {
                width: 100%;
            }
        </style>
        <script>
            function url() {
                if(document.querySelector("#username").value.trim()) return location.origin + "/?username=" + document.querySelector("#username").value.trim() + "&style=" + document.querySelector("#style").value;
                else return location.origin + "/?username=JacobLinCool";
            }
            function preview() {
                document.querySelector("#preview").src = url();
            }
            function go() {
                let win = window.open();
                win.location = url()
            }
        </script>
    </body>
</html>
`;

export { html };
