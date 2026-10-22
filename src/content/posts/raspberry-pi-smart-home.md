---
title: "How a simple Raspberry Pi computer got me into the best hobby I've ever had"
description: "A Raspberry Pi 4, Home Assistant, a few Broadlink blasters and some Shelly relays turned a 15-year-old AC and a dumb switch into a smart home my parents actually use."
date: 2026-10-22
---

![A Raspberry Pi 4 Model B board, seen from above](/images/pi4-top.jpg)
*The Raspberry Pi 4 Model B. Mine is the 8 GB one. Photo: Laserlicht / Wikimedia Commons, CC BY-SA 4.0.*

I bought a computer. A real one, with RAM and storage and everything, from a shop, at a price that didn't make me wince.

That sentence is going to sound strange in a few years. I picked up my Raspberry Pi kit from Robu back in the golden age, *before the AI explosion*, when ordinary people could still just buy a computer. Today it feels like we've wandered into a cyberpunk novel: scavenging for used parts, hunting down memory like it's contraband, assembling machines from whatever the gods of the secondary market provide.

I'm glad I got in when I did. The kit came with the official power adapter, the HDMI cable and a proper enclosure, and the board inside it was a **Raspberry Pi 4B with 8 GB of RAM**. I had no plan. I just wanted to see what it could do.

## 01 · The SD card that blew my mind

The first thing I did was flash **Home Assistant** onto the SD card that came with the Pi. I expected a blank dashboard and an afternoon of reading docs.

Instead, it *already knew things*.

Within moments Home Assistant had sniffed out the smart devices on my network, the handful I'd forgotten I even owned. The **bedside lamp**. The **TV**. They just appeared, each one with a name and a toggle, as if the house had been quietly waiting for someone to ask.

![Home Assistant's demo dashboard with rooms, lights, climate and energy cards](/images/ha-dashboard.png)
*Home Assistant's dashboard, a living map of your house. Home Assistant demo, Apache License 2.0, via Wikimedia Commons.*

> I had a computer on my desk that understood my house better than I did.

That was the hook. I've not been able to put it down since.

## 02 · Teaching a 15-year-old AC new tricks

Next I looked at the least smart things in the house: our aging air conditioners. Fifteen years old, plastic remotes, absolutely zero connectivity.

So I fell down the rabbit hole. I learnt about **SmartIR**, bought a few **Broadlink** IR controllers, and, somehow, after plenty of trial and error, made them work. Then came the part I'm proudest of: I bridged everything into **Apple HomeKit**.

`Siri` → `Home Assistant (on the Pi)` → `Broadlink IR blaster` → `15-year-old AC`

A fifteen-year-old air conditioner, running through Apple HomeKit. *Locally*. No cloud, no subscription, no waiting for a server in another country to wake up.

> **The part that actually mattered.** My parents are 60. They don't care about integrations or YAML. They care that "Hey Siri, turn on the AC" just works, and it does, every single time. The impact was so big that **we lost the AC remotes** and nobody noticed. Nobody uses them anymore.

## 03 · Meet the Shellys

Then I discovered **Shelly**. I ordered a few straight from their official website: the **3rd-gen 2PM** relays, tiny modules that hide behind a switch and quietly make it clever.

That was the final unlock. Suddenly my dumb switches and dumb lights were joining in too, all of them showing up in Apple HomeKit like they'd been smart all along. No new fixtures, no ripping out walls, just a small box behind a plate and a house that suddenly had opinions.

The whole stack:

1. **The brain:** Raspberry Pi 4B, 8 GB
2. **The software:** Home Assistant
3. **The AC whisperers:** Broadlink + SmartIR
4. **The muscle:** Shelly 2PM, Gen3
5. **The front door:** Apple HomeKit + Siri

## 04 · A very Stark kind of feeling

Very soon, my house had become a smart home. A **cheap** one. A **reliable** one. One that runs on my own hardware, on my own network, doing what I tell it to.

It became the best hobby I've ever had. And I'll admit it: at some point, standing in a dark room, saying a sentence out loud and watching the lights answer, I felt a little like **Tony Stark**.

## 05 · And then we moved

The timing turned out to be perfect. I was about to move into a new house, and everything I'd learnt on the old one, every relay, every quirk, every late-night "why won't this pair", was about to matter. A cheap little computer had been quietly training me for the real thing.

*That's a story for the next post.*
