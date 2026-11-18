---
title: WireBar
kind: tech
summary: Native macOS menu bar app that puts Wi-Fi, VPNs and network details one click away.
stack: Swift, SwiftUI, CoreWLAN, Network Extension, Sparkle
status: in testing, not yet released
repo: https://github.com/ScottSucksAtProgramming/wirebar
order: 4
---

macOS scatters network information everywhere. Wi-Fi signal is in the menu bar, switching networks is in System Settings, VPN status is in each VPN's own app, and your IP address takes a trip to Terminal or a browser. WireBar puts all of it in one popover.

**What it does**

- Shows the network name and signal strength in the menu bar, and switches networks without opening System Settings.
- Detects Ethernet and shows local IP, gateway, DNS, subnet, band, channel, link speed and BSSID.
- Finds every VPN macOS knows about (WireGuard, Tailscale, Mullvad, NordVPN, corporate VPNs) and toggles them with one click.
- Shows your public IP, refreshing it when a VPN connects or drops, plus live latency to a target you choose.
- Sends alerts when a VPN drops, your IP changes or Wi-Fi disconnects, with global hotkeys for the popover and VPN toggles.

**Privacy**

Nothing leaves your Mac. Network information stays in memory and is never logged or sent anywhere. No telemetry and no account. The only outside calls are license validation and the public IP lookup, both over HTTPS.

The plan is free Wi-Fi features forever and a one-time Pro upgrade for VPN control and the advanced tools, with no subscription. WireBar is in testing now.
