---
title: Pension Code Blue
kind: tech
summary: Live, unofficial estimate of the New York State Common Retirement Fund, built for coworkers to check on bad market days.
stack: PHP, HTML, Tiingo market data API
status: live
url: https://pension.poweredbyghosts.com/
repo: https://github.com/ScottSucksAtProgramming/pension-code-blue
order: 1
---

A tongue-in-cheek dashboard that tracks the New York State Common Retirement Fund's "DNR (Do Not Retire)" status. It started as a joke for coworkers who kept asking what a bad market day did to the pension, and turned into a lesson in market data, caching and keeping a small site fast.

**How the estimate works**

The State Comptroller publishes the fund's value each quarter. Between reports, the site moves the fund's stock portion with a global stock index ETF and holds everything else flat. The top 300 US holdings, from the fund's quarterly 13F filing, are listed with their daily moves. Losses come with floor commentary in EMS terms: ambulances, medic salaries and Narcan doses.

**Built to be cheap**

Prices are cached and refreshed at most every four minutes during market hours, and not at all outside them. That keeps the whole site well inside a free market data plan.

It's for entertainment, not financial advice, and it isn't affiliated with New York State. Pension benefits are constitutionally protected, so the market moves the fund, not anyone's pension.
