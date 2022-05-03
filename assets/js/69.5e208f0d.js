(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{894:function(e,t,a){"use strict";a.r(t);var r=a(34),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"day-1-azure-fundamentals-infrastructure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#day-1-azure-fundamentals-infrastructure"}},[e._v("#")]),e._v(" Day 1 Azure Fundamentals & Infrastructure")]),e._v(" "),a("h2",{attrs:{id:"welcome"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#welcome"}},[e._v("#")]),e._v(" Welcome")]),e._v(" "),a("p",[e._v("This day is about getting a basic understanding of Azure and how to use its fundamental infrastructure services:")]),e._v(" "),a("ul",[a("li",[e._v("Networking")]),e._v(" "),a("li",[e._v("Virtual machines")]),e._v(" "),a("li",[e._v("Storage accounts")]),e._v(" "),a("li",[e._v("Azure Resource Manager Templates")]),e._v(" "),a("li",[e._v("Azure Automation")])]),e._v(" "),a("h2",{attrs:{id:"challenges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenges"}},[e._v("#")]),e._v(" Challenges")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-00/"}},[e._v("Challenge 0: Networking - Create a Virtual Network (IPv4) for your first VM")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-01/"}},[e._v("Challenge 1: VM - Create a virtual machine using the Azure portal")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-02/"}},[e._v("Challenge 2: VM and Managed Disks - Attach a Data Disk to a VM, Extend and Retype it")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-03/"}},[e._v("Challenge 3: (optional): VM and AZure Backup - Save your VM state")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-04/"}},[e._v("Challenge 4:(optional): VM and Custom Script Extensions - Post deployment automation or  configure / setup / install something within an empty VM")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-05/"}},[e._v("Challenge 5: Cloud Shell - Coding Your Azure Resources")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-06/"}},[e._v("Challenge 6: Storage Account - Creating Data Storage for VMs and Applications")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-07/"}},[e._v("Challenge 7:ARM - Azure Resource Manager (ARM) Templates")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-08/"}},[e._v("Challenge 8: Networking - Enabling Hybrid Networking with a Site-2-Site VPN Connection** (Onprem to Azure) VPN Connection")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-09/"}},[e._v("Challenge 9: Networking - Connect Two Virtual Networks Using Azure VNET Peering")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-10/"}},[e._v("Challenge 10: Networking - Load balancing your WWW Server Farm")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-11/"}},[e._v("Challenge 11 (optional):  Networking - Distribute traffic accross global Azure regions using Traffic Manager")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/day1/challenge-12/"}},[e._v("Challenge 12: Azure Automation - Send me yesterday's Azure cost")])],1)]),e._v(" "),a("h2",{attrs:{id:"networking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),a("blockquote",[a("p",[e._v("🔑 Keywords: "),a("em",[e._v("VNET, peering, loadbalancer, VPN, Traffic Manager")])])]),e._v(" "),a("p",[e._v("At first we create a "),a("em",[e._v("virtual network")]),e._v(" (VNET) in Azure. A VNET is a requirement for quite a few services in Azure e.g. virtual machines, firewalls, containers, web,etc. ("),a("RouterLink",{attrs:{to:"/day1/challenge-00/"}},[e._v("Challenge-0")]),e._v(")."),a("br"),e._v("\nA hybrid network connects your onpremise data center with Azure "),a("em",[e._v("Site-2-Site VPN")]),e._v(". This is a very common task - but quite a few steps to implement. Although infra work you should have done it once 😃 ("),a("RouterLink",{attrs:{to:"/day1/challenge-08/"}},[e._v("Challenge-8")]),e._v(")."),a("br"),e._v("\nTraffic can flow within a single VNET. However if you need to connect two separate VNETs you need to do "),a("em",[e._v("network peering")]),e._v(" ("),a("RouterLink",{attrs:{to:"/day1/challenge-09/"}},[e._v("Challenge-9")]),e._v(")."),a("br"),e._v(" "),a("em",[e._v("Azure loadbalancer")]),e._v(" is an easy way to distribute traffic between virtual machines. In "),a("RouterLink",{attrs:{to:"/day1/challenge-10/"}},[e._v("Challenge-10")]),e._v(" you configure it for a web server farm."),a("br"),e._v("\nAnother service that helps to direct traffic flow & distribution weightings is Azure "),a("em",[e._v("Traffic Manager")]),e._v(". This is "),a("RouterLink",{attrs:{to:"/day1/challenge-11/"}},[e._v("Challenge-11")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"virtual-machines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machines"}},[e._v("#")]),e._v(" Virtual Machines")]),e._v(" "),a("blockquote",[a("p",[e._v("🔑 Keywords: "),a("em",[e._v("create, disks, backup, post deployment automation")])])]),e._v(" "),a("p",[e._v("Spinning up a "),a("em",[e._v("virtual machine")]),e._v(" in Azure using the portal is "),a("RouterLink",{attrs:{to:"/day1/challenge-01/"}},[e._v("Challenge-01")]),e._v("."),a("br"),e._v("\nYou may need to "),a("em",[e._v("attach a data disk")]),e._v(" to a VM or resize it ("),a("RouterLink",{attrs:{to:"/day1/challenge-02/"}},[e._v("Challenge-02")]),e._v(")"),a("br"),e._v(" "),a("em",[e._v("Backup")]),e._v(" a VM is important, but fairly easy to do. Therefore we mark this as optional ("),a("RouterLink",{attrs:{to:"/day1/challenge-03/"}},[e._v("Challenge-03")]),e._v(")."),a("br"),e._v(" "),a("em",[e._v("Post deployment automation")]),e._v(" offers a way on how to configure / install / run scripts within an VM after it has been created. Thus allowing a way to fully automate the setup of a web farm ("),a("RouterLink",{attrs:{to:"/day1/challenge-04/"}},[e._v("Challenge-4")]),e._v(").")],1),e._v(" "),a("h2",{attrs:{id:"storage-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-accounts"}},[e._v("#")]),e._v(" Storage Accounts")]),e._v(" "),a("blockquote",[a("p",[e._v("🔑 Keywords: "),a("em",[e._v("container, SAS, access policy, file share")])])]),e._v(" "),a("p",[a("em",[e._v("Storage Accounts")]),e._v(" is one of the first Azure services. They offer a way to store data on a massive / performant way at global scale with relatively cheap pricing. However, storing data in the cloud needs to be secured from anyone's access. One sub service of Azure storage accounts are Azure file shares, which can be attached to VMs ("),a("RouterLink",{attrs:{to:"/day1/challenge-06/"}},[e._v("Challenge-6")]),e._v(").")],1),e._v(" "),a("h2",{attrs:{id:"automation-arm-aka-azure-resource-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automation-arm-aka-azure-resource-manager"}},[e._v("#")]),e._v(" Automation & ARM (aka Azure Resource Manager)")]),e._v(" "),a("blockquote",[a("p",[e._v("🔑 Keywords: "),a("em",[e._v("Cloud Shell, Azure Resource Manager, provider, template, parameter, deployment, Azure Automation")])])]),e._v(" "),a("p",[e._v("Besides the portal, Azure offers other ways to connect to it. There are tools like "),a("em",[e._v("Azure CLI")]),e._v(" or "),a("em",[e._v("PowerShell")]),e._v(" to run CRUD-like commands against your Azure subscription. This offers a way to speed up deployments, reduce human error, build infrastructure as code, etc.. Azure "),a("em",[e._v("Cloud Shell")]),e._v(" is an easy already setup shell you can use right away ("),a("RouterLink",{attrs:{to:"/day1/challenge-05/"}},[e._v("Challenge-5")]),e._v(").")],1),e._v(" "),a("p",[e._v("So-called "),a("em",[e._v("ARM templates")]),e._v(" offer a way to describe your Azure services in a json file. It can be used like an "),a("em",[e._v("'order-form'")]),e._v(" i.e. Azure will serve you with what you described within the ARM Template ("),a("RouterLink",{attrs:{to:"/day1/challenge-07/"}},[e._v("Challenge-7")]),e._v(").")],1),e._v(" "),a("p",[a("em",[e._v("Azure Automation")]),e._v(" is helpful do perform recurring tasks e.g. stopping & starting VMs to save costs based on a schedule. The idea is to let Azure execute scripts (that you provide) that can do things within your subscription. "),a("RouterLink",{attrs:{to:"/day1/challenge-12/"}},[e._v("Challenge-12")]),e._v(" is about gathering your Azure consumption / usage and send it to you via email as .csv for better cost prediction. Cool, isn't it?")],1),e._v(" "),a("p",[e._v("😎 "),a("strong",[e._v("Enjoy your day!")]),e._v(" 😎")])])}),[],!1,null,null,null);t.default=o.exports}}]);