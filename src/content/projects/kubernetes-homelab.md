---
title: "Kubernetes homelab"
description: "A k3s environment for experimenting with ingress, certificates, persistent storage, and services on a home network."
category: "Systems & networks"
role: "Personal infrastructure project"
tags: ["k3s", "Traefik", "MetalLB", "cert-manager", "Longhorn"]
order: 12
links: [{"label": "GitHub repository", "url": "https://github.com/Bruol/kubernetes-cluster"}]
---

## Running the infrastructure myself

My homelab repository collects Kubernetes manifests for a small k3s cluster and the services around it. It is a place to work through the operational details that are often hidden behind a managed platform: getting traffic into the cluster, issuing certificates, attaching storage, and making services discoverable.

The [repository](https://github.com/Bruol/kubernetes-cluster) is the configuration reference. Its contents are an infrastructure snapshot, rather than a turnkey installation guide or a claim that every historical configuration is still deployed.

## Networking and certificates

MetalLB provides load-balancer addresses on the local network. Traefik acts as the ingress controller and reverse proxy, with separate ingress resources and middleware for routing, headers, and local-only access. cert-manager configurations include staging and production issuers and certificate resources.

These components handle different boundaries. A load-balancer address makes a service reachable, an ingress maps a hostname and request to a backend, and certificate automation supplies TLS. Keeping them distinct makes it easier to investigate which layer is responsible when a service is unreachable or a certificate is missing.

## Services and storage

The manifests include test Nginx deployments, Uptime Kuma, Longhorn dashboard exposure, and proxy configurations for services such as Proxmox, Pi-hole, and Home Assistant. Uptime Kuma has a persistent-volume claim alongside its deployment and service, making stateful storage part of the configuration rather than an implicit property of a machine.

Using Kubernetes for a homelab adds complexity compared with starting a single container. The value for me is learning how declarative resources compose into a working environment, and how networking, access controls, certificates, and persistence interact in practice.
