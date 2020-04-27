## Start Up App

In the Project Directory - Install dependencies with `npm install`

Start WebApp with `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Keep the API server running as well for the movie dataset




## Notes
Designed and Developed by Divya Prem thedivyak@gmail.com

#### Design Mock Ups: Whimsical
- https://whimsical.com/6a2a6Zh4QsqsSAoM2upFsF#VsSo8s35WwFaP9w8qkPoUw
- I used simple wire frames to visualize the data and structured the app around 3 main pages: Search, Movie, and Crew. The mock ups were helpful to get a general layout, and as I starting developing, I enhanced my initial design with more features and components.

#### UI Library: React with Typescript
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- I've spent the past year building full-stack React/Typescript/Kotlin webapps. React is known for helping build complex UIs based off of simple components and the content of this dataset had similar, repetitive information (name, title, genre, rating etc.) from each of the 3 API calls, so it aligned well with the concept of reusable components. This also helped me keep the code as well as the UI organized and intuitive. Typescript provides easier code readability and helps with self-documenting the codebase.

#### State Management: Redux Store
- I have experience using Mob-X State Tree, but I have heard great things about Redux Store so I took this opportunity to learn and use it in this coding challenge. It has been incredibly helpful storing state such that any component can access it, independently. This allowed me to create specific and small functional components that can still easily capture and render the app's state.

#### UI Framework: Material UI 
- My approach to presenting this data was mostly through tables. Using Material UI's table component and Grid layouts, I was able to keep the webApp responsive. I use Material UI often for my other projects, so I was aware of components like chip and popover, that I applied to this app to add some fun in addition to the text content.  



