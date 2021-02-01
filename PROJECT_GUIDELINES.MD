# Project guidelines

Below is an example of project guidelines, please modify to suit your project...

## Branches

### Develop (default) :bug:

This is the default branch where the majority of commits and development will take place. The develop branch is useful as it future proofs the repo for having live and preview links.

When setting up a new repo, you will need to create a develop branch, and set that as default in repo settings `settings/repository/default-branch`

### Master :zap:

This branch is the master branch, it shoould only contain code that is ready to be released.

### feature-featureName :exclamation:

Feature branches are optional, you can use a feature branch if you are doing one of the following:

- Adding an entirely new feature (search, data mapping etc.)
- Refactoring components/functionality
- Potential breaking changes to app functionality, this could affect colleagues progress.
- A spike/exploratory piece of code

## 📁Folder/File Structure

Components should be built inside the `features/` directory.

Each Component should have it's own folder following the **PascalCase** naming convention, eg. `CourseCard`.

Files that make up the Component should follow **camelCase** naming conventions, eg. `courseCard.js`.

## 🚀 Git Commits

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) structure for commit messages.

Example: `feat: header component`

## 🎨 Front end style guide

### Naming Conventions

Classes & Styles should follow the [BEM](http://getbem.com/introduction/) (Block, Element, Modifier) naming convention. 

CSS-Tricks has a [good crash course on BEM](https://css-tricks.com/bem-101/).

Example: 

- Block: `.course-card`
- Element: `.course-card__content`
- Modifier: `.course-card--wide`

### Units (rems / pixels)

We use `rem` to define our units. The project has a rem-reset so that `1rem = 10px`.

Media Queries are defined in pixels however.

### Layout 

We have a `.wrapper` class in our Global Styles to help structure page layouts. There are modifiers of this class for different layouts. 

### Browser Support

- Chrome, Firefox, Safari (latest 2 releases)
- Edge (Chromium)

## Code Review

Upon completing a JIRA task you should assign it to another developer for review. They will leave feedback via a JIRA comment for you to act upon. Feedback should be given using the [Netlify Feedback Ladders model](https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/).

- ⛰ Mountain / Blocking and requires immediate action
- 🧗‍♀️ Boulder / Blocking
- ⚪️ Pebble / Non-blocking but requires future action
- ⏳ Sand / Non-blocking but requires future consideration
- 🌫 Dust / Non-blocking, “take it or leave it”

## 📚 Storybook

This project uses storybook v6, create stories inside the component folder as `componentName.stories.js`
