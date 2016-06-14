# Installation

Follow these instructions to publish and subsequently install the module in your project.

## Git

```bash
# Initialize with git
git init
git add .
git commit -m "initial commit"
git push [git-url]

# Install in project from git
npm install [git-url] --save
```

## Source Directory

```bash
# Link module globally
npm link

# Link in project to local module
npm link webhost-client
```

**Note:** You should publish it before you use it publicly.

## NPM

```bash
# Publish to npm
npm publish

# Install from npm
npm install webhost-client --save
```

## Bower

```bash
# Register with bower
bower register webhost-client [git-url]

# Install from bower
bower install webhost-client --save
```
