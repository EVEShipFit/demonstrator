# EVE Ship Fit - an web-based fitting tool for EVE Online

Similar to [Pyfa](https://github.com/pyfa-org/Pyfa), but web-based.

## History / Goals

For years there has been [Pyfa](https://github.com/pyfa-org/Pyfa), a Python tool to create and check out EVE Online ship fittings.
And it is an excellent tool.

Just in the day-to-day use of the tool, there are several disadvantages (this list is not a complete list):
- The UI is very dated, and it is often hard to find where a certain functionality is.
- Finding out what skill would improve your damage, tracking, etc, is non-trivial.
- Finding out what variants fit better in your ship, is non-trivial (it is there, just in an annoying place).
- It only runs on your local machine, making it hard to "just open it" or to link to it for others to see.
  (you can only export fits, which has to be imported to view)

Additionally, I am always a bit annoyed you can't see all stats for those fits you find online.
[EVE Workbench](https://www.eveworkbench.com) for example does show some statistics, but not everything.
And I can't easily tweak those to find out what works best for me.

So, I set out to build a web-based tool where you can do all the above easier, but also makes it easy for others to integrate similar information on their website.
This means the project has two parts:
- A complete Pyfa replacement, web-based.
- A library that calculates all the ship stats, and output it as JSON.

The web-based frontend can be used to see a fit, make modifications, import/export from in-game fittings, check out how your skills influence it, etc etc.
The library can be embedded in any application or website, to calculate the statistics for you.
This hopefully makes it easier for other sites / tools to integrate this in their site / tool.

Lastly, this project is freely available (both the source as the frontend) for anyone to use.
The frontend can generate links you can exchange with others, and when they follow the link they can just see the fit, edit it, share it back, etc.

## Frontend

TODO

## Library

The library is created in Rust, and can be compiled (or in fact, is intended to be compiled) to WebAssembly (WASM).
WASM allows for any website to integrate it, and just call it like it is a Javascript function.

## Protobuf

The Dogma-engine requires a lot of information to calculate the statistics of a fit.
To make the load-time of the webpage as fast as possible, protobuf (v2) is used to transfer the data from the web-server to the web-browser.

Not only are the protobuf files smaller, loading them in Javascript is also significantly faster.
Additionally, it is also a good moment to prepare the data a bit better, meaning the client has to do less work to start rendering the fit.

See [protobuf/](./protobuf/) for more details how the files are created.
