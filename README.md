# Personal Website, Portfolio & Blog

### This repository hosts my portfolio and blog website.

#### Project Overview:

This personal website serves as a portfolio to showcase my projects, skills, and experiences. Additionally, it features a blog where I share insights, tutorials, and updates on my work. The site is designed to be clean, responsive, and user-friendly.

#### Links:

- 🔗 **Website URL**: [samuelgranvik.tech](https://www.samuelgranvik.tech/)
- 📖 **Jekyll's official documentation**: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

## Want to Copy My Work? No Problem!

Follow these steps to set up your own copy of this project:

### Prerequisites

Before you begin, ensure you have the following:

- A GitHub account to host your site.
- Basic knowledge of Git, Ruby, HTML, CSS, JS and the command line.

### Installation Steps:

1. **Install Ruby**: Download [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (version 2.5.0 or higher).
2. **Install RubyGems**: Ensure you have RubyGems installed (it comes with Ruby).
3. **Install GCC and Make**: These tools are necessary for building native extensions.
4. **Clone the Repository**:

   ```sh
   git clone https://github.com/krullmizter/personal-website.git
   cd personal-website
   ```

5. **Install Jekyll and Bundler**:
   ```sh
   gem install bundler jekyll
   ```
6. **Install Dependencies**:
   ```sh
   bundle install
   ```
7. **Initialize a Local Jekyll Version**:

   The command below will start a local Jekyll server at: http://localhost:4000

   ```sh
   bundle exec jekyll serve
   ```

   To initialize the local server with hot reloading add the `--livereload` flag to the command

   ```sh
   bundle exec jekyll serve --livereload
   ```

8. **Build for Production**: If you want to create a production build of the site, run:
   ```sh
   bundle exec jekyll build
   ```
