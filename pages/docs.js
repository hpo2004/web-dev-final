const Docs = () => {
    return (
        <div style={{ width: "98vw", height: "100vh", paddingTop: "0px", paddingLeft: "20px", }}>
            <h1>Documentation</h1>
            <h2>I. Introduction</h2>
            <h3>A. Overview of the web application</h3>
            <p>This web application, written and documented by me, Henry Osterweis, is a spin-off of the game Boggle, Wordle, and Word 
                search. The title "Squrbble" is temporary. It is my final project for NYU Tandon DM-UY 2193.</p>
            <h3>B. Purpose and audience of the documentation</h3>
            <p>The purpose of the documentation is to tell the story of my process developing the site.</p>
            <br></br>

            <h2>II. Getting Started</h2>
            <h3>A. System requirements</h3>
            <p>A modern web browser, such as Chrome or Safari.</p>
            <h3>B. Installation instructions</h3>
            <p>N/A.</p>
            <br></br>
            
            <h2>III. User Interface</h2>
            <h3>A. Navigation and layout</h3>
            <p>The site consists of two pages, index.js and docs.js. Index.js is the home page which is shown on the initial visit. 
                Navigation to docs.js is through the link "Documentation" at the bottom of the page. The site structure is purposely 
                simple to drive attention to the game while keeping the user experience smooth and enjoyable.</p>
            <h3>B. Functionalities of each page</h3>
            <p>Index.js hosts the game. Docs.js hosts the documentation.</p>
            <br></br>
            
            <h2>IV. Gameplay</h2>
            <h3>A. Basic rules</h3>
            <p>Create words by combining letters. Click on cells to connect letters then submit the word using the button above the 
                board. If the word is valid according to the English dictionary, the word will be added to your answer list and 
                appear on the sides of the board. Keep finding new words until you have collected a total of twelve words.</p>
            <h3>B. Winning</h3>
            <p>Collect the most total points and get the highest score to win.</p>
            <br></br>

            <h2>V. Support and Maintenance</h2>
            <h3>A. User testing and feedback</h3>
            <p>During the development of the game I received various comments from users testing the application. Feedback included 
                the following: making sure there is at least one playable word on every board; adding Scrable multiplier tiles with 
                color; creating a leaderboard of scores.</p>
            <h3>B. Known bugs / To-do list</h3>
            <p>Known bugs currently include the following: the score counter does not remove points awarded for letters in an invalid
                word; more than twelve words can be submitted; cells connected by corners can be consecutively selected. These bugs
                will be fixed in the future; the following changes will be implemented: the suggestions from user feedback; a proper
                endgame screen, mousedown and mousemove functionality to replace clicking and submitting words with a button.
            </p>
            <h3>C. Reading source code</h3>
            <p>The source code includes comments to help step through and understand each function. Report any inconsistencies or 
                mistakes to hpo2004@nyu.edu.</p>
            <br></br>

            <h2>VI. Conclusion</h2>
            <p>This is the documentation for my DM-UY 2193 final project. Contact me at hpo2004@nyu.edu.</p>
            <br></br>
            <p style={{ color: "darkgray", }}>~ This page was last updated by Henry Osterweis on Sunday May 7, 2023.</p>
            <br></br>
        </div>
    );
}
 
export default Docs;