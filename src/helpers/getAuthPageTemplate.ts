export const authTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>Authorization Successful</title>

        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;

                display: flex;
                justify-content: center;
                align-items: center;

                height: 100vh;
            }

            .card {
                background: white;
                padding: 40px;
                border-radius: 12px;

                text-align: center;
                width: 400px;
            }

            h1 {
                margin: 0;
                color: #172B4D;
                font-size: 28px;
            }

            p {
                margin-top: 12px;
                color: #5E6C84;
                font-size: 15px;
                line-height: 1.5;
            }

            .logos {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;

                margin-bottom: 24px;
            }

            .logo img {
                width: 64px;
                height: 64px;
                object-fit: contain;
            }

            .divider {
                width: 40px;
                height: 2px;
                background: #dfe1e6;
                border-radius: 999px;
            }

        </style>
    </head>

    <body>
        <div class="card">
            <div class="logos">
                <div class="logo">
                    <img src="https://res.cloudinary.com/dvj3i9gog/image/upload/v1779801114/rocketchatlogo_rt9rvj.png">
                </div>

                <div class="divider"></div>

                <div class="logo">
                    <img src="https://res.cloudinary.com/dvj3i9gog/image/upload/v1771524965/jira_mit3tt.png">
                </div>
            </div>

            <h1>Authorized Successfully</h1>

            <p>
                You can now close this window and return to Rocket.Chat.
            </p>
        </div>
    </body>
    </html>
`;
