# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "hashicorp/precise32"
  config.vm.hostname = "outpostbox"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8000" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 80, host: 8000

  # Local IP for Vagrant box
  config.vm.network "private_network", ip: "192.168.20.20"

  # Provision Vagrant box with shell script
  config.vm.provision :shell, path: "bootstrap.sh"

end
