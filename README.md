# Diary-Web-SopheaktraVan
The main objective of this project is to create the user interface, features, and content of Dairy Application  while customizing certain elements to meet the requirements of the website using CRUD ( create Read Update Delete).


# Table of Contents

- [Project Overview](#project-overview)
- [How to Use](#use)
- [Technologies Used](#technologies-used)
- [Style Guide](#style-guide)
- [Gitflow Process](#Gitflow-Process)
- [Contact](#contact)

# Project Overview
    This project includes the following 4 created pages :

1. Home Page / Landing Page
2. List & Create Page
3. View Page
4. Edit Page
** Link to Deploy ** - [Deploy Link](https://sopheaktra-diary-hosting.vercel.app/)

# How to Use

1. Clone the repository:
    ```bash
    git clone https://git.clp.kr/anbschool/2nd/hexcode/van-sopheaktra/diary-web-sopheaktravan.git 
    ```

2. Navigate to the project directory:
    ```bash
    cd diary-web-sopheaktravan
    ```

3. Open the `index.html` file in your browser to view the project.


# Technology Used
-HTML
-JavaScript
-CSS
-Crud

Link To [Diary Notion Note](https://turquoise-soarer-c54.notion.site/Van-Sopheaktra-Note-64227780b1b74ad8a6e0174324096784)

# Style Guide

In Convention We have at Style Guide. You can See it detail in here :
Link to [Convention](https://turquoise-soarer-c54.notion.site/2nd-Project-Diary-Convention-4d0baa94e92844c09a602f564fc38ee8?pvs=4)


# Gitflow  Process

### Main Branches

1. **master (main)**:
    - This branch contains production-ready code.
    - Only merged from release branches.
2. **develop**:
    - This branch contains the latest development changes for the next release.
    - Features and bug fixes are merged here before being released.

### Supporting Branches

1. **feature**:
    - Used for developing new features.
    - Branches off from `develop` and merges back into `develop`.
    - Naming convention: `feature/feature-name`.
2. **release**:
    - Prepares code for a new production release.
    - Branches off from `develop` and merges into both `master` and `develop`.
    - Naming convention: `release/release-name`.
3. **hotfix**:
    - Fixes for urgent bugs in the production code.
    - Branches off from `master` and merges into both `master` and `develop`.
    - Naming convention: `hotfix/hotfix-name`.
## Steps for Gitflow

### 1. Initialize Gitflow

First, you need to initialize the Gitflow structure in your repository:

```bash
git flow init
```

### 2. Feature Branch

When you start a new feature:

```bash
git flow feature start feature-name
```

Develop the feature, commit changes, and when done:

```bash
git flow feature finish feature-name
```

### 3. Release Branch

When preparing for a release:

```bash
git flow release start release-name
```

Prepare the release, update version numbers, etc., and when done:

```bash
git flow release finish release-name
```

### 4. Hotfix Branch

For urgent fixes on production:

```bash
git flow hotfix start hotfix-name
```

Fix the issue, commit changes, and when done:

## Contact
For any questions, feel free to contact me:
- **Van Sopheaktra** - [sopheak1013@gmail.com](mailto:sopheak1013@gmail.com)
- GitLab: [@travoby_7](https://git.clp.kr/travoby_7)
