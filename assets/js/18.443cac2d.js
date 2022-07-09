(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{387:function(t,i,s){"use strict";s.r(i);var g=s(2),n=Object(g.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("我们都知道，建立网站要经历一个长时间的过程，从设计开始，再经历coding过程，最后部署到线上。我们会写web网页，但是要想让我们可以通过网页访问，我们需要一个服务器，很长一段时间内，无论大小网页都需要服务器来处理，这个过程就是部署。但是，如果我们的是静态网页呢？不需要任何解析和数据交换，使用服务器还有意义吗？因此，静态网页托管服务出现了，很多大型互联网企业会为用户提供静态网页托管服务，并且大部分是免费的，省去了购买服务器和维护流程，部署上去就完事。Github Pages就是其中一员，它是一个静态网页托管服务，它可以把你的静态网页部署到Github上，这样，你就可以通过网页访问了。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("🔔 几种静态网页托管服务对比")]),t._v(" "),s("p",[t._v("Github Pages | 免费，可以灵活的自定义域名，可以使用Github Action持续集成（非常好用，本站使用了它）。缺点：服务器在境外，国内访问速度慢，不过使用"),s("a",{attrs:{href:"https://chrome.google.com/webstore/detail/%E5%BE%AE%E5%8D%9A%E5%9B%BE%E5%BA%8A/pinjkilghdfhnkibhcangnpmcpdpmehk",target:"_blank",rel:"noopener noreferrer"}},[t._v("微博图床插件"),s("OutboundLink")],1),t._v("可以解决资源加载速度慢问题。"),s("br"),t._v("\nCODING | 国内代码平台，UI好看，但是变相收费，目前不提供托管服务了。"),s("br"),t._v("\ngitee  | 国内托管平台，前些日子关闭了所有开源仓库，需要实名认证才能操作，不能自定义域名。"),s("br"),t._v("\n腾讯云服务 | 国内服务器大头，不过静态网页托管依赖小程序云环境，没有小程序还是算了，不能自定义域名。"),s("br"),t._v("\n另外还有NetLify、阿里云等")])]),t._v(" "),s("p",[t._v("本文将从最基础最简单的操作讲述如何从0开始部署一个静态网页托管服务。建议先看附录！")]),t._v(" "),s("h2",{attrs:{id:"一、注册github账号-安装github-desktop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、注册github账号-安装github-desktop"}},[t._v("#")]),t._v(" 一、注册Github账号，安装Github Desktop")]),t._v(" "),s("p",[t._v("首先，"),s("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v("处于“半墙”状态，看它主页你就知道为什么了...因此你很可能无法访问，那么你需要一个boost或者ladder。"),s("br"),t._v("\n搞定ladder之后，进入Github，选择注册，按照流程来就可以。"),s("br"),t._v("\n注册完毕之后，访问"),s("a",{attrs:{href:"https://desktop.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Desktop"),s("OutboundLink")],1),t._v("并安装到桌面，我为什么推荐使用这个呢，因为它是一个简单的桌面版Github，可以支持所有的Github功能，比如提交代码等等。对于没使用过git工具的人来说，图形界面一定要比命令窗口友好的多，由于本文是从0开始，那么我们就用最简单的。如果你有兴趣使用git工具，参考"),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/30044692",target:"_blank",rel:"noopener noreferrer"}},[t._v("git教程"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"二、新建仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、新建仓库"}},[t._v("#")]),t._v(" 二、新建仓库")]),t._v(" "),s("p",[t._v("在Github中，点击右上角的“+”，选择“New repository”。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2pbb2wgj31ha0o44f4.jpg",alt:"1654389739458.png"}}),t._v("\n取一个名字，并将仓库设为public，勾选生成README.md文件。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2qgjiohj31b00oxakn.jpg",alt:"1654389808112.png"}}),t._v("\n点击“Create repository”。其他不用管。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2riszgnj311g0l6tg2.jpg",alt:"1654389869019.png"}}),t._v("\n如下，就建好了。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2s7afw3j31h30nf7e8.jpg",alt:"image.png"}})]),t._v(" "),s("h2",{attrs:{id:"三、使用github-desktop将仓库克隆到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、使用github-desktop将仓库克隆到本地"}},[t._v("#")]),t._v(" 三、使用Github Desktop将仓库克隆到本地")]),t._v(" "),s("p",[t._v("打开Github Desktop。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2tlkycoj30g10d040q.jpg",alt:"1654389990656.png"}}),s("br"),t._v("\n按照提示，跳转到浏览器登录。登陆完成后可看到下面的界面。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2vdlne6j31hc0srtj0.jpg",alt:"1654390091831.png"}}),s("br"),t._v("\n点击File->Clone。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2wgooi7j30uj0fswj1.jpg",alt:"1654390155573.png"}}),s("br"),t._v("\n选择仓库名。并指定放在本地一个空文件夹。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2xho22rj30xj0m078z.jpg",alt:"1654390214688.png"}}),s("br"),t._v("\n点击Clone。在刚才的路径就可以看到了。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x2y6rvmij30t60fc0x4.jpg",alt:"image.png"}}),s("br"),t._v("\nGithub Desktop也出现了文件管理器。")]),t._v(" "),s("h2",{attrs:{id:"四、将你的代码放入仓库并push到github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、将你的代码放入仓库并push到github"}},[t._v("#")]),t._v(" 四、将你的代码放入仓库并Push到github")]),t._v(" "),s("p",[t._v("打开生成的文件夹，将你的代码文件以及所有文件夹复制进去。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x30ueui2j30rs0guq7q.jpg",alt:"image.png"}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠ 警告")]),t._v(" "),s("p",[t._v("你必须将网站的主页命名为index.html，否则会出现404错误。并且index.html只能在文件夹根目录！！！")])]),t._v(" "),s("p",[t._v("打开Github Desktop。这时你可以看到更新了仓库。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x32q42bxj31hc0stqa3.jpg",alt:"image.png"}}),s("br"),t._v("\n填写下面的版本信息，随便填。并提交。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x33sn51kj315p0qy7ai.jpg",alt:"image.png"}}),s("br"),t._v("\n点击Repository->Push。提交到Github。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x35a82egj30rh0at0wl.jpg",alt:"1654390664950.png"}}),s("br"),t._v("\n提交成功！"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x35zpnbgj30v508uae0.jpg",alt:"1654390704321.png"}})]),t._v(" "),s("h2",{attrs:{id:"五、设置githubpages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、设置githubpages"}},[t._v("#")]),t._v(" 五、设置GithubPages")]),t._v(" "),s("p",[t._v("进入Github，查看文件是否已经提交上来了。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x378n0noj31gt0nck2r.jpg",alt:"1654390776750.png"}}),s("br"),t._v("\n提交成功后，设置GithubPages。"),s("br"),t._v("\n点击Settings->Pages。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x38hyviaj31450fpwln.jpg",alt:"image.png"}}),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3911cj7j31cb0n9k1o.jpg",alt:"1654390880541.png"}}),t._v("\n将source改为main,点击save。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3a6ji51j311n0dmjwz.jpg",alt:"image.png"}}),t._v("\n出现提示表示设置成功，稍等片刻。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3akibghj311n0k7jz7.jpg",alt:"image.png"}}),t._v("\n可到Actions查看进度。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3bd1ykxj31gw0kn130.jpg",alt:"1654391015260.png"}}),t._v("\n部署成功！"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3brh6ghj315f0k144z.jpg",alt:"image.png"}}),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3c561tyj31350boq6x.jpg",alt:"image.png"}}),t._v("\n点击网页进入。"),s("br"),t._v("\n就可以看到我写的内容啦！"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3cq0jj1j31d10i4dkn.jpg",alt:"1654391093680.png"}})]),t._v(" "),s("h2",{attrs:{id:"六、怎么维护和更新代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、怎么维护和更新代码"}},[t._v("#")]),t._v(" 六、怎么维护和更新代码？")]),t._v(" "),s("p",[t._v("你只要在本地的文件夹内编辑好文件，再打开Github Desktop，在没有冲突的情况下，提交即可。")]),t._v(" "),s("h2",{attrs:{id:"附录-如果文件很少怎么办"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录-如果文件很少怎么办"}},[t._v("#")]),t._v(" 附录：如果文件很少怎么办？")]),t._v(" "),s("p",[t._v("我只想上传一个index.htnl，还需要安装github desktop吗？答案是不需要的！你只要选择上传文件即可，再点击下面的保存，但是，文件逻辑顺序一定要对。如果你要上传大文件，这个方法不行。"),s("br"),t._v("\n什么？你的网站还没开始写？那就别装github desktop了，直接在github上coding！将链接中的.com改为.dev，打开线上vscode，在里面即可完成编码过程。"),s("br"),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3hfqm5nj317q03hn0o.jpg",alt:"1654391365480.png"}}),t._v(" "),s("img",{attrs:{src:"https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/img/006SHRs9gy1h2x3j9m3pij31hc0shgy1.jpg",alt:"image.png"}})]),t._v(" "),s("p",[t._v("👀你学会了吗？")])])}),[],!1,null,null,null);i.default=n.exports}}]);