# import "Utility.rb"


default_platform(:ios)
platform :ios do
  time=Time.now

  target="Pomato"
  configurationArray=["Release","Dev","Beta"]
  schemeArray=["Pomato","Dev-Pomato","Beta-Pomato"]

  exportMethod="enterprise"
  provisioningProfilesMap={
    "com.jerryluo.app"=> "match InHouse com.jerryluo.app",
    "com.jerryluo.app-dev"=> "match InHouse com.jerryluo.app-dev",
    "com.jerryluo.app-beta"=> "match InHouse com.jerryluo.app-beta",
  }

  outputDirectory="../dist/iOS/"
  
  
  lane :build_pomato do
    build(
      configuration:configurationArray.at(0),
      scheme:schemeArray.at(0),
      target:target,
      exportMethod:exportMethod,
      provisioningProfilesMap:provisioningProfilesMap,
      outputDirectory:outputDirectory,
      );
      # build(
      # configuration:configurationArray.at(1),
      # scheme:schemeArray.at(1),
      # target:target,
      # exportMethod:exportMethod,
      # provisioningProfilesMap:provisioningProfilesMap,
      # outputDirectory:outputDirectory,
      # );
      # build(
      #   configuration:configurationArray.at(2),
      #   scheme:schemeArray.at(2),
      #   target:target,
      #   exportMethod:exportMethod,
      #   provisioningProfilesMap:provisioningProfilesMap,
      #   outputDirectory:outputDirectory,
      #   );
  end
end

