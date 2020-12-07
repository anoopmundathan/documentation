(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"cB/m":function(e,a,t){e.exports=t.p+"static/kerberos-factory-loginpage-0887dc5c26ca2d07a6a0355c41434fa1.png"},mQAr:function(e,a,t){e.exports=t.p+"static/kerberos-agent-architecture-kubernetes-2693294b0a8fd42749e95c84cd06eaff.png"},"zs+c":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return h}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var n=t("/FXl"),s=t("TjRS");t("sW4K"),t("aD51");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/enterprise/installation-edge.mdx"}});var l={_frontmatter:i},o=s.a;function h(e){var a=e.components,s=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.b)(o,c({},l,s,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Welcome to the Kerberos Enterprise Edge installation. This is the way to go if you want to install Kerberos Enterprise on your Baremetal infrastructure or inside your Private Cloud."),Object(n.b)("p",null,Object(n.b)("img",{alt:"architecture kubernetes",src:t("mQAr")})),Object(n.b)("p",null,"Before we can actual start installing the different deployments in our cluster, we need to make sure we have one available."),Object(n.b)("h1",{id:"prerequisites"},"Prerequisites"),Object(n.b)("h2",{id:"docker"},"Docker"),Object(n.b)("p",null,"If you have a fresh Linux installation, make sure you have Docker installed. If not the case, this is how you can install it on a Ubuntu OSS."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"apt install docker.io -y"))),Object(n.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(n.b)("p",null,"After Docker being installed go ahead and install the different Kubernetes servicess and tools."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"apt update -y"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"apt install apt-transport-https curl -y"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),'apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main"'),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"apt update -y && apt install kubeadm kubelet kubectl kubernetes-cni -y"))),Object(n.b)("p",null,"Make sure you disable swap, this is required by Kubernetes."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"swapoff -a"))),Object(n.b)("p",null,"And if you want to make it permanent after every boot."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"sudo sed -i.bak '/ swap / s/^\\(.*\\)$/#\\1/g' /etc/fstab"))),Object(n.b)("h1",{id:"installation"},"Installation"),Object(n.b)("p",null,"Before initiating a new Kubernetes cluster, make sure you have properly cleaned up previous installation (if this was the case ofc)."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubeadm reset"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"rm -rf $HOME/.kube"))),Object(n.b)("p",null,"Initiate a new Kubernetes cluster using following command. This will use the current CIDR. If you want to use another CIDR, specify following arguments: ",Object(n.b)("inlineCode",{parentName:"p"},"--pod-network-cidr=10.244.0.0/16"),"."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubeadm init"))),Object(n.b)("p",null,"Once successful you should see the following. Note the ",Object(n.b)("inlineCode",{parentName:"p"},"discovery token")," which you need to use to connect additional nodes to your cluster."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"Your Kubernetes control-plane has initialized successfully!"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"To start using your cluster, you need to run the following as a regular user:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  mkdir -p $HOME/.kube"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  sudo chown $(id -u):$(id -g) $HOME/.kube/config"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"You should now deploy a pod network to the cluster."),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),'Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:'),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  https://kubernetes.io/docs/concepts/cluster-administration/addons/"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"Then you can join any number of worker nodes by running the following on each as root:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"})),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubeadm join 192.168.1.103:6443 --token ej7ckt.uof7o2iplqf0r2up \\"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    --discovery-token-ca-cert-hash sha256:9cbcc00d34be2dbd605174802d9e52fbcdd617324c237bf58767b369fa586209"))),Object(n.b)("p",null,"Now we have a Kubernetes cluster, we need to make sure we add make it available in our ",Object(n.b)("inlineCode",{parentName:"p"},"kubeconfig"),". This will allow us to query our Kubernetes cluster with the ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," command."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"mkdir -p $HOME/.kube"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"cp -i /etc/kubernetes/admin.conf $HOME/.kube/config"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"chown $(id -u):$(id -g) $HOME/.kube/config"))),Object(n.b)("h2",{id:"untaint-all-nodes"},"Untaint all nodes"),Object(n.b)("p",null,"By default, and in this example, we only have one node our master node. In a production scenario we would have additional worker nodes. By default the master nodes are marked as ",Object(n.b)("inlineCode",{parentName:"p"},"tainted"),", this means they cannot run workloads. To allow master nodes to run workloads, we need to untaint them. If we wouldn't do this our pods would never be scheduled, as we do not have worker nodes at this moment."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl taint nodes --all node-role.kubernetes.io/master-"))),Object(n.b)("h2",{id:"calico"},"Calico"),Object(n.b)("p",null,"Calico is an open source networking and network security solution for containers, virtual machines, and native host-based workloads. (",Object(n.b)("a",c({parentName:"p"},{href:"https://www.projectcalico.org/"}),"https://www.projectcalico.org/"),"). We will use it as our network layer in our Kubernetes cluster. You could use otthers like Flannel aswell, but we prefer Calico."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"curl https://docs.projectcalico.org/manifests/calico.yaml -O"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl apply -f calico.yaml"))),Object(n.b)("h2",{id:"kerberos-enterprise"},"Kerberos Enterprise"),Object(n.b)("p",null,"Before setting up Kerberos Enterprise, some configuration needs to happen. First thing that we need to do is setting up the RBAC permissions (Role Based Access Control). We need to enable this to be able to query specific endpoints from the Kubernetes API. By default these endpoints are locked, so we need to unlock them."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"git clone https://github.com/kerberos-io/enterprise"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl create -f ./enterprise/yaml/factory/clusterrole.yaml"))),Object(n.b)("p",null,"This will make several actions, permissions, inside your cluster available. We need this to be able to create deployments from the Kerberos Enterprise web app."),Object(n.b)("h2",{id:"metallb"},"MetalLB"),Object(n.b)("p",null,"In the Edge world, we do not have fancy Load balancers and Public IP from which we can benefit. To overcome this solutions such as MetalLB - Baremetal Load Balancer - have been developed (",Object(n.b)("a",c({parentName:"p"},{href:"https://metallb.universe.tf/installation/"}),"https://metallb.universe.tf/installation/"),"). MetalLB will dedicate an internal IP address, or IP range, which will be assigned to one or more Load Balancers."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),'kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"'))),Object(n.b)("p",null,"After installing the different MetalLB components, we need to create a ",Object(n.b)("inlineCode",{parentName:"p"},"configmap.yaml")," file. This file contains information of how MetalLB can get and use internal IP's as LoadBalancers."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  apiVersion: v1"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  kind: ConfigMap"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  metadata:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    namespace: metallb-system"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    name: config"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"  data:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    config: |"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      address-pools:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      - name: default"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"        protocol: layer2"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"        addresses:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e     - 192.168.1.200-192.168.1.210"))),Object(n.b)("p",null,"You can change the IP range above to match your needs. MetalLB will use this range as a referance to assign IP addresses to your LoadBalancers. Once ready you can apply the configration map."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl apply -f ./enterprise/yaml/metallb/configmap.yaml"))),Object(n.b)("h2",{id:"helm"},"Helm"),Object(n.b)("p",null,"Before we can start with the real work, I know we had to do a lot of preparation, we have to install another helpful tool ",Object(n.b)("inlineCode",{parentName:"p"},"Helm"),". Helm is a package manager for Kubernetes, and really makes you life easier."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"chmod 700 get_helm.sh"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"./get_helm.sh"))),Object(n.b)("p",null,"This will make sure helm 3 is installed."),Object(n.b)("h2",{id:"traefik"},"Traefik"),Object(n.b)("p",null,"To access the Kerberos Enterprise web application, we will create a service in the next paragraphs. This service will expose the web application as an Ingress. Thanks to our previous installation with MetalLB and Traefik (what we will do now), we will have a neat solution for managing our hostnames and Load Balancing IPs."),Object(n.b)("p",null,"The idea is that Traefik, will have a dedicated IP address assigned from MetalLB, and will resolve the Ingress of our Kerberos Enterprise web app. Let's go ahead with installing Traefik."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"helm repo add stable https://charts.helm.sh/stable"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"helm install traefik -f ./enterprise/yaml/traefik/values.yaml stable/traefik"))),Object(n.b)("h2",{id:"mongodb"},"MongoDB"),Object(n.b)("p",null,"When using Kerberos Enterprise, it will generate configurations for every surveillance camera deployed. These configuration files are stored centrally in a MongoDB database. Therefore we use ",Object(n.b)("inlineCode",{parentName:"p"},"helm")," to install a MongoDB instance inside your cluster."),Object(n.b)("p",null,"Before we can move into the installation of MongoDB, in contrary with the cloud installation, we will need to create a Persistent Volume (PV). For simplicity we will use ",Object(n.b)("inlineCode",{parentName:"p"},"local-storage"),", and make sure the volume is assigned to a specific node (hostname)."),Object(n.b)("p",null,"Create a folder on the node (VM), where you want to persist the data of MongoDB."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"mkdir /home/mongodb/"))),Object(n.b)("p",null,"Once done open the ",Object(n.b)("inlineCode",{parentName:"p"},"./enterprise/yaml/mongodb/volume.yaml")," file and make sure to change capacity, local path (if changed) and the hostname attribute (VM/machine, on which the directory is made available)."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    spec:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      capacity:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e    storage: 10Gi"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      accessModes:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      - ReadWriteOnce"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      persistentVolumeReclaimPolicy: Recycle"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      storageClassName: local-storage"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      local:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e    path: /home/mongodb/"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      nodeAffinity:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"        required:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"          nodeSelectorTerms:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"          - matchExpressions:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"            - key: kubernetes.io/hostname"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"              operator: In"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"              values:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e           - hostname"))),Object(n.b)("p",null,"After modified properly you can go ahead with creating the PV."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl create -f ./enterprise/yaml/mongodb/volume.yaml"))),Object(n.b)("p",null,"Have a look into the ",Object(n.b)("inlineCode",{parentName:"p"},"./enterprise/yaml/mongodb/values.yaml")," file, you will find plenty of configurations for your MongoDB instance. You will also find the attribute where you can change the root password of MongoDB. "),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"helm repo add bitnami https://charts.bitnami.com/bitnami"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"helm install mongodb bitnami/mongodb --values ./enterprise/yaml/mongodb/values-edge.yaml"))),Object(n.b)("p",null,"Once installed succesfully the MongoDB instance, we should copy the password of the MongoDB instance. Once revealed copy the password, as we will need in the next steps."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),'export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace default mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)'),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"echo $MONGODB_ROOT_PASSWORD"))),Object(n.b)("h2",{id:"kerberos-enterprise-web-app---the-factory"},"Kerberos Enterprise Web App - The Factory"),Object(n.b)("p",null,"The last step is to install the Kerberos Enterprise application. Kerberos Enterprise is managed through an application which we call the ",Object(n.b)("inlineCode",{parentName:"p"},"Factory"),". It is responsible for initiating the deployments inside your cluster. These deployments is what we also call (similar to the Open Source version) the machinery."),Object(n.b)("p",null,"The Factory is shipped as a web app (React) which provides you with a tool to update your deployments (agents) easily, monitor them, etc. The Factory is the central portal for managing Kerberos Enterprise inside your cluster. However at any point you can fine-tune or take-over using the ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl")," command."),Object(n.b)("p",null,"Before installing the Factory web app, open the ",Object(n.b)("inlineCode",{parentName:"p"},"./enterprise/yaml/factory/deployment.yaml")," configuration file. At the bottom file you will find two endpoints, similar to the traefik config file. Update the domain names to your own domain, and add these to your DNS server (pointing to the same IP as the traefik EXTERNAL-IP)."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    spec:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"      rules:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e   - host: factory.domain.com"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"        http:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"          paths:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"          - path: /"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"            backend:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"              serviceName: factory"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"              servicePort: 80"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"--\x3e   - host: api.factory.domain.com"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"        http:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"          paths:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"          - path: /"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"            backend:"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"              serviceName: factory"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"              servicePort: 8081"))),Object(n.b)("p",null,"Modify the MongoDB credentials, and make sure they match the credentials of your MongoDB instance."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    - name: MONGODB_USERNAME"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),'      value: "root"'),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"    - name: MONGODB_PASSWORD"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),'--\x3e   value: "xxxxxxxxxx"'))),Object(n.b)("p",null,"Once you have corrected the DNS names (or internal /etc/hosts file), install the Factory web app inside your cluster."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"kubectl apply -f ./enterprise/yaml/factory/deployment.yaml"))),Object(n.b)("h2",{id:"test-out-configuration"},"Test out configuration"),Object(n.b)("p",null,"If everything worked out as expected, you should now have following services in your cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"MongoDB"),Object(n.b)("li",{parentName:"ul"},"Traefik"),Object(n.b)("li",{parentName:"ul"},"Factory")),Object(n.b)("p",null,"It should look like this."),Object(n.b)("pre",{className:"default-dark vscode-highlight","data-language":""},Object(n.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"$ kubectl get pods"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"NAME                              READY   STATUS    RESTARTS   AGE"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"factory-6f5c877d7c-hf77p          1/1     Running   0          2d11h"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"mongodb-758d5c5ddd-qsfq9          1/1     Running   0          5m31s"),"\n",Object(n.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"traefik-7d566ccc47-mwslb          1/1     Running   0          4d12h"))),Object(n.b)("h2",{id:"access-the-system"},"Access the system"),Object(n.b)("p",null,"Once everything is configured correctly your cluster and DNS, you should be able to setup the Factory application. By navigating to the Factory domain ",Object(n.b)("inlineCode",{parentName:"p"},"factory.domain.com")," in your browser you will see the Factory login page showing up."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Factory",src:t("cB/m")})),Object(n.b)("style",{className:"vscode-highlight-styles"},"\n  :root {\n  --vscode-highlight-padding-v: 1rem;\n  --vscode-highlight-padding-h: 1.5rem;\n  --vscode-highlight-padding-top: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-right: var(--vscode-highlight-padding-h);\n  --vscode-highlight-padding-bottom: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-left: var(--vscode-highlight-padding-h);\n  --vscode-highlight-border-radius: 8px;\n\n  --vscode-highlight-line-highlighted-background-color: transparent;\n  --vscode-highlight-line-highlighted-border-width: 4px;\n  --vscode-highlight-line-highlighted-border-color: transparent;\n}\n\n.vscode-highlight {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 1rem;\n  padding-top: var(--vscode-highlight-padding-top);\n  padding-bottom: 1rem;\n  padding-bottom: var(--vscode-highlight-padding-bottom);\n  border-radius: 8px;\n  border-radius: var(--vscode-highlight-border-radius);\n  font-feature-settings: normal;\n}\n\n.vscode-highlight-code {\n  display: inline-block;\n  min-width: 100%;\n}\n\n.vscode-highlight-line {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 1.5rem;\n  padding-left: var(--vscode-highlight-padding-left);\n  padding-right: 1.5rem;\n  padding-right: var(--vscode-highlight-padding-right);\n}\n\n.vscode-highlight-line-highlighted {\n  background-color: var(--vscode-highlight-line-highlighted-background-color);\n  box-shadow: inset var(--vscode-highlight-line-highlighted-border-width) 0 0 0 var(--vscode-highlight-line-highlighted-border-color);\n}\n\n  .default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n"))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/enterprise/installation-edge.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-enterprise-installation-edge-mdx-e67bcb74c1d16bb4f1ff.js.map