# CorrectHorseBatteryStaple

Password generator based on XKCD 936. [Use it here!](passwords.samwoolerton.com)

This is a fork of [a fork|https://github.com/FSMaxB/correcthorsebatterystaple] of the [original](http://correcthorsebatterystaple.net) by [JVDL](http://twitter.com/geekyjohn)

My changes:

- Overhaul design so it doesn't look like it was made in the early 2000s
- Rebuild frontend with a modern framework (Vue) and build system

First fork changes:

- Use cryptographically secure random number generator instead of `Math.random()`.
- Don't load content from third party servers. (local jquery, removed Google Analytics).
- Change defaults: No uppercase, space as separator, no number appended
- Display security of the password
- Support for more languages
