---
title: "Kubernetes homelab"
description: "A k3s cluster with ingress, TLS certificates, persistent storage, and home services."
category: "Systems & networks"
role: "Personal infrastructure project"
tags: ["k3s", "Traefik", "MetalLB", "cert-manager", "Longhorn"]
order: 12
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/kubernetes-cluster"}]
---

My homelab puts MetalLB in charge of local IPs, Traefik in charge of ingress, cert-manager in charge of TLS, and Longhorn in charge of storage.

The manifests cover services including Uptime Kuma and proxies for Proxmox, Pi-hole, and Home Assistant. It’s where I work through networking, certificates, and persistence myself.
