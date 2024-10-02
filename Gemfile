source "https://rubygems.org"

# Jekyll and GitHub Pages gems
gem "github-pages", group: :jekyll_plugins
gem "minima"

gem "faraday-retry" # Retries failed network requests
gem "webrick" # Needed for running Jekyll on Ruby 3.x

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed" # RSS feed generation
  gem "jekyll-sitemap" # Automatically generates a sitemap.xml
  gem "jekyll-seo-tag" # Adds essential SEO meta tags
  gem "jekyll-paginate" # Adds pagination for blog posts
  gem "jekyll-remote-theme" # Allows using remote themes
end

# Platform-specific dependencies for Windows environments
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3" # Timezone info for Ruby
  gem "tzinfo-data" # Timezone data
  gem "wdm", ">= 0.1.0" # Windows directory monitoring for Jekyll live reload
end

# JRuby-specific dependency
gem "http_parser.rb", platforms: [:jruby]
