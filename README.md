# Project "Opal"
[![](https://img.shields.io/travis/redmine-cp/project-opal/master.svg?style=flat-square&logo=travis&label=Travis%20CI%20build)](https://travis-ci.org/Maximus225/Project-Opal/builds/)
[![](https://img.shields.io/github/issues-raw/redmine-cp/project-opal.svg?style=flat-square&label=Issues%20open&colorB=28a745)](https://github.com/redmine-cp/project-opal/issues)
[![](https://img.shields.io/github/release/redmine-cp/project-opal.svg?style=flat-square&label=Latest%20stable)](https://github.com/redmine-cp/project-opal/releases)
[![](https://img.shields.io/github/release-pre/redmine-cp/project-opal.svg?style=flat-square&label=Latest%20pre)](https://github.com/redmine-cp/project-opal/releases)
[![](https://img.shields.io/github/tag/redmine-cp/project-opal.svg?style=flat-square&label=Latest%20tag)](https://github.com/redmine-cp/project-opal/tags)
[![](https://img.shields.io/discord/467920054797860865.svg?style=flat-square&logo=discord&label=Discord%20chat&colorB=7289da)](https://discord.gg/Jm6rej7)

Visual appearance modernization project for Redmine, initiated by one of the newly formed Redmine communities. It aims to achieve a more flat and clean look, as well as introduce additional expansions with help of front-end features for additional use convenience.
#### Navigation
[Features](#features) |
[Installation](#installation) |
[Customization](#customization) |
[Contribution & Collaboration](#contribution--collaboration) |
[Credits](#credits) |
[Licenses & References](#licenses--references)
___
## Features
1. Fixed top bar.
2. Sticky navigation bar.
3. Sticky search bar.
4. Sticky sidebar.
5. Toggleable reverse contrast (day mode and night mode).
6. External link notifier.
7. Ability to set all the external links to open in the new tab of the browser.
8. Emoji support, with emoji picker and ability to quick search (experimental feature).
9. The bar on the top now has navigation feedback.

*These screenshots demonstrate the state as of 28 Nov 2018*
<table cellspacing="0" border="0">
  <td><img width="176" src="https://screenshotscdn.firefoxusercontent.com/images/63d0c927-f7c6-44f5-acd5-5b96ea1748be.png"></td>
  <td><img width="176" src="https://screenshotscdn.firefoxusercontent.com/images/1b2d4b50-6959-44ce-b3cd-5ae197c157e7.png"></td>
  <td><img width="176" src="https://screenshotscdn.firefoxusercontent.com/images/2e4f19a0-0600-466b-adf3-9d36d03df00c.png"></td>
  <td><img width="176" src="https://screenshotscdn.firefoxusercontent.com/images/a031e480-90bf-4f51-97fd-18ffa44ebc8b.png"></td>
  <td><img width="176" src="https://screenshotscdn.firefoxusercontent.com/images/458f9e49-3377-457e-8550-2378b4bf3f75.png"></td>
</table>

___
## Installation
1. Extract the master to `\public\themes\` of your Redmine folder.  
2. The theme is yet in a **pre-release state**, which means, currently precompiled CSS isn't included in the master, and you will have to compile the CSS from `application.sass` file in `stylesheets` folder yourself, using any SASS compilation tool.
___
## Customization
The theme was developed using SASS, which you can customize and recompile, with tools like e.g. [Koala](http://koala-app.com/), in order to modify the colours and general style.
To do so, you will need to navigate to `stylesheets/global/#config-map.sass` and edit the variable values to your preference. Once that is done, recompile `application.sass` in the `stylesheets` folder.
___
## Contribution & Collaboration
#### If you wish to contribute as a *user* or a *tester*
1. You may head over to [issues](https://github.com/redmine-cp/project-opal/issues) page and submit the respective feedback, like:
  * Ideas for new features related to design.
  * Bug reports or design imperfections you spotted.
2. Redmine installation guides on different platforms can be found on [Redmine.org](https://www.redmine.org/projects/redmine/wiki/HowTos) or [here (work in progress)](https://gist.github.com/m4xiJo/d624ac456048c6f6f5b479c850239fdd).

#### If you wish to contribute as an *internal collaborator*
1. You need to be skilled in:
  * CSS, SCSS, SASS or LESS for the styling and solutions.
  * Front-end JavaScript (jQuery or Vanilla) for additional interactability, expansions and features.
  * Knowledge in both of the above points is also welcome.
2. Request to be added as an internal collaborator:
  * Contact [m4xiJo](https://github.com/m4xiJo/) via e-mail or join affiliated [Discord](https://discord.me/redmine) server and request to become a collaborator once you are there.
  * You will then be added to the respective development team on GitHub.

#### If you wish to contribute as an *external collaborator*
Feel free to *fork* / open *pull requests*.
___
## Credits
Proudly contributed to by: [m4xiJo](https://github.com/m4xiJo/), [GianVizzielli](https://github.com/GianVizzielli), [cappuMuc](https://github.com/cappuMUC).
___
## Licenses & References
The theme is licensed under [MIT](/README.md).  
The theme also uses:  
[Google Material Icons](https://github.com/google/material-design-icons/tree/master/iconfont) licensed under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.txt).  
[Google Blob Emojis](https://github.com/googlei18n/noto-emoji) licensed under [SIL Open Font License](https://github.com/googlei18n/noto-emoji/blob/master/fonts/LICENSE).  
[Roboto Font](https://fonts.google.com/specimen/Roboto) by Christian Robertson licenced under [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.txt).  
