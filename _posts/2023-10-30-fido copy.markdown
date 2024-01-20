---
layout: post
title: "Encrypted DNS"
date: 2024-01-20 17:25:02 +0300
categories: cybersecurity
tags: dns encryption privacy nextdns
featured_image: /assets/images/dns.png
image-source: https://chat.openai.com
tldr: The domain name (DNS) system is a crucial part of the past, current and future functions of the internet. Encrypted DNS services, protocols, and technologies are a way of, just as the name suggests, to encrypt DNS traffic. This blog post will go more into this area.
---

## DN What!?
So what is DNS? Well DNS requests/queries is the way we are able to type www.reddit.com into a browser, and getting redirected to the website without having to remember those pesky IP addresses. Think of DNS like the internets phone book, or <i>Internet Navigation Helpline Ltd.</i> The internet is made up of different types of addresses and pointers to systems, one of them being IP addresses, it would be a hassle to have to remember each IP addresses. Websites and apps also uses DNS systems to aid in loadbalancing, or give the IP address of a servers that is closest to the user etc. 

<hr />

## How does DNS work?

A DNS query, in simple terms, looks something like this:

1. User searches for www.reddit.com.
2. A DNS resolver searches for the IP address connected with the domain name, on DNS servers.
3. It eventually finds it, and then response with the IP address.
4. The obtained IP is sent back to the user and its device/search engine.

<hr />

## DNS Resolvers
In step #2 of the list above I mentioned a DNS resolver. It handles the actual communication between the client/end-user and the different types of DNS servers. 

1. The resolver will first look for the IP address and domain name connection in its own cache. This advantageous due to its speed. 
2. If it can't find the IP, it will look in the: 
    * Root nameserver
    * TLD nameserver
    * Authoritative or second-level domain (SLD) nameserver. 
    
There are two key types of DNS resolvers:
1. Local
    * Local ones are often issued by your internet service provider (ISP).
2. Public
    * Public resolvers are handled by bugger entities such as: Google, Cloudflare, NextDNS etc. These public ones can use encryption when resolving the DNS queries.

![Resolvers](/assets/images/dns-resolver.png)

[Image source](https://www.researchgate.net/figure/Domain-resolution-process-with-a-recursive-resolver_fig1_330006223)

<hr />

## Encryption+DNS=?

So why then encryption? Well since the DNS inception back in 1983, most of that time we have sent all DNS queries in plain-text/unencrypted. Why's that bad? Well first of all, anyone along the way can eavesdrop or look at each of your searches, which could be quite scarry. So lets say you sit at a cafe, and use their public WIFI, if you are using a regular unencrypted DNS then all of the WIFI users can look at your DNS queries. 

The DNS queries can also be manipulated and changed when they are transported unencrypted, meaning that a threat-actor could send the end-user to a different website. This type of attack is called DNS hijacking. 

When malformed or wrong data is entered into a DNS cache it's called DNS cache poisoning. When we use an encrypted DNS service or technology we move the visibility of our DNS queries from the views of the other networks's users, and your ISP to the encrypted DNS provider. So it's up to each and everyone to question if we trust our ISP or DNS provider more with our queries?

<hr />

## Encrypted DNS Protocols
There are different types of encrypted DNS protocols, created and managed by the Internet Engineering Task Force (IETF). The protocols all aid in: enhancing privacy, improving security, enhancing the overall confidentiality and integrity of users data.

* DNS over HTTPS (DoH)
    * This uses the well-known web-traffic protocol: HTTPS to encrypt the DNS traffic, as it is combined with the normal web-traffic it will be harder to differentiate from similar HTTPS traffic when implemented.
    * Port: 443
* DNS over TLS (DoT)
    * Quite alike DoH. DoT uses the TLS protocol for its encryption, but it uses a different port than the web traffic, so it can be easier to identify and pick up. Is more and more used where one want to separate HTTP and DNS queries.
    * Port: 853
* DNS over QUIC (DoQ)
    * Initially developed by Google to speed up the web, is an emerging protocol which goals are to create a more effective way of encrypting DNS traffic by using the QUIC transport layer protocol. Using UDP instead of TCP to make it potentially more effective, using "connection mitigation" help with latency and connectivity etc.
    * Port: 853

<hr />

## Encrypted DNS Resolvers

There are several services that offer encrypted/private DNS queries via public resolvers. Here are some:

* Quad9
* Cloudflare
* AdGuard
* NextDNS

These resolvers can also deliver additional services such as: adblocking, parental control, customizable filtering etc.

I've personally used [NextDNS](https://nextdns.io/){:target="_blank"} for quite some time. It lets me both encrypt, filter DNS requests, and block trackers, ads and other content on a DNS and network level. It let's me choose filters that are made up of websites and content that is seen as: adware, spyware, clickbait, popups etc. By having these filters on a DNS level, I can apply these settings to my entire home, rather than just installing uBlock (an adblocker) on each webbrowser. This will also stop trackers on non-webbrowser software, such as our smart TV, PS5 etc.

The pros I find for using a service/public resolver like NextDNS are:

1. Protection against DNS hijacking, and poisoning.
2. Getting past censorship, and locked down content by ISP or other services.
3. Blocking unwanted content, on a networkwide scale.
4. Moving my unencrypted queries form my ISP to a dedicated privacy focused encrypted DNS provider.

<hr />

## Conclusion

Soooo Encryption+DNS=Privacy&Security++. No but in general having encrypted DNS will often improve your overall privacy and security when dealing with the cyber world. It's not difficult to take the steps to enable encryption, as it becomes more available. 

From Android 9 and upwards one can use Private DNS, to use either Googles, or use a public DNS resolver. Windows users can change the DNS of their machines in their networks settings. There are several services that can be integrated on a network wide scale, like NextDNS.

I didn't go into detail about the benefits that encrypted DNS and DNS traffic in general aid in software development, and how it is used on a business and/or development level.

<iframe src="https://giphy.com/embed/J5SnIGENhws6dBRSHx" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/power-starz-season6-episode603-J5SnIGENhws6dBRSHx">via GIPHY</a></p>