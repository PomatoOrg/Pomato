
lane :clean_build do
    xcclean()
end

lane :kill_port do
  begin
    sh("kill -9 $(lsof -i :8081)")
  rescue => exception
    puts "8081没有被占用";
  end
end

lane :kill_all_terminal do
  begin
    sh("killall Terminal")
  rescue => exception
    puts "Terminal没有开启过";
  end

end


lane :build do |options|
  begin
  
  configuration=options[:configuration]
  scheme=options[:scheme]
  target=options[:target]
  exportMethod=options[:exportMethod]
  provisioningProfilesMap=options[:provisioningProfilesMap]
  outputDirectory=options[:outputDirectory]


  version = get_version_number(target: target,configuration:configuration)
  time=Time.now
  ipaName="#{configuration}_#{target}_#{version}_#{time.hour}:#{time.min}:#{time.sec}.ipa"

  # increment_build_number()
  kill_port()
  kill_all_terminal()
  
  build_ios_app(
    configuration: configuration,
    scheme: scheme,
    clean: true,
    include_bitcode:true,
    output_directory: outputDirectory, # Destination directory. Defaults to currentdirectory.
    output_name: ipaName,       # specify the name of the .ipa file to generate(including file extension)
    export_method: exportMethod,
    export_options: {
      provisioningProfiles: provisioningProfilesMap,
    }
  )
  rescue => exception
    puts "build_ios_app 失败";
    puts "exception #{exception}";
  end
  
end