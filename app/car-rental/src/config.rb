#compass setting

#require "normalize-scss"
#require "breakpoint"


project_type = :stand_alone
http_path = "/"
css_dir = "assets/css"
sass_dir = "assets/scss/"
images_dir = "assets/images/"
fonts_dir = "assets/fonts/"
javascripts_dir = "assets/scripts"
line_comments = false
preferred_syntax = :scss
output_style = :expanded #:compressed #:expanded
relative_assets = true

gem 'sass', '~> 3.4.0'

sass_options = {:sourcemap => true}
#sass_options = {:sourcemap => true}