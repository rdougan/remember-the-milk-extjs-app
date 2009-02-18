require 'rubygems'
require 'fileutils'

module ExtMVC
  # overwrites all instances of 'MyApp' with the namespace provided
  def self.setup(namespace)
    files = %w(
      app/OS.js
      app/controllers/IndexController.js
      app/views/index/Index.js
      config/initialize.js
      config/settings.yml
    )
    
    files.each {|f| gsub_file(f, 'MyApp', namespace)}
  end
  
  private
  
  #find/replace in a file.  Stolen wholesale from Rails
  def self.gsub_file(relative_destination, regexp, *args, &block)
    path = destination_path(relative_destination)
    content = File.read(path).gsub(regexp, *args, &block)
    File.open(path, 'wb') { |file| file.write(content) }
  end
end