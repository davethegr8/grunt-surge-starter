# grunt-surge-starter

starter pack that gets you setup and running with grunt and surge

## How to use

```
git clone https://github.com/davethegr8/grunt-surge-starter.git
npm install
```

Then, change `your-project-domain.surge.sh` in `Gruntfile.js`. If you don't
have a surge domain already, leave this blank. If you do have a domain, fill
that in here.

Build out your website in the `public/` folder. When you deploy this project,
that folder is what will be deployed to surge.

Out of the box, this project uses harp to compile the static site assets, but
if you'd prefer to use something else, well that is left as an exercise to the
reader.

Finally, run `grunt deploy` and your project will be deployed to a surge
domain.

## Hooks

This project uses `git-scripts` to automatically compile your site as a 
`pre-push` event. This mimics what GitHub itself does to automatically compile
sites using GitHub Pages.