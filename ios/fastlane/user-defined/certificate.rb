default_platform(:ios)
platform :ios do
  desc <<-EOF
  iOS 证书自动配置
  -注意-注意-注意-
  密码为 pomato
  EOF

  lane :pull_config_pomato do
    sh("export LC_ALL=en_US.UTF-8 && export LANG=en_US.UTF-8")
    match(
      git_url: "git@bitbucket.org:pomatoorg/pomato-mobileapp-certificates.git",
      git_branch: "type/develop",
      app_identifier: [
        "org.pomato.mainapp",
        "org.pomato.mainapp.widget-today",
        # "com.pomato.main-dev",
        # "com.pomato.main-beta",
      ],
      type: "development",
      # clone_branch_directly:true,
      # verbose:true,
      username:"396912848@qq.com",
      # force:true,
      # readonly: true
    )
    
  end
end