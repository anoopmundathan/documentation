(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5GCM":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return r}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var n=t("/FXl"),i=t("TjRS");t("sW4K"),t("aD51");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/enterprise/installation-cloud.mdx"}});var c={_frontmatter:o},l=i.a;function r(e){var a=e.components,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(l,s({},c,i,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Start by installing a Kubernetes cluster. This can be done on one of the hyperscalers (",Object(n.b)("strong",{parentName:"p"},"AWS"),", ",Object(n.b)("strong",{parentName:"p"},"GCP")," or ",Object(n.b)("strong",{parentName:"p"},"Azure"),"),\ncloud providers (Digital Ocean, Scaleway, etc) or on-premise in your own private network."),Object(n.b)("br",null),Object(n.b)("div",{className:"embed-container"},Object(n.b)("iframe",{src:"https://player.vimeo.com/video/404813147",width:"640",height:"400",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("h1",{id:"installation"},"Installation"),Object(n.b)("p",null,"Before setting up Kerberos Enterprise, some configuration needs to happen. First thing that we need to do is setting up the RBAC permissions (Role Based Access Control). We need to enable this to be able to query specific endpoints from the Kubernetes API. By default these endpoints are locked, so we need to unlock them."),Object(n.b)("br",null),Object(n.b)("div",{className:"embed-container"},Object(n.b)("iframe",{src:"https://player.vimeo.com/video/404767375",width:"640",height:"400",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),Object(n.b)("br",null),Object(n.b)("br",null),Object(n.b)("p",null,"First clone the configrations from our Github repo."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"git clone https://github.com/kerberos-io/enterprise"))),Object(n.b)("p",null,"Next go into the directory and execute the first Kubernetes configuration file ",Object(n.b)("inlineCode",{parentName:"p"},"clusterrole.yaml"),"."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl create -f ./enterprise/yaml/factory/clusterrole.yaml"))),Object(n.b)("p",null,"This will make several actions inside your cluster available. We need this to be able to create deployments from the factory web app."),Object(n.b)("h2",{id:"helm"},"Helm"),Object(n.b)("p",null,"Next we will install a couple of dependencies which are required for Kerberos Enterprise. ",Object(n.b)("a",s({parentName:"p"},{href:"https://helm.sh/"}),Object(n.b)("strong",{parentName:"a"},"Helm"))," is a package manager for Kubernetes, it helps you setting up services more easily (this could be a MQTT broker, a database, etc).\nInstead of writing yaml files for every service we need, we use so called ",Object(n.b)("strong",{parentName:"p"},"Charts")," (libraries), that you can reuse and configure the,\nwith the appropriate settings."),Object(n.b)("p",null,"Use one of the preferred OS package managers to install the Helm client:"),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"brew install helm"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"choco install kubernetes-helm"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"scoop install helm"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"gofish install helm"))),Object(n.b)("h2",{id:"traefik"},"Traefik"),Object(n.b)("p",null,Object(n.b)("a",s({parentName:"p"},{href:"https://containo.us/traefik/"}),Object(n.b)("strong",{parentName:"a"},"Traefik"))," is a reverse proxy and load balancer which allows you to expose your deployments more easily. Kerberos uses Traefik to expose it's APIs more easily."),Object(n.b)("p",null,"By executing following helm command, we will install traefik and link it to a specific DNS name. Open the traefik values file, ",Object(n.b)("inlineCode",{parentName:"p"},"./enterprise/yaml/traefik/values.yaml"),", and update the DNS name to your own domain."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    dashboard:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"      enabled: true"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e   domain: traefik.domain.com"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"      serviceType: NodePort"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    rbac:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"        enabled: true"))),Object(n.b)("p",null,"Add Helm repository and install traefik."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm repo add stable https://kubernetes-charts.storage.googleapis.com"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm install traefik -f ./enterprise/yaml/traefik/values.yaml stable/traefik"))),Object(n.b)("p",null,"After installation you should have an IP attached to traefik service, look for it by executing the ",Object(n.b)("inlineCode",{parentName:"p"},"get service")," command. You will see the ip address in the ",Object(n.b)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," attribute."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl get svc"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    NAME                        TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    kubernetes                  ClusterIP      10.0.0.1       <none>          443/TCP                      36h"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e traefik                     LoadBalancer   10.0.27.93     40.114.168.96   443:31623/TCP,80:31804/TCP   35h"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    traefik-dashboard           NodePort       10.0.252.6     <none>          80:31146/TCP                 35h"))),Object(n.b)("p",null,"Go to your DNS provider and link the domain you've configured in the first step ",Object(n.b)("inlineCode",{parentName:"p"},"traefik.domain.com")," to the IP address of the ",Object(n.b)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," attribute. When browsing to ",Object(n.b)("inlineCode",{parentName:"p"},"traefik.domain.com"),", you should see the traefik dashboard showing up."),Object(n.b)("h2",{id:"ingress-nginx-alternative-for-traefik"},"Ingress-Nginx (alternative for Traefik)"),Object(n.b)("p",null,"If you don't like ",Object(n.b)("inlineCode",{parentName:"p"},"Traefik")," but you prefer ",Object(n.b)("inlineCode",{parentName:"p"},"Ingress Nginx"),", that works as well."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm repo update"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm install ingress-nginx ingress-nginx/ingress-nginx"))),Object(n.b)("h2",{id:"mongodb"},"MongoDB"),Object(n.b)("p",null,"When using Kerberos Enterprise, it will generate configurations for every surveillance camera deployed. These configuration files are stored centrally in a MongoDB database. Therefore we use ",Object(n.b)("inlineCode",{parentName:"p"},"helm "),"to install a MongoDB instance inside your cluster."),Object(n.b)("p",null,"Have a look into the ",Object(n.b)("inlineCode",{parentName:"p"},"yaml/mongodb/values.yaml")," file, you will find plenty of configurations for your MongoDB instance. You will also find the attribute where you can change the root password of mongodb."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm repo add bitnami https://charts.bitnami.com/bitnami"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"helm install mongodb bitnami/mongodb --values ./enterprise/yaml/mongodb/values.yaml"))),Object(n.b)("p",null,"Once installed succesfully the MongoDB instance, we should copy the password of the MongoDB instance. Once revealed copy the password, as we will need in the next steps."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),'export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace default mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)'),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"echo $MONGODB_ROOT_PASSWORD"))),Object(n.b)("h2",{id:"kerberos-enterprise-web-app---the-factory"},"Kerberos Enterprise Web App - The Factory"),Object(n.b)("p",null,"The last step is to install the Kerberos Enterprise application. Kerberos Enterprise is managed through an application which we call the ",Object(n.b)("inlineCode",{parentName:"p"},"Factory"),". It is responsible for initiating the deployments inside your cluster. These deployments is what we also call (similar to the Open Source version) the machinery."),Object(n.b)("p",null,"The Factory is shipped as a web app (React) which provides you with a tool to update your deployments (agents) easily, monitor them, etc. The Factory is the central portal for managing Kerberos Enterprise inside your cluster. However at any point you can fine-tune or take-over using the ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," command."),Object(n.b)("p",null,"Before installing the Factory web app, open the ",Object(n.b)("inlineCode",{parentName:"p"},"./enterprise/yaml/factory/deployment.yaml")," configuration file. At the of the bottom file you will find two endpoints, similar to the Ingres file bewlwo. Update the hostnames to your own perferred domain, and add these to your DNS server or ",Object(n.b)("inlineCode",{parentName:"p"},"/etc/hosts")," file (pointing to the same IP as the Traefik/Ingress nginx EXTERNAL-IP)."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    spec:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"      rules:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e   - host: factory.domain.com"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"        http:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"          paths:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"          - path: /"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"            backend:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"              serviceName: factory"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"              servicePort: 80"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e   - host: api.factory.domain.com"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"        http:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"          paths:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"          - path: /"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"            backend:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"              serviceName: factory"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"              servicePort: 8081"))),Object(n.b)("p",null,"If you are using Ingress Nginx, do not forgot to comment ",Object(n.b)("inlineCode",{parentName:"p"},"Traefik")," and uncomment ",Object(n.b)("inlineCode",{parentName:"p"},"Ingress Nginx"),"."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"apiVersion: extensions/v1beta1"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"kind: Ingress"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"metadata:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"  name: factory"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"  annotations:"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    #kubernetes.io/ingress.class: traefik"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    kubernetes.io/ingress.class: nginx"))),Object(n.b)("p",null,"Modify the MongoDB credentials, and make sure they match the credentials of your MongoDB instance."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    - name: MONGODB_USERNAME"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),'      value: "root"'),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"    - name: MONGODB_PASSWORD"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),'--\x3e   value: "xxxxxxxxxx"'))),Object(n.b)("p",null,"Once you have corrected the DNS names (or internal /etc/hosts file), install the Factory web app inside your cluster."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl apply -f ./enterprise/yaml/factory/deployment.yaml"))),Object(n.b)("h2",{id:"test-out-configuration"},"Test out configuration"),Object(n.b)("p",null,"If everything worked out as expected, you should now have following services in your cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"MongoDB"),Object(n.b)("li",{parentName:"ul"},"Traefik"),Object(n.b)("li",{parentName:"ul"},"Factory")),Object(n.b)("p",null,"It should look like this."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",s({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"$ kubectl get pods"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"NAME                              READY   STATUS    RESTARTS   AGE"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"factory-6f5c877d7c-hf77p          1/1     Running   0          2d11h"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"mongodb-758d5c5ddd-qsfq9          1/1     Running   0          5m31s"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"vscode-highlight-line"}),"traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h"))),Object(n.b)("h2",{id:"access-the-system"},"Access the system"),Object(n.b)("p",null,"Once everything is configured correctly your cluster and DNS, you should be able to setup the Factory application. By navigating to the Factory domain ",Object(n.b)("inlineCode",{parentName:"p"},"factory.domain.com")," in your browser you will see the Factory login page showing up."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Factory",src:t("cB/m")})),Object(n.b)("style",{className:"vscode-highlight-styles"},"\n  :root {\n  --vscode-highlight-padding-v: 1rem;\n  --vscode-highlight-padding-h: 1.5rem;\n  --vscode-highlight-padding-top: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-right: var(--vscode-highlight-padding-h);\n  --vscode-highlight-padding-bottom: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-left: var(--vscode-highlight-padding-h);\n  --vscode-highlight-border-radius: 8px;\n\n  --vscode-highlight-line-highlighted-background-color: transparent;\n  --vscode-highlight-line-highlighted-border-width: 4px;\n  --vscode-highlight-line-highlighted-border-color: transparent;\n}\n\n.vscode-highlight {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 1rem;\n  padding-top: var(--vscode-highlight-padding-top);\n  padding-bottom: 1rem;\n  padding-bottom: var(--vscode-highlight-padding-bottom);\n  border-radius: 8px;\n  border-radius: var(--vscode-highlight-border-radius);\n  font-feature-settings: normal;\n}\n\n.vscode-highlight-code {\n  display: inline-block;\n  min-width: 100%;\n}\n\n.vscode-highlight-line {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 1.5rem;\n  padding-left: var(--vscode-highlight-padding-left);\n  padding-right: 1.5rem;\n  padding-right: var(--vscode-highlight-padding-right);\n}\n\n.vscode-highlight-line-highlighted {\n  background-color: var(--vscode-highlight-line-highlighted-background-color);\n  box-shadow: inset var(--vscode-highlight-line-highlighted-border-width) 0 0 0 var(--vscode-highlight-line-highlighted-border-color);\n}\n\n  .default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n"))}void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/enterprise/installation-cloud.mdx"}}),r.isMDXComponent=!0},"cB/m":function(e,a,t){e.exports=t.p+"static/kerberos-factory-loginpage-0887dc5c26ca2d07a6a0355c41434fa1.png"}}]);
//# sourceMappingURL=component---src-enterprise-installation-cloud-mdx-a149c88e70e93b163b0f.js.map