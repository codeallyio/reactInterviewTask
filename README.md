# Runnin the app
The app will start automatically at port 3000. To see the preview use Preview button in the header.

## Task Description
1. Your task is to write a simple React Application that renders list of repositories In the following manner:

• <name> - 🌟 <stars> - 🍴 <forks>
• react - 🌟 69012 - 🍴 12581
• reselect - 🌟 7291 - 🍴 214
• redux - 🌟 31705 - 🍴 6581
• recompose - 🌟 5671 - 🍴 342

Please use method getReactRepositories fetch list of repositories, once resolved it will return list in following format:

[
    {name: 'react', stars: 69012, forks: 12581, url: 'http://…'},
    {name: 'react', stars: 7291, forks: 214, url: 'http://…'},
    {name: 'react', stars: 31705, forks: 6581, url: 'http://…'},
    {name: 'react', stars: 5671, forks: 342, url: 'http://…'}
]

### Bonus tasks (optional)
2. Create a functionality(Can be HOC/Hook/Render Prop etc)
that will provide a "More/Less" button that will expanse or collapse the
list, for example:

// Expanded Mode
+-----------------------------------------------+
| <name> | 🌟 <numberOfStars> |🍴 <numberOfForks>|        
+-----------------------------------------------+
| react      |     🌟 69012      |   🍴 12581    |
+-----------------------------------------------+
| reselect    |     🌟 7291       |   🍴 214      |
+-----------------------------------------------+
    | recompose  |     🌟 5671       |   🍴 342      |
+-----------------------------------------------+
| See Less Button |
+-----------------+

// Collapsed Mode
+-----------------------------------------------+
| <name> | 🌟 <numberOfStars> |🍴 <numberOfForks>|        
+-----------------------------------------------+
| react      |     🌟 69012      |   🍴 12581    |
+-----------------------------------------------+
| reselect    |     🌟 7291       |   🍴 214      |
+-----------------------------------------------+
| See More Button |
+-----------------+ | redux      |     🌟 31705      |   🍴 6581     |
+-----------------------------------------------+

3. Write unit tests for your solution.